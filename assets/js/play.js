//Modal - how to play

const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close =  document.getElementById("close");

open.addEventListener("click", () => {
    modal_container.classList.add("show");
});

close.addEventListener("click", () => {
    modal_container.classList.remove("show");
});

// Main JS - Declare const variables for DOM elements 
const question = document.querySelector("#question")
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector("#progressText")
const scoreText = document.querySelector("#score")
const progressBarFull = document.querySelector("#progressBarFull")

// Declare variables for game
let currentQuestion ={}
let acceptingAnswers = true
let scor = 0
let questionCounter = 0
let availableQuestions = []

// questions in game
let questions = [
    {
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
        question: "assets/images/logo17.PNG",
        choice1: "VISA",
        choice2: "Revolut",
        choice3: "MasterCard",
        choice4: "American Express",
        answer: 3,
    }
]

const score_points = 1
const max_questions = 4

//Start Game

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions] //spread operator gets all the questions available
    getNewQuestions()
}

//Get a new question
