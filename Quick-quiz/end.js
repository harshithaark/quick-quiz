const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;


const MAX_HIGH_SCORE = 5;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup',()=>{
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;
});
saveHighScore = e => {
    console.log("clicked the save buttom!");
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score)
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign("../index.html");

    console.log(highScores);
}
