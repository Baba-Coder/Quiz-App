const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionText= document.getElementById("questionText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions= [];

let questions = [];

const IF_CORRECT = 10;
const MAX_QUESTIONS = 3;
// just to commit 
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length == 0 ||questionCounter >= MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore' , score);
        return window.location.assign("/end.html");
    }
     questionCounter++;
     progressText.innerText = `Question(${questionCounter} / ${MAX_QUESTIONS})`;

     //Update the progress bar
    
     progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

     const questionIndex = Math.floor(Math.random() * availableQuestions.length);
     currentQuestion = availableQuestions[questionIndex];
     question.innerText = currentQuestion.question;

     choices.forEach( choice => {
         const number = choice.dataset["number"];
         choice.innerText = currentQuestion["choice" + number];
     });

     availableQuestions.splice(questionIndex, 1);
     console.log(availableQuestions); 
     acceptingAnswers  = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
       if(!acceptingAnswers) return;

       acceptingAnswers = false;
       const selectedChoice = e.target;
       const selectedAnswer = selectedChoice.dataset["number"];

    
       const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct": "incorrect";
          // calling the function score here 
          // if the answer is correct the score will increase by 10
            if (classToApply === "correct") {
                incrementScore(IF_CORRECT);
            }
        selectedChoice.parentElement.classList.add(classToApply);
       
         setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
         }, 1000);
    });
    });

    incrementScore = num => {
        score += num;
        scoreText.innerText = score;
    }
startGame();


  