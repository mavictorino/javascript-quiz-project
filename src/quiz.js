class Quiz {
    // YOUR CODE HERE:
    
    constructor (questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    };
    getQuestion() {
        return this.questions[this.currentQuestionIndex];
    };
    moveToNextQuestion() {
        return this.currentQuestionIndex ++;
    };
    shuffleQuestions() {
        for (let i = this.questions.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            this.questions[i] = this.questions[j];
        };
        
    };
    checkAnswer(answer) {
        this.answer = answer;
        return this.correctAnswers ++;
    };

    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
            return false;
        }
        else {
            return true;
        }
    };
    filterQuestionsByDifficulty(difficulty) {
        if(difficulty >= 1 && difficulty <= 3)
        return this.questions = this.questions.filter(function (element) {
            if (element.difficulty === difficulty) {
                return true;
            }else {
                return false;
            }
        });  
                
    };
    averageDifficulty() {
        const totalDifficulty = this.questions.reduce(function(acc, currentValue) {
            return acc + currentValue.difficulty;
        }, 0);
        return totalDifficulty / this.questions.length;
    };

}; 
