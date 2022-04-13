const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const topScores = JSON.parse(localStorage.getItem("topScores")) || []

const max_high_scores = 5

finalScore.innerText = mostRecentScore

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    topScores.push(score)

    topScores.sort((a, b) => {
        return b.score - a.score
    })

    topScores.splice(5)
    localStorage.setItem("topScores", JSON.stringify(topScores))
    window.location.assign("/logo-quiz/topscores.html")
}