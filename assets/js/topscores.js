// Credit to Brian Design for inspiration for this logic https://www.youtube.com/watch?v=f4fB9Xg2JEY, see also README 
const topScoresList = document.querySelector("#topScoresList");
const topScores = JSON.parse(localStorage.getItem("topScores")) || [];

topScoresList.innerHTML =
    topScores.map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    }).join("");