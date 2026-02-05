/**
 * ÉLEVAGE PRO - Main Application
 * Application principale avec authentification multi-utilisateurs
 */

// Configuration des formations
const FORMATIONS = {
    bovins: {
        id: 'bovins',
        name: 'Bovins',
        icon: '🐄',
        color: '#8b4513',
        description: 'Élevage de vaches laitières et bovins à viande',
        image: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=400',
        data: typeof bovinsData !== 'undefined' ? bovinsData : null
    },
    'ovins-caprins': {
        id: 'ovins-caprins',
        name: 'Ovins & Caprins',
        icon: '🐑',
        color: '#dda15e',
        description: 'Élevage de moutons, brebis et chèvres',
        image: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=400',
        data: typeof ovinsCaprinsData !== 'undefined' ? ovinsCaprinsData : null
    },
    volailles: {
        id: 'volailles',
        name: 'Volailles',
        icon: '🐔',
        color: '#e76f51',
        description: 'Poules, poulets, canards, pigeons et cailles',
        image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400',
        data: typeof volaillesData !== 'undefined' ? volaillesData : null
    },
    apiculture: {
        id: 'apiculture',
        name: 'Apiculture',
        icon: '🐝',
        color: '#f4a261',
        description: 'Élevage d\'abeilles et production de miel',
        image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400',
        data: typeof apicultureData !== 'undefined' ? apicultureData : null
    },
    cuniculture: {
        id: 'cuniculture',
        name: 'Cuniculture',
        icon: '🐰',
        color: '#a98467',
        description: 'Élevage de lapins pour la viande',
        image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400',
        data: typeof cunicultureData !== 'undefined' ? cunicultureData : null
    },
    aquaculture: {
        id: 'aquaculture',
        name: 'Aquaculture',
        icon: '🐟',
        color: '#219ebc',
        description: 'Élevage de poissons en eau douce et marine',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400',
        data: typeof aquacultureData !== 'undefined' ? aquacultureData : null
    }
};

// Noms des modules
const MODULE_NAMES = [
    'Alimentation et nutrition',
    'Reproduction et génétique',
    'Santé animale et prévention',
    'Logement et infrastructures',
    'Gestion économique',
    'Réglementation sanitaire',
    'Bien-être animal'
];

/**
 * Application principale
 */
const App = {
    currentFormation: null,
    currentModule: null,

    /**
     * Initialise l'application
     */
    init() {
        // Ensure Volailles data is linked if available
        if (typeof volaillesData !== 'undefined') {
            FORMATIONS.volailles.data = volaillesData;
        }

        this.setupEventListeners();
    },

    /**
     * Configure l'affichage/masquage des mots de passe
     */
    setupPasswordToggles() {
        document.querySelectorAll('.btn-toggle-password').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const input = btn.previousElementSibling;
                if (input && input.tagName === 'INPUT') {
                    if (input.type === 'password') {
                        input.type = 'text';
                        btn.textContent = '🔓';
                    } else {
                        input.type = 'password';
                        btn.textContent = '👁️';
                    }
                }
            };
        });
    },

    /**
     * Vérifie l'authentification
     */
    checkAuth() {
        if (!UserManager.isLoggedIn()) {
            this.showAuthModal();
        } else {
            this.onLoginSuccess();
        }
    },

    /**
     * Appelé quand l'utilisateur est connecté
     */
    async onLoginSuccess() {
        await ProgressManager.init();
        this.renderFormationsGrid();
        this.renderProgressOverview();
        this.renderCertificates();
        this.updateUserDisplay();
        document.getElementById('authModal')?.classList.remove('active');
    },

    /**
     * Affiche le modal d'authentification
     */
    showAuthModal() {
        const modal = document.getElementById('authModal');
        modal.classList.add('active');
        this.setupAuthHandlers();
    },

    /**
     * Configure les gestionnaires d'authentification
     */
    setupAuthHandlers() {
        // Gestion des onglets
        document.querySelectorAll('.auth-tab').forEach(tab => {
            tab.onclick = () => {
                document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const tabName = tab.dataset.tab;
                document.getElementById('loginForm').classList.toggle('hidden', tabName !== 'login');
                document.getElementById('registerForm').classList.toggle('hidden', tabName !== 'register');

                // Effacer les erreurs
                document.getElementById('loginError').classList.remove('visible');
                document.getElementById('registerError').classList.remove('visible');
            };
        });

        // Bouton connexion
        document.getElementById('btnLogin').onclick = () => this.handleLogin();

        // Bouton inscription
        document.getElementById('btnRegister').onclick = () => this.handleRegister();

        // Enter key handlers
        ['loginUsername', 'loginPassword'].forEach(id => {
            document.getElementById(id).addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.handleLogin();
            });
        });

        ['registerUsername', 'registerPassword', 'registerConfirm'].forEach(id => {
            document.getElementById(id).addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.handleRegister();
            });
        });
    },

    /**
     * Gère la connexion
     */
    async handleLogin() {
        const username = document.getElementById('loginUsername').value.trim();
        const password = document.getElementById('loginPassword').value;
        const errorDiv = document.getElementById('loginError');
        const btn = document.getElementById('btnLogin');

        if (!username || !password) return;

        btn.disabled = true;
        btn.textContent = 'Connexion...';

        const result = await UserManager.login(username, password);

        if (!result.success) {
            errorDiv.textContent = result.error;
            errorDiv.classList.add('visible');
            btn.disabled = false;
            btn.textContent = 'Se connecter';
        }
        // Si succès, UserManager.init() déclenchera App.onLoginSuccess() via le callback
    },

    /**
     * Gère l'inscription
     */
    async handleRegister() {
        const username = document.getElementById('registerUsername').value.trim();
        const password = document.getElementById('registerPassword').value;
        const confirm = document.getElementById('registerConfirm').value;
        const errorDiv = document.getElementById('registerError');
        const btn = document.getElementById('btnRegister');

        if (password !== confirm) {
            errorDiv.textContent = 'Les mots de passe ne correspondent pas';
            errorDiv.classList.add('visible');
            return;
        }

        btn.disabled = true;
        btn.textContent = 'Création...';

        const result = await UserManager.register(username, password);

        if (!result.success) {
            errorDiv.textContent = result.error;
            errorDiv.classList.add('visible');
            btn.disabled = false;
            btn.textContent = 'Créer mon compte';
        }
    },

    /**
     * Gère la déconnexion
     */
    handleLogout() {
        UserManager.logout();
        this.showAuthModal();
        this.showToast('info', 'Vous êtes déconnecté');

        // Réinitialiser les formulaires
        document.getElementById('loginUsername').value = '';
        document.getElementById('loginPassword').value = '';
        document.getElementById('registerUsername').value = '';
        document.getElementById('registerPassword').value = '';
        document.getElementById('registerConfirm').value = '';
    },

    /**
     * Met à jour l'affichage du nom d'utilisateur
     */
    updateUserDisplay() {
        const userName = UserManager.getCurrentUsername();
        const isAdmin = UserManager.isAdmin();

        if (userName) {
            document.getElementById('userName').textContent = userName;
        }

        // Afficher/masquer le bouton admin
        const adminBtn = document.getElementById('btnAdmin');
        if (adminBtn) {
            adminBtn.classList.toggle('hidden', !isAdmin);
        }
    },

    /**
     * Configure les écouteurs d'événements
     */
    setupEventListeners() {
        // Bouton profil
        document.getElementById('btnProfile').onclick = () => {
            const stats = ProgressManager.getUserStats();
            this.showToast('info', `📊 ${stats.totalModules} modules | Score: ${stats.avgScore}%`);
        };

        // Bouton déconnexion
        document.getElementById('btnLogout').onclick = () => this.handleLogout();

        // Bouton admin
        document.getElementById('btnAdmin').onclick = () => this.showAdminModal();

        // Fermeture modal admin
        document.getElementById('adminModalClose').onclick = () => this.closeAdminModal();
        document.querySelector('#adminModal .modal-overlay').onclick = () => this.closeAdminModal();

        // Fermeture des modals
        document.getElementById('modalClose').onclick = () => this.closeModuleModal();
        document.querySelector('#moduleModal .modal-overlay').onclick = () => this.closeModuleModal();

        // Navigation fluide
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    },

    // === FONCTIONS D'ADMINISTRATION ===

    /**
     * Affiche le modal d'administration
     */
    // Variable pour stocker l'abonnement Firestore
    unsubscribeAdmin: null,

    /**
     * Affiche le modal d'administration
     */
    showAdminModal() {
        if (!UserManager.isAdmin()) return;

        // S'abonner aux mises à jour en temps réel
        if (this.unsubscribeAdmin) this.unsubscribeAdmin();

        this.unsubscribeAdmin = UserManager.subscribeToAllUsers((users) => {
            this.renderAdminUsersList(users);
            this.renderAdminStats(users);
        });

        this.initAdminProfileForm();
        document.getElementById('adminModal').classList.add('active');
    },

    /**
     * Initialise le formulaire de modification du profil admin
     */
    initAdminProfileForm() {
        const adminInfo = UserManager.getAdminInfo();
        if (adminInfo) {
            document.getElementById('adminNewUsername').value = adminInfo.username;
        }
        document.getElementById('adminNewPassword').value = ''; // Password change not supported cleanly yet
        document.getElementById('adminProfileSuccess').classList.add('hidden');

        // Gestionnaire pour le bouton de mise à jour
        document.getElementById('btnUpdateAdmin').onclick = () => this.handleUpdateAdminProfile();
    },

    /**
     * Gère la mise à jour du profil admin
     */
    async handleUpdateAdminProfile() {
        const newUsername = document.getElementById('adminNewUsername').value;
        const btn = document.getElementById('btnUpdateAdmin');

        btn.disabled = true;
        const result = await UserManager.updateAdminProfile(newUsername);
        btn.disabled = false;

        if (result.success) {
            document.getElementById('adminProfileSuccess').classList.remove('hidden');
            this.updateUserDisplay();
            this.showToast('success', 'Profil admin mis à jour ! 👑');

            setTimeout(() => {
                document.getElementById('adminProfileSuccess').classList.add('hidden');
            }, 3000);
        } else {
            this.showToast('error', result.error);
        }
    },

    /**
     * Ferme le modal d'administration
     */
    closeAdminModal() {
        document.getElementById('adminModal').classList.remove('active');
        if (this.unsubscribeAdmin) {
            this.unsubscribeAdmin();
            this.unsubscribeAdmin = null;
        }
    },

    /**
     * Affiche les statistiques d'administration
     */
    renderAdminStats(users) {
        // users est passé par le subscribe
        if (!users) return;

        const admins = users.filter(u => u.isAdmin).length;

        document.getElementById('adminStats').innerHTML = `
            <div class="admin-stat-card">
                <div class="admin-stat-value">${users.length}</div>
                <div class="admin-stat-label">Utilisateurs</div>
            </div>
            <div class="admin-stat-card">
                <div class="admin-stat-value">${admins}</div>
                <div class="admin-stat-label">Admins</div>
            </div>
            <div class="admin-stat-card">
                <div class="admin-stat-value">Cloud</div>
                <div class="admin-stat-label">Connecté 🟢</div>
            </div>
        `;
    },

    /**
     * Affiche la liste des utilisateurs
     */
    renderAdminUsersList(users) {
        if (!users) return;
        const container = document.getElementById('adminUsersList');
        const currentUserId = UserManager.getCurrentUserId();

        container.innerHTML = users.map(user => {
            const createdDate = new Date(user.createdAt).toLocaleDateString('fr-FR');
            // Analyse simple du User Agent pour l'affichage
            let deviceIcon = '💻';
            let deviceName = 'Inconnu';
            const ua = user.lastDevice || '';

            if (/mobile/i.test(ua)) {
                deviceIcon = '📱';
                deviceName = 'Mobile';
            } else if (/tablet/i.test(ua)) {
                deviceIcon = '📱';
                deviceName = 'Tablette';
            } else {
                deviceName = 'Ordinateur';
            }

            if (/chrome/i.test(ua)) deviceName += ' (Chrome)';
            else if (/firefox/i.test(ua)) deviceName += ' (Firefox)';
            else if (/safari/i.test(ua)) deviceName += ' (Safari)';

            const lastLogin = user.lastLogin ? new Date(user.lastLogin).toLocaleDateString('fr-FR') : 'Jamais';

            return `
                <div class="admin-user-card">
                    <div class="admin-user-info">
                        <div class="admin-user-avatar">${user.isAdmin ? '👑' : '👤'}</div>
                        <div class="admin-user-details">
                            <div class="admin-user-name">
                                ${user.username}
                                ${user.isAdmin ? '<span class="admin-user-badge">Admin</span>' : ''}
                            </div>
                            <div class="admin-user-meta">
                                📅 Inscrit: ${createdDate}<br>
                                🕒 Vu: ${lastLogin}<br>
                                ${deviceIcon} ${deviceName}
                            </div>
                        </div>
                    </div>
                    <div class="admin-user-stats">
                         <span>📧 ${user.email || 'N/A'}</span>
                    </div>
                    <div class="admin-user-actions">
                        ${user.id !== currentUserId ? `
                            <button class="btn-admin-action" onclick="App.resetUserProgress('${user.id}')" title="Réinitialiser progression">🔄</button>
                            <button class="btn-admin-action danger" onclick="App.deleteUser('${user.id}')" title="Supprimer">🗑️</button>
                        ` : '<span style="color: var(--color-text-secondary); font-size: 12px;">Principal</span>'}
                    </div>
                </div>
            `;
        }).join('');
    },

    /**
     * Supprime un utilisateur
     */
    async deleteUser(userId) {
        if (!confirm(`Voulez-vous vraiment supprimer cet utilisateur ?`)) return;

        const result = await UserManager.deleteUser(userId);
        if (result.success) {
            this.showToast('success', 'Utilisateur supprimé');
            // Le subscribe mettra à jour l'UI automatiquement
        } else {
            this.showToast('error', result.error);
        }
    },

    /**
     * Réinitialise la progression d'un utilisateur
     */
    async resetUserProgress(userId) {
        if (!confirm(`Voulez-vous vraiment réinitialiser la progression de cet utilisateur ?`)) return;

        const result = await UserManager.resetUserProgress(userId);
        if (result.success) {
            this.showToast('success', 'Progression réinitialisée');
        } else {
            this.showToast('error', result.error);
        }
    },

    /**
     * Affiche la grille des formations
     */
    renderFormationsGrid() {
        const grid = document.getElementById('formationsGrid');
        grid.innerHTML = '';

        for (const [key, formation] of Object.entries(FORMATIONS)) {
            const progress = ProgressManager.getProgressPercentage(key);
            const card = document.createElement('div');
            card.className = 'formation-card';
            card.style.setProperty('--card-color', formation.color);
            card.innerHTML = `
                <div class="card-image" style="background-image: url('${formation.image}')">
                    <div class="card-icon">${formation.icon}</div>
                </div>
                <div class="card-content">
                    <h3 class="card-title">${formation.name}</h3>
                    <p class="card-description">${formation.description}</p>
                    <div class="card-meta">
                        <span>📚 7 modules</span>
                        <span>⏱️ ~4 heures</span>
                    </div>
                    <div class="card-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progress}%"></div>
                        </div>
                        <div class="progress-text">${progress}% complété</div>
                    </div>
                </div>
            `;
            card.onclick = () => this.openFormation(key);
            grid.appendChild(card);
        }
    },

    /**
     * Ouvre une formation et affiche ses modules
     */
    openFormation(formationKey) {
        const formation = FORMATIONS[formationKey];
        this.currentFormation = formationKey;

        // Détermine la liste des modules (spécifique ou générique)
        const modules = formation.data?.modules || MODULE_NAMES.map(name => ({ title: name }));

        document.getElementById('modalTitle').innerHTML = `
            <span style="margin-right: 8px">${formation.icon}</span>
            ${formation.name}
        `;

        const body = document.getElementById('modalBody');
        body.innerHTML = `
            <div class="module-list">
                ${modules.map((module, index) => {
            const name = module.title || module; // Handle object or string
            const completed = ProgressManager.isModuleCompleted(formationKey, index);
            return `
                        <div class="module-item ${completed ? 'completed' : ''}" data-index="${index}">
                            <div class="module-number">${completed ? '' : index + 1}</div>
                            <div class="module-info">
                                <div class="module-name">${name}</div>
                                <div class="module-duration">~30 min</div>
                            </div>
                            <span class="module-arrow">→</span>
                        </div>
                    `;
        }).join('')}
            </div>
        `;

        // Gestionnaires pour chaque module
        body.querySelectorAll('.module-item').forEach(item => {
            item.onclick = () => this.openModule(formationKey, parseInt(item.dataset.index));
        });

        document.getElementById('modalFooter').innerHTML = `
            <button class="btn btn-secondary" onclick="App.closeModuleModal()">Fermer</button>
        `;

        document.getElementById('moduleModal').classList.add('active');
    },

    /**
     * Ouvre un module spécifique
     */
    openModule(formationKey, moduleIndex) {
        const formation = FORMATIONS[formationKey];
        // Récupère le contenu du module
        const moduleData = formation.data?.modules?.[moduleIndex];
        const moduleName = moduleData?.title || MODULE_NAMES[moduleIndex];

        this.currentModule = moduleIndex;

        document.getElementById('modalTitle').innerHTML = `
            <span style="margin-right: 8px">${formation.icon}</span>
            ${moduleName}
        `;

        const body = document.getElementById('modalBody');

        if (moduleData) {
            body.innerHTML = `
                <div class="lesson-content">
                    ${moduleData.content}
                </div>
            `;
        } else {
            body.innerHTML = `
                <div class="lesson-content">
                    <h4>Introduction</h4>
                    <p>Ce module vous permettra de comprendre les fondamentaux de ${moduleName.toLowerCase()} 
                    pour l'élevage ${formation.name.toLowerCase()}.</p>
                    
                    <div class="lesson-tip">
                        <div class="lesson-tip-title">💡 À retenir</div>
                        <p>Le contenu détaillé de ce module sera disponible prochainement.</p>
                    </div>
                </div>
            `;
        }

        const completed = ProgressManager.isModuleCompleted(formationKey, moduleIndex);
        const quizScore = ProgressManager.getQuizScore(formationKey, moduleIndex);

        let footerContent = `
            <button class="btn btn-secondary" onclick="App.openFormation('${formationKey}')">
                ← Retour aux modules
            </button>
        `;

        if (!completed) {
            footerContent += `
                <button class="btn btn-primary" onclick="App.startModuleQuiz('${formationKey}', ${moduleIndex})">
                    Passer le quiz →
                </button>
            `;
        } else {
            footerContent += `
                <span style="color: var(--color-success); display: flex; align-items: center; gap: 8px;">
                    ✓ Module complété ${quizScore ? `(${quizScore.score}/${quizScore.total})` : ''}
                </span>
            `;
        }

        document.getElementById('modalFooter').innerHTML = footerContent;
    },

    /**
     * Démarre le quiz d'un module
     */
    startModuleQuiz(formationKey, moduleIndex) {
        const formation = FORMATIONS[formationKey];
        const questions = formation.data?.modules?.[moduleIndex]?.quiz || this.getDefaultQuestions(moduleIndex);

        QuizManager.startQuiz(formationKey, moduleIndex, questions, () => {
            // Callback quand le quiz est réussi
            ProgressManager.completeModule(formationKey, moduleIndex);
            this.showToast('success', 'Module validé ! 🎉');
            this.renderFormationsGrid();
            this.renderProgressOverview();
            this.renderCertificates();
            this.openFormation(formationKey);
        });
    },

    /**
     * Questions par défaut si pas de données
     */
    getDefaultQuestions(moduleIndex) {
        return [
            {
                question: `Question 1 sur ${MODULE_NAMES[moduleIndex]}`,
                options: ['Réponse A', 'Réponse B', 'Réponse C', 'Réponse D'],
                correct: 0
            },
            {
                question: `Question 2 sur ${MODULE_NAMES[moduleIndex]}`,
                options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
                correct: 1
            },
            {
                question: `Question 3 sur ${MODULE_NAMES[moduleIndex]}`,
                options: ['Choix A', 'Choix B', 'Choix C', 'Choix D'],
                correct: 2
            }
        ];
    },

    /**
     * Ferme le modal de module
     */
    closeModuleModal() {
        document.getElementById('moduleModal').classList.remove('active');
        this.currentFormation = null;
        this.currentModule = null;
    },

    /**
     * Affiche la vue d'ensemble de la progression
     */
    renderProgressOverview() {
        const container = document.getElementById('progressOverview');
        container.innerHTML = '';

        for (const [key, formation] of Object.entries(FORMATIONS)) {
            const progress = ProgressManager.getProgress();
            if (!progress) continue;

            const completed = progress[key]?.completed.length || 0;
            const percentage = ProgressManager.getProgressPercentage(key);

            const quizScores = Object.values(progress[key]?.quizScores || {});
            const avgScore = quizScores.length > 0
                ? Math.round(quizScores.reduce((sum, q) => sum + (q.score / q.total * 100), 0) / quizScores.length)
                : 0;

            const card = document.createElement('div');
            card.className = 'progress-card';
            card.innerHTML = `
                <div class="progress-card-header">
                    <span class="progress-card-icon">${formation.icon}</span>
                    <span class="progress-card-title">${formation.name}</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${percentage}%"></div>
                </div>
                <div class="progress-card-stats">
                    <div class="progress-stat">
                        <div class="progress-stat-value">${completed}/7</div>
                        <div class="progress-stat-label">Modules</div>
                    </div>
                    <div class="progress-stat">
                        <div class="progress-stat-value">${percentage}%</div>
                        <div class="progress-stat-label">Progression</div>
                    </div>
                    <div class="progress-stat">
                        <div class="progress-stat-value">${avgScore}%</div>
                        <div class="progress-stat-label">Score moyen</div>
                    </div>
                </div>
            `;
            container.appendChild(card);
        }
    },

    /**
     * Affiche les certificats disponibles
     */
    renderCertificates() {
        const container = document.getElementById('certificatesGrid');
        container.innerHTML = '';

        for (const [key, formation] of Object.entries(FORMATIONS)) {
            const isComplete = ProgressManager.isFormationComplete(key);

            const card = document.createElement('div');
            card.className = `certificate-card ${isComplete ? '' : 'locked'}`;
            card.innerHTML = `
                <div class="certificate-icon">${isComplete ? '🏆' : '🔒'}</div>
                <div class="certificate-info">
                    <div class="certificate-title">Certificat ${formation.name}</div>
                    <div class="certificate-status ${isComplete ? 'completed' : ''}">
                        ${isComplete ? 'Disponible - Cliquez pour télécharger' : 'Terminez tous les modules pour débloquer'}
                    </div>
                </div>
            `;

            if (isComplete) {
                card.style.cursor = 'pointer';
                card.onclick = () => {
                    const userName = UserManager.getCurrentUsername() || 'Apprenant';
                    CertificateManager.generateCertificate(key, formation.name, userName);
                    this.showToast('success', 'Certificat téléchargé ! 📜');
                };
            }

            container.appendChild(card);
        }
    },

    /**
     * Affiche une notification toast
     */
    showToast(type, message) {
        const container = document.getElementById('toastContainer');
        const icons = {
            success: '✅',
            error: '❌',
            warning: '⚠️',
            info: 'ℹ️'
        };

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <span class="toast-icon">${icons[type]}</span>
            <span class="toast-message">${message}</span>
            <button class="toast-close" onclick="this.parentElement.remove()">×</button>
        `;
        container.appendChild(toast);

        // Auto-suppression après 4 secondes
        setTimeout(() => {
            if (toast.parentElement) {
                toast.style.animation = 'fadeOut 0.3s ease forwards';
                setTimeout(() => toast.remove(), 300);
            }
        }, 4000);
    }
};

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
