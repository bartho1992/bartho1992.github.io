/**
 * ÉLEVAGE PRO - Progress Management System
 * Gestion de la progression par utilisateur avec localStorage
 */

const ProgressManager = {
    STORAGE_PREFIX: 'elevage_pro_progress_',

    /**
     * Obtient la clé de stockage pour l'utilisateur courant
     */
    getStorageKey() {
        const userId = UserManager.getCurrentUserId();
        return userId ? this.STORAGE_PREFIX + userId : this.STORAGE_PREFIX + 'anonymous';
    },

    /**
     * Initialise le système de progression
     */
    init() {
        if (UserManager.isLoggedIn() && !this.getProgress()) {
            this.resetProgress();
        }
    },

    /**
     * Initialise la progression pour un nouvel utilisateur
     */
    initUserProgress(userId) {
        const key = this.STORAGE_PREFIX + userId;
        const defaultProgress = this.getDefaultProgress();
        localStorage.setItem(key, JSON.stringify(defaultProgress));
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
     * Récupère toute la progression de l'utilisateur courant
     */
    getProgress() {
        const data = localStorage.getItem(this.getStorageKey());
        return data ? JSON.parse(data) : null;
    },

    /**
     * Sauvegarde la progression
     */
    saveProgress(progress) {
        localStorage.setItem(this.getStorageKey(), JSON.stringify(progress));
    },

    /**
     * Réinitialise la progression
     */
    resetProgress() {
        const defaultProgress = this.getDefaultProgress();
        this.saveProgress(defaultProgress);
        return defaultProgress;
    },

    /**
     * Marque un module comme terminé
     */
    completeModule(animalType, moduleIndex) {
        let progress = this.getProgress();
        if (!progress) {
            progress = this.resetProgress();
        }
        if (!progress[animalType].completed.includes(moduleIndex)) {
            progress[animalType].completed.push(moduleIndex);
            this.saveProgress(progress);
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
        if (!progress) {
            progress = this.resetProgress();
        }
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
            totalModules += progress[animal].completed.length;
            const quizzes = Object.values(progress[animal].quizScores);
            totalQuizzes += quizzes.length;
            quizzes.forEach(q => {
                totalScore += (q.score / q.total) * 100;
            });
        }

        return {
            totalModules,
            totalQuizzes,
            avgScore: totalQuizzes > 0 ? Math.round(totalScore / totalQuizzes) : 0
        };
    }
};
