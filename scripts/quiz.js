/**
 * ÉLEVAGE PRO - Quiz System
 * Système de quiz interactif avec scoring
 */

const QuizManager = {
    currentQuiz: null,
    currentQuestionIndex: 0,
    selectedAnswer: null,
    answers: [],
    onComplete: null,

    /**
     * Démarre un quiz
     */
    startQuiz(animalType, moduleIndex, questions, onComplete) {
        this.currentQuiz = {
            animalType,
            moduleIndex,
            questions: this.shuffleArray([...questions]).slice(0, 5) // 5 questions max
        };
        this.currentQuestionIndex = 0;
        this.selectedAnswer = null;
        this.answers = [];
        this.onComplete = onComplete;

        this.showQuizModal();
        this.renderQuestion();
    },

    /**
     * Mélange un tableau (Fisher-Yates)
     */
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    },

    /**
     * Affiche le modal du quiz
     */
    showQuizModal() {
        const modal = document.getElementById('quizModal');
        modal.classList.add('active');

        document.getElementById('quizClose').onclick = () => this.closeQuiz();
        document.querySelector('#quizModal .modal-overlay').onclick = () => this.closeQuiz();
    },

    /**
     * Ferme le quiz
     */
    closeQuiz() {
        const modal = document.getElementById('quizModal');
        modal.classList.remove('active');
        this.currentQuiz = null;
    },

    /**
     * Affiche la question actuelle
     */
    renderQuestion() {
        const quiz = this.currentQuiz;
        const question = quiz.questions[this.currentQuestionIndex];
        const total = quiz.questions.length;
        const current = this.currentQuestionIndex + 1;
        const progressPercent = (current / total) * 100;

        document.getElementById('quizTitle').textContent = `Quiz - Question ${current}/${total}`;

        const body = document.getElementById('quizBody');
        body.innerHTML = `
            <div class="quiz-progress">
                <div class="quiz-progress-bar">
                    <div class="quiz-progress-fill" style="width: ${progressPercent}%"></div>
                </div>
                <span class="quiz-progress-text">${current}/${total}</span>
            </div>
            <p class="quiz-question">${question.question}</p>
            <div class="quiz-options">
                ${question.options.map((option, index) => `
                    <div class="quiz-option" data-index="${index}">
                        <span class="quiz-option-letter">${String.fromCharCode(65 + index)}</span>
                        <span class="quiz-option-text">${option}</span>
                    </div>
                `).join('')}
            </div>
        `;

        // Gestionnaires d'événements pour les options
        const options = body.querySelectorAll('.quiz-option');
        options.forEach(option => {
            option.onclick = () => this.selectOption(parseInt(option.dataset.index));
        });

        this.updateFooter();
    },

    /**
     * Sélectionne une réponse
     */
    selectOption(index) {
        this.selectedAnswer = index;

        // Met à jour les styles
        const options = document.querySelectorAll('.quiz-option');
        options.forEach((opt, i) => {
            opt.classList.toggle('selected', i === index);
        });

        this.updateFooter();
    },

    /**
     * Met à jour le footer du quiz
     */
    updateFooter() {
        const footer = document.getElementById('quizFooter');
        const isLastQuestion = this.currentQuestionIndex === this.currentQuiz.questions.length - 1;

        footer.innerHTML = `
            <button class="btn btn-secondary" onclick="QuizManager.closeQuiz()">Annuler</button>
            <button class="btn btn-primary" onclick="QuizManager.validateAnswer()" ${this.selectedAnswer === null ? 'disabled' : ''}>
                ${isLastQuestion ? 'Terminer' : 'Suivant'} →
            </button>
        `;
    },

    /**
     * Valide la réponse et passe à la suite
     */
    validateAnswer() {
        if (this.selectedAnswer === null) return;

        const question = this.currentQuiz.questions[this.currentQuestionIndex];
        const isCorrect = this.selectedAnswer === question.correct;

        this.answers.push({
            questionIndex: this.currentQuestionIndex,
            selected: this.selectedAnswer,
            correct: question.correct,
            isCorrect
        });

        // Affiche le feedback
        const options = document.querySelectorAll('.quiz-option');
        options.forEach((opt, i) => {
            if (i === question.correct) {
                opt.classList.add('correct');
            } else if (i === this.selectedAnswer && !isCorrect) {
                opt.classList.add('incorrect');
            }
            opt.style.pointerEvents = 'none';
        });

        // Passe à la question suivante après un délai
        setTimeout(() => {
            if (this.currentQuestionIndex < this.currentQuiz.questions.length - 1) {
                this.currentQuestionIndex++;
                this.selectedAnswer = null;
                this.renderQuestion();
            } else {
                this.showResults();
            }
        }, 1000);
    },

    /**
     * Affiche les résultats du quiz
     */
    showResults() {
        const correctAnswers = this.answers.filter(a => a.isCorrect).length;
        const total = this.currentQuiz.questions.length;
        const percentage = Math.round((correctAnswers / total) * 100);
        const passed = percentage >= 70;

        let icon, title, message;
        if (percentage === 100) {
            icon = '🏆';
            title = 'Parfait !';
            message = 'Félicitations ! Vous avez répondu correctement à toutes les questions.';
        } else if (passed) {
            icon = '🎉';
            title = 'Bravo !';
            message = 'Vous avez réussi le quiz. Continuez votre apprentissage !';
        } else {
            icon = '📚';
            title = 'Continuez à apprendre';
            message = 'Relisez le module et réessayez. Vous y arriverez !';
        }

        document.getElementById('quizBody').innerHTML = `
            <div class="quiz-result">
                <div class="quiz-result-icon">${icon}</div>
                <h3 class="quiz-result-title">${title}</h3>
                <div class="quiz-result-score">${percentage}%</div>
                <p class="quiz-result-message">
                    ${correctAnswers} réponse${correctAnswers > 1 ? 's' : ''} correcte${correctAnswers > 1 ? 's' : ''} sur ${total}
                </p>
                <p class="quiz-result-message">${message}</p>
            </div>
        `;

        document.getElementById('quizFooter').innerHTML = `
            <button class="btn btn-primary" onclick="QuizManager.finishQuiz(${passed})">
                Terminer
            </button>
        `;

        // Sauvegarde le score
        ProgressManager.saveQuizScore(
            this.currentQuiz.animalType,
            this.currentQuiz.moduleIndex,
            correctAnswers,
            total
        );
    },

    /**
     * Termine le quiz
     */
    finishQuiz(passed) {
        if (passed && this.onComplete) {
            this.onComplete();
        }
        this.closeQuiz();
    }
};
