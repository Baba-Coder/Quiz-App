const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
 .map( score => { // map ->  converting a array of items into something else 
return`<li class="high-score">${score.name} - ${score.score}</li>`;

//

})
.join("");