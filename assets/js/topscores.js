const topScoresList = document.querySelector("#topScoresList")
const topScores = JSON.parse(localStorage.getItem("topScores")) || []

topScoresList.innerHTML =
topScores.MAP(score => {
    return `<li class="top-score">${score.name} - ${score.score}</li>`
}).join("")