// Credit to Brian Design for inspiration for this logic https://www.youtube.com/watch?v=f4fB9Xg2JEY, see also README 
const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const topScores = JSON.parse(localStorage.getItem("topScores")) || [];

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

let saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    topScores.push(score);

    topScores.sort((a, b) => {
        return b.score - a.score;
    });

    topScores.splice(5);
    localStorage.setItem("topScores", JSON.stringify(topScores));
    window.location.assign("topscores.html");
};