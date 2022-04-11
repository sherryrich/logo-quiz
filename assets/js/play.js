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
let currentQuestion ={};
let acceptingAnswers = true;
let scor = 0;
let questionCounter = 0;
let availableQuestions = [];