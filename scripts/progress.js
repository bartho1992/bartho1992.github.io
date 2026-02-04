/**
 * ÉLEVAGE PRO - Progress Management System (Firebase Version)
 * Gestion de la progression synchronisée avec Firestore
 */

const ProgressManager = {
    // Cache local pour éviter les latences de lecture et permettre l'accès synchrone
    _cache: null,

    /**
     * Initialise le système de progression (Charge depuis Firestore)
     */
    async init() {
        if (!UserManager.isLoggedIn()) {
            this._cache = null;
            return;
        }

        const userId = UserManager.getCurrentUserId();
        if (!userId) return;

        try {
            // Essayer de charger depuis Firestore
            const doc = await db.collection('users').doc(userId).collection('data').doc('progress').get();

            if (doc.exists) {
                this._cache = doc.data();
            } else {
                // Créer si n'existe pas
                this._cache = this.getDefaultProgress();
                await this.saveCacheToFirestore();
            }
            console.log("Progression chargée:", this._cache);
        } catch (error) {
            console.error("Erreur chargement progression:", error);
            // Fallback sur défaut si erreur (ex: offline)
            this._cache = this.getDefaultProgress();
        }
    },

    /**
     * Initialise la progression pour un nouvel utilisateur (Appelé par UserManager.register)
     */
    async initUserProgress(userId) {
        this._cache = this.getDefaultProgress();
        // On force la sauvegarde pour ce user spécifique
        try {
            await db.collection('users').doc(userId).collection('data').doc('progress').set(this._cache);
        } catch (error) {
            console.error("Erreur init progression:", error);
        }
    },

    /**
     * Retourne la structure de progression par défaut
     */
    getDefaultProgress() {
        return {
            bovins: { completed: [], quizScores: {} },
            'ovins-caprins': { completed: [], quizScores: {} },
            volailles: { completed: [], quizScores: {} },
            apiculture: { completed: [], quizScores: {} },
            cuniculture: { completed: [], quizScores: {} },
            aquaculture: { completed: [], quizScores: {} }
        };
    },

    /**
     * Récupère toute la progression (Synchrone depuis cache)
     */
    getProgress() {
        if (!this._cache && UserManager.isLoggedIn()) {
            // Si pas de cache mais loggé, on retourne défaut temporairement
            // Idéalement, init() devrait être await avant d'appeler ça
            return this.getDefaultProgress();
        }
        return this._cache;
    },

    /**
     * Sauvegarde la progression (Cache + Firestore Async)
     */
    async saveProgress(progress) {
        this._cache = progress;
        await this.saveCacheToFirestore();
    },

    /**
     * Sauvegarde interne vers Firestore
     */
    async saveCacheToFirestore() {
        const userId = UserManager.getCurrentUserId();
        if (!userId || !this._cache) return;

        try {
            await db.collection('users').doc(userId).collection('data').doc('progress').set(this._cache);
        } catch (error) {
            console.error("Erreur sauvegarde progression:", error);
        }
    },

    /**
     * Réinitialise la progression
     */
    async resetProgress() {
        const defaultProgress = this.getDefaultProgress();
        await this.saveProgress(defaultProgress);
        return defaultProgress;
    },

    /**
     * Marque un module comme terminé
     */
    completeModule(animalType, moduleIndex) {
        let progress = this.getProgress();
        if (!progress) progress = this.getDefaultProgress();

        // Initialiser si nécessaire (pour éviter crash sur vielles versions)
        if (!progress[animalType]) progress[animalType] = { completed: [], quizScores: {} };

        if (!progress[animalType].completed.includes(moduleIndex)) {
            progress[animalType].completed.push(moduleIndex);
            this.saveProgress(progress); // Async mais on n'attend pas forcément
        }
        return progress;
    },

    /**
     * Vérifie si un module est terminé
     */
    isModuleCompleted(animalType, moduleIndex) {
        const progress = this.getProgress();
        return progress?.[animalType]?.completed.includes(moduleIndex) || false;
    },

    /**
     * Enregistre le score d'un quiz
     */
    saveQuizScore(animalType, moduleIndex, score, total) {
        let progress = this.getProgress();
        if (!progress) progress = this.getDefaultProgress();

        if (!progress[animalType]) progress[animalType] = { completed: [], quizScores: {} };

        progress[animalType].quizScores[moduleIndex] = {
            score,
            total,
            date: new Date().toISOString()
        };
        this.saveProgress(progress);
        return progress;
    },

    /**
     * Récupère le score d'un quiz
     */
    getQuizScore(animalType, moduleIndex) {
        const progress = this.getProgress();
        return progress?.[animalType]?.quizScores[moduleIndex] || null;
    },

    /**
     * Calcule le pourcentage de progression pour un animal
     */
    getProgressPercentage(animalType, totalModules = 7) {
        const progress = this.getProgress();
        if (!progress) return 0;
        const completed = progress[animalType]?.completed.length || 0;
        return Math.round((completed / totalModules) * 100);
    },

    /**
     * Vérifie si toute la formation d'un animal est terminée
     */
    isFormationComplete(animalType, totalModules = 7) {
        const progress = this.getProgress();
        if (!progress) return false;
        return progress[animalType]?.completed.length >= totalModules;
    },

    /**
     * Récupère le nombre total de modules terminés
     */
    getTotalCompleted() {
        const progress = this.getProgress();
        if (!progress) return 0;
        let total = 0;
        for (const animal in progress) {
            total += progress[animal].completed.length;
        }
        return total;
    },

    /**
     * Obtient les statistiques globales de l'utilisateur
     */
    getUserStats() {
        const progress = this.getProgress();
        if (!progress) {
            return { totalModules: 0, totalQuizzes: 0, avgScore: 0 };
        }

        let totalModules = 0;
        let totalQuizzes = 0;
        let totalScore = 0;

        for (const animal in progress) {
            if (progress[animal]) {
                totalModules += progress[animal].completed.length;
                const quizzes = Object.values(progress[animal].quizScores);
                totalQuizzes += quizzes.length;
                quizzes.forEach(q => {
                    totalScore += (q.score / q.total) * 100;
                });
            }
        }

        return {
            totalModules,
            totalQuizzes,
            avgScore: totalQuizzes > 0 ? Math.round(totalScore / totalQuizzes) : 0
        };
    }
};
