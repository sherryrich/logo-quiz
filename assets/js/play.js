// Main JS - Declare const variables for DOM elements
/*jshint sub:true*/
const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

// Declare variables for game
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// questions in game
let questions = [{
        question: "assets/images/logo7.PNG",
        choice1: "BP",
        choice2: "ExxonMobil",
        choice3: "Shell",
        choice4: "Mobil",
        answer: 1,
    },
    {
        question: "assets/images/logo8.PNG",
        choice1: "Ford",
        choice2: "Daimler",
        choice3: "Hyundai",
        choice4: "Volkswagen",
        answer: 4,
    },
    {
        question: "assets/images/logo9.PNG",
        choice1: "Corsodyl",
        choice2: "Crest",
        choice3: "Colgate",
        choice4: "Sensodyne",
        answer: 3,
    },
    {
        question: "assets/images/logo12.PNG",
        choice1: "MTV",
        choice2: "GOLD",
        choice3: "QUEST",
        choice4: "National Geographic",
        answer: 4,
    },
    {
        question: "assets/images/logo13.PNG",
        choice1: "Microsoft",
        choice2: "Opera",
        choice3: "Firefox",
        choice4: "Android",
        answer: 3,
    },
    {
        question: "assets/images/logo15.PNG",
        choice1: "Alibaba",
        choice2: "ebay",
        choice3: "Shopify",
        choice4: "Amazon",
        answer: 4,
    },
    {
        question: "assets/images/logo21.PNG",
        choice1: "Rolls-Royce",
        choice2: "Bugatti",
        choice3: "Aston Martin",
        choice4: "Bentley",
        answer: 4,
    },
    {
        question: "assets/images/logo17.PNG",
        choice1: "VISA",
        choice2: "Mastercard",
        choice3: "Revolut",
        choice4: "American Express",
        answer: 2,
    },
    {
        question: "assets/images/logo19.PNG",
        choice1: "UPS",
        choice2: "DPD",
        choice3: "Fastway",
        choice4: "FedEx",
        answer: 4,
    },
    {
        question: "assets/images/logo22.PNG",
        choice1: "Fox",
        choice2: "NBC",
        choice3: "CBS",
        choice4: "CNN",
        answer: 2,
    }
];

const score_points = 1;
const max_questions = 10;

//Start Game

let startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]; //spread operator gets all the questions available
    getNewQuestion();
};

//Get a new question

let getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > max_questions) {
        localStorage.setItem(`mostRecentScore`, score);

        //Brings the user to the game end page after the quiz is finished
        return window.location.assign('end.html');
    }
    //Shows the user the number of question is answering
    questionCounter++;
    // incrementing by 1 each time, 1/4, 2/4, 3,/4 etc
    progressText.innerText = `Question ${questionCounter} of ${max_questions}`;

    //Update the progress any time the user answer a question
    progressBarFull.style.width = `${(questionCounter / max_questions) * 100}%`; // calculate what question user is on and makes a percentage

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex]; // keeps track of what question user is currently on
    question.src = currentQuestion.question;

    // Update the answers to show the user after last question is answered
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    availableQuestions.splice(questionsIndex, 1);
    acceptingAnswers = true;
};

// compare the answer chosen by the user with the right answer, if true the user will see a message in WebGL2RenderingContext, if wrong the message will be in red

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        if (classToApply === 'correct') {
            incrementScore(score_points);
        }
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

let incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};
startGame();