const username = document.getElementById('username');
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalaScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;
//console.log(highScores);

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
saveScoreBtn.disabled = !username.value;
    });

    saveHighScore = e => {
        console.log("clicked the save button!");
        e.preventDefault();
        
        const score = {
            score: Math.floor(Math.random() * 100),
            name: username.value
        };
        highScores.push(score);
        highScores.sort((a,b) => b.score - a.score);
        highScores.splice(5); // maximum at 5 if the one username added the splice will cut them off 
    
        localStorage.setItem("highScores", JSON.stringify(highScores));
         window.location.assign("/");
        console.log(highScores);
    };
