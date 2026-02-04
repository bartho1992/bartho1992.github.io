/**
 * ÉLEVAGE PRO - User Management System (Firebase Version)
 * Système de gestion des utilisateurs avec authentification Cloud
 */

const UserManager = {
    // Variable pour stocker le profil utilisateur courant (depuis Firestore)
    currentUserProfile: null,

    /**
     * Initialise le système
     */
    init() {
        // Observer l'état de l'authentification
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                console.log("Utilisateur connecté:", user.uid);
                // Charger le profil depuis Firestore
                const userDoc = await db.collection('users').doc(user.uid).get();
                if (userDoc.exists) {
                    this.currentUserProfile = userDoc.data();

                    // Màj dernière connexion et device
                    db.collection('users').doc(user.uid).update({
                        lastLogin: new Date().toISOString(),
                        lastDevice: navigator.userAgent
                    });

                    // Notifier l'app que le login est succès (si App existe)
                    if (typeof App !== 'undefined' && App.onLoginSuccess) {
                        App.onLoginSuccess();
                    }
                }
            } else {
                console.log("Utilisateur déconnecté");
                this.currentUserProfile = null;
                if (typeof App !== 'undefined' && App.showAuthModal) {
                    App.showAuthModal();
                }
            }
        });
    },

    /**
     * Génère un email fictif à partir du nom d'utilisateur
     */
    _getEmail(username) {
        // Enlève les espaces et caractères spéciaux pour l'email
        const cleanName = username.toLowerCase().replace(/[^a-z0-9]/g, '');
        return `${cleanName}@elevage-pro.local`;
    },

    /**
     * Inscrit un nouvel utilisateur
     */
    async register(username, password) {
        if (!username || username.trim().length < 2) {
            return { success: false, error: 'Le nom doit contenir au moins 2 caractères' };
        }
        if (!password || password.length < 6) { // Firebase demande 6 chars min
            return { success: false, error: 'Le mot de passe doit contenir au moins 6 caractères' };
        }

        try {
            const email = this._getEmail(username);

            // 1. Créer le compte Auth
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;

            // 2. Créer le profil dans Firestore
            const userProfile = {
                id: user.uid,
                username: username.trim(),
                email: email,
                isAdmin: false, // Par défaut
                createdAt: new Date().toISOString(),
                lastLogin: new Date().toISOString(),
                lastDevice: navigator.userAgent
            };

            await db.collection('users').doc(user.uid).set(userProfile);

            this.currentUserProfile = userProfile;
            return { success: true, userId: user.uid, username: username.trim() };

        } catch (error) {
            console.error("Erreur inscription:", error);
            let msg = "Erreur lors de l'inscription.";
            if (error.code === 'auth/email-already-in-use') msg = "Ce nom d'utilisateur est déjà pris.";
            if (error.code === 'auth/weak-password') msg = "Mot de passe trop faible.";
            return { success: false, error: msg };
        }
    },

    /**
     * Connecte un utilisateur
     */
    async login(username, password) {
        if (!username || !password) {
            return { success: false, error: 'Veuillez remplir tous les champs' };
        }

        try {
            const email = this._getEmail(username);
            await auth.signInWithEmailAndPassword(email, password);
            // onAuthStateChanged s'occupera du reste
            return { success: true };
        } catch (error) {
            console.error("Erreur connexion:", error);
            let msg = "Erreur de connexion.";
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                msg = "Nom d'utilisateur ou mot de passe incorrect.";
            }
            return { success: false, error: msg };
        }
    },

    /**
     * Déconnecte l'utilisateur actuel
     */
    async logout() {
        await auth.signOut();
        this.currentUserProfile = null;
        return { success: true };
    },

    /**
     * Récupère l'utilisateur courant (synchrone car mis en cache dans init)
     */
    getCurrentUser() {
        return this.currentUserProfile;
    },

    /**
     * Vérifie si un utilisateur est connecté
     */
    isLoggedIn() {
        return !!auth.currentUser;
    },

    /**
     * Vérifie si l'utilisateur courant est admin
     */
    isAdmin() {
        return this.currentUserProfile?.isAdmin || false;
    },

    /**
     * Récupère le nom d'affichage de l'utilisateur courant
     */
    getCurrentUsername() {
        return this.currentUserProfile ? this.currentUserProfile.username : null;
    },

    /**
     * Récupère l'ID de l'utilisateur courant
     */
    getCurrentUserId() {
        return auth.currentUser ? auth.currentUser.uid : null;
    },

    // === FONCTIONS D'ADMINISTRATION (Async maintenant) ===

    /**
     * Récupère la liste de tous les utilisateurs (admin only)
     */
    async getAllUsers() {
        // Note: Seules les règles de sécurité Firestore empêcheront réellement l'accès
        // Mais on check quand même ici pour l'UI
        if (!this.isAdmin()) return [];

        try {
            const snapshot = await db.collection('users').orderBy('lastLogin', 'desc').get();
            return snapshot.docs.map(doc => doc.data());
        } catch (error) {
            console.error("Erreur récupération utilisateurs:", error);
            return [];
        }
    },

    /**
     * Écoute la liste des utilisateurs en temps réel
     */
    subscribeToAllUsers(callback) {
        if (!this.isAdmin()) return null;

        return db.collection('users').orderBy('lastLogin', 'desc')
            .onSnapshot((snapshot) => {
                const users = snapshot.docs.map(doc => doc.data());
                callback(users);
            });
    },

    /**
     * Supprime un utilisateur (admin only)
     * Note: On ne peut pas supprimer le compte Auth sans Cloud Functions d'admin,
     * Donc on va juste supprimer le doc Firestore pour l'instant (soft delete)
     */
    async deleteUser(userId) {
        if (!this.isAdmin()) return { success: false, error: 'Non autorisé' };

        try {
            await db.collection('users').doc(userId).delete();
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    /**
     * Récupère la progression d'un utilisateur (admin only)
     */
    async getUserProgress(userId) {
        if (!this.isAdmin()) return null;

        try {
            const doc = await db.collection('users').doc(userId).collection('data').doc('progress').get();
            return doc.exists ? doc.data() : null;
        } catch (error) {
            console.error("Erreur lecture progression:", error);
            return null;
        }
    },

    /**
     * Réinitialise la progression d'un utilisateur (admin only)
     */
    async resetUserProgress(userId) {
        if (!this.isAdmin()) return { success: false, error: 'Non autorisé' };

        try {
            // On délègue au ProgressManager ou on supprime direct le doc
            await db.collection('users').doc(userId).collection('data').doc('progress').delete();
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    /**
     * Met à jour le profil (pour l'admin qui veut changer ses infos)
     * Note: Changer le mot de passe est complexe avec Firebase Client SDK sans re-login
     * On va juste permettre de changer le Username pour l'instant
     */
    async updateAdminProfile(newUsername) {
        if (!this.isAdmin()) return { success: false, error: 'Non autorisé' };

        try {
            await db.collection('users').doc(this.getCurrentUserId()).update({
                username: newUsername
            });
            this.currentUserProfile.username = newUsername;
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    getAdminInfo() {
        return this.currentUserProfile;
    }
};

// Initialisation au chargement
UserManager.init();

