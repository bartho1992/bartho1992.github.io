/**
 * ÉLEVAGE PRO - User Management System (Firebase Realtime Database Version)
 * Système de gestion des utilisateurs avec authentification Cloud
 */

const UserManager = {
    // Variable pour stocker le profil utilisateur courant
    currentUserProfile: null,

    /**
     * Initialise le système
     */
    init() {
        // Observer l'état de l'authentification
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                console.log("Utilisateur connecté:", user.uid);
                // Charger le profil depuis Realtime Database
                const snapshot = await db.ref('users/' + user.uid).once('value');
                if (snapshot.exists()) {
                    this.currentUserProfile = snapshot.val();

                    // Màj dernière connexion et device
                    db.ref('users/' + user.uid).update({
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

            // 2. Créer le profil dans Realtime Database
            const userProfile = {
                id: user.uid,
                username: username.trim(),
                email: email,
                isAdmin: false, // Par défaut
                createdAt: new Date().toISOString(),
                lastLogin: new Date().toISOString(),
                lastDevice: navigator.userAgent,
                // On initialise la progress vide ici pour éviter les erreurs de lecture
                progress: ProgressManager.getDefaultProgress()
            };

            await db.ref('users/' + user.uid).set(userProfile);

            this.currentUserProfile = userProfile;
            return { success: true, userId: user.uid, username: username.trim() };

        } catch (error) {
            console.error("Erreur inscription:", error);
            let msg = "Erreur lors de l'inscription.";
            if (error.code === 'auth/email-already-in-use') {
                msg = "Ce nom d'utilisateur est déjà pris. Essayez-en un autre.";
            } else if (error.code === 'auth/weak-password') {
                msg = "Mot de passe trop faible (6 caractères min).";
            } else {
                // Affiche le message technique pour comprendre le problème
                msg += " (" + error.message + ")";
            }
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
            if (error.code === 'auth/invalid-credential' || error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
                msg = "Nom d'utilisateur ou mot de passe incorrect.";
            } else if (error.code === 'auth/too-many-requests') {
                msg = "Trop de tentatives. Réessayez plus tard.";
            } else {
                msg += " (" + error.message + ")";
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
        if (!this.isAdmin()) return [];

        try {
            const snapshot = await db.ref('users').orderByChild('lastLogin').once('value');
            const users = [];
            snapshot.forEach((childSnapshot) => {
                users.push(childSnapshot.val());
            });
            return users.reverse(); // Plus récent en premier
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

        const usersRef = db.ref('users').orderByChild('lastLogin');

        const listener = usersRef.on('value', (snapshot) => {
            const users = [];
            console.log("Admin: réception données utilisateurs", snapshot.numChildren());
            snapshot.forEach((childSnapshot) => {
                const u = childSnapshot.val();
                console.log(" - User:", u.username);
                users.push(u);
            });
            callback(users.reverse());
        });

        // Retourne une fonction de désinscription
        return () => usersRef.off('value', listener);
    },

    /**
     * Supprime un utilisateur (admin only)
     */
    async deleteUser(userId) {
        if (!this.isAdmin()) return { success: false, error: 'Non autorisé' };

        try {
            await db.ref('users/' + userId).remove();
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
            const snapshot = await db.ref('users/' + userId + '/progress').once('value');
            return snapshot.exists() ? snapshot.val() : null;
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
            await db.ref('users/' + userId + '/progress').set(ProgressManager.getDefaultProgress());
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    /**
     * Met à jour le profil (pour l'admin qui veut changer ses infos)
     */
    async updateAdminProfile(newUsername) {
        if (!this.isAdmin()) return { success: false, error: 'Non autorisé' };

        try {
            await db.ref('users/' + this.getCurrentUserId()).update({
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

