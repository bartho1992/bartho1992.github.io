/**
 * ÉLEVAGE PRO - User Management System
 * Système de gestion des utilisateurs avec authentification et administration
 */

const UserManager = {
    USERS_KEY: 'elevage_pro_users',
    CURRENT_USER_KEY: 'elevage_pro_current_user',
    ADMIN_USERNAME: 'admin',
    ADMIN_PASSWORD: 'admin123',

    /**
     * Initialise le système (crée ou met à jour l'admin)
     */
    init() {
        const users = this.getUsers();

        // Si l'admin n'existe pas, on le crée avec les identifiants par défaut
        if (!users['admin']) {
            users['admin'] = {
                id: 'admin',
                username: 'Admin',
                password: this.hashPassword(this.ADMIN_PASSWORD),
                isAdmin: true,
                createdAt: new Date().toISOString()
            };
            this.saveUsers(users);
        } else {
            // S'assurer que le compte admin garde ses privilèges
            if (!users['admin'].isAdmin) {
                users['admin'].isAdmin = true;
                this.saveUsers(users);
            }
        }
    },

    /**
     * Hash simple du mot de passe (pour localStorage uniquement)
     */
    hashPassword(password) {
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return 'hash_' + Math.abs(hash).toString(16);
    },

    /**
     * Récupère tous les utilisateurs
     */
    getUsers() {
        const data = localStorage.getItem(this.USERS_KEY);
        return data ? JSON.parse(data) : {};
    },

    /**
     * Sauvegarde les utilisateurs
     */
    saveUsers(users) {
        localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    },

    /**
     * Inscrit un nouvel utilisateur
     */
    register(username, password) {
        if (!username || username.trim().length < 2) {
            return { success: false, error: 'Le nom doit contenir au moins 2 caractères' };
        }
        if (!password || password.length < 4) {
            return { success: false, error: 'Le mot de passe doit contenir au moins 4 caractères' };
        }

        const users = this.getUsers();
        const userId = username.toLowerCase().replace(/\s+/g, '_');

        if (users[userId]) {
            return { success: false, error: 'Ce nom d\'utilisateur existe déjà' };
        }

        users[userId] = {
            id: userId,
            username: username.trim(),
            password: this.hashPassword(password),
            isAdmin: false,
            createdAt: new Date().toISOString()
        };

        this.saveUsers(users);
        this.setCurrentUser(userId, username.trim(), false);
        ProgressManager.initUserProgress(userId);

        return { success: true, userId: userId, username: username.trim() };
    },

    /**
     * Connecte un utilisateur
     */
    login(username, password) {
        if (!username || !password) {
            return { success: false, error: 'Veuillez remplir tous les champs' };
        }

        const users = this.getUsers();
        const userId = username.toLowerCase().replace(/\s+/g, '_');
        const user = users[userId];

        if (!user) {
            return { success: false, error: 'Utilisateur non trouvé' };
        }

        if (user.password !== this.hashPassword(password)) {
            return { success: false, error: 'Mot de passe incorrect' };
        }

        this.setCurrentUser(userId, user.username, user.isAdmin || false);
        return { success: true, userId: userId, username: user.username, isAdmin: user.isAdmin };
    },

    /**
     * Déconnecte l'utilisateur actuel
     */
    logout() {
        localStorage.removeItem(this.CURRENT_USER_KEY);
        return { success: true };
    },

    /**
     * Définit l'utilisateur courant
     */
    setCurrentUser(userId, username, isAdmin = false) {
        localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify({
            id: userId,
            username: username,
            isAdmin: isAdmin
        }));
    },

    /**
     * Récupère l'utilisateur courant
     */
    getCurrentUser() {
        const data = localStorage.getItem(this.CURRENT_USER_KEY);
        return data ? JSON.parse(data) : null;
    },

    /**
     * Vérifie si un utilisateur est connecté
     */
    isLoggedIn() {
        return !!this.getCurrentUser();
    },

    /**
     * Vérifie si l'utilisateur courant est admin
     */
    isAdmin() {
        const user = this.getCurrentUser();
        return user?.isAdmin || false;
    },

    /**
     * Récupère le nom d'affichage de l'utilisateur courant
     */
    getCurrentUsername() {
        const user = this.getCurrentUser();
        return user ? user.username : null;
    },

    /**
     * Récupère l'ID de l'utilisateur courant
     */
    getCurrentUserId() {
        const user = this.getCurrentUser();
        return user ? user.id : null;
    },

    // === FONCTIONS D'ADMINISTRATION ===

    /**
     * Récupère la liste de tous les utilisateurs (admin only)
     */
    getAllUsers() {
        if (!this.isAdmin()) return [];

        const users = this.getUsers();
        return Object.values(users).map(user => ({
            id: user.id,
            username: user.username,
            isAdmin: user.isAdmin || false,
            createdAt: user.createdAt
        }));
    },

    /**
     * Supprime un utilisateur (admin only)
     */
    deleteUser(userId) {
        if (!this.isAdmin()) {
            return { success: false, error: 'Action non autorisée' };
        }
        if (userId === 'admin') {
            return { success: false, error: 'Impossible de supprimer l\'administrateur' };
        }

        const users = this.getUsers();
        if (!users[userId]) {
            return { success: false, error: 'Utilisateur non trouvé' };
        }

        delete users[userId];
        this.saveUsers(users);

        // Supprimer aussi la progression de l'utilisateur
        localStorage.removeItem('elevage_pro_progress_' + userId);

        return { success: true };
    },

    /**
     * Récupère la progression d'un utilisateur (admin only)
     */
    getUserProgress(userId) {
        if (!this.isAdmin()) return null;

        const data = localStorage.getItem('elevage_pro_progress_' + userId);
        return data ? JSON.parse(data) : null;
    },

    /**
     * Réinitialise la progression d'un utilisateur (admin only)
     */
    resetUserProgress(userId) {
        if (!this.isAdmin()) {
            return { success: false, error: 'Action non autorisée' };
        }

        ProgressManager.initUserProgress(userId);
        return { success: true };
    },

    /**
     * Promouvoir un utilisateur en admin
     */
    promoteToAdmin(userId) {
        if (!this.isAdmin()) {
            return { success: false, error: 'Action non autorisée' };
        }

        const users = this.getUsers();
        if (!users[userId]) {
            return { success: false, error: 'Utilisateur non trouvé' };
        }

        users[userId].isAdmin = true;
        this.saveUsers(users);
        return { success: true };
    },

    /**
     * Rétrograder un admin en utilisateur normal
     */
    demoteFromAdmin(userId) {
        if (!this.isAdmin()) {
            return { success: false, error: 'Action non autorisée' };
        }
        if (userId === 'admin') {
            return { success: false, error: 'Impossible de rétrograder l\'administrateur principal' };
        }

        const users = this.getUsers();
        if (!users[userId]) {
            return { success: false, error: 'Utilisateur non trouvé' };
        }

        users[userId].isAdmin = false;
        this.saveUsers(users);
        return { success: true };
    },

    /**
     * Met à jour le profil de l'administrateur principal
     */
    updateAdminProfile(newUsername, newPassword) {
        if (!this.isAdmin()) {
            return { success: false, error: 'Action non autorisée' };
        }

        const users = this.getUsers();
        const admin = users['admin'];

        if (!admin) {
            return { success: false, error: 'Admin non trouvé' };
        }

        // Mise à jour du nom
        if (newUsername && newUsername.trim().length >= 2) {
            admin.username = newUsername.trim();
        }

        // Mise à jour du mot de passe
        if (newPassword && newPassword.length >= 4) {
            admin.password = this.hashPassword(newPassword);
        }

        this.saveUsers(users);

        // Mettre à jour la session si c'est l'admin qui modifie son profil
        const currentUser = this.getCurrentUser();
        if (currentUser && currentUser.id === 'admin') {
            this.setCurrentUser('admin', admin.username, true);
        }

        return { success: true, username: admin.username };
    },

    /**
     * Récupère les informations de l'admin
     */
    getAdminInfo() {
        if (!this.isAdmin()) return null;

        const users = this.getUsers();
        return users['admin'] ? { username: users['admin'].username } : null;
    }
};

// Initialisation au chargement
UserManager.init();

