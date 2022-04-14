const topScoresList = document.querySelector("#topScoresList");
const topScores = JSON.parse(localStorage.getItem("topScores")) || [];

topScoresList.innerHTML =
    topScores.map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    }).join("");