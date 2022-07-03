const questionNumber = document.getElementById ('number')
const questionContainer = document.getElementById('question-container')
const answerButtons = document.getElementById ('answer-buttons')
const scoreArea = document.getElementById ('score-area')
const nextButton = document.getElementById ('next')

let questionCounter = 0
let scoreCounter = 0;
let currentQuestion;
let availableQuestions= [];


//push the questions into availableQuestions Array.
function setavailableQuestions(){
    const totalQuestions = gameData.length;
    for (let i=0; i<totalQuestions; i++){
        availableQuestions.push(gameData[i])
    }
}

//set question and options
function newQuestion(){
    //set question number
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + gameData.length;
    // set question text
    //get random question
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionContainer.innerHTML = currentQuestion.question;
    console.log(questionIndex)
    
    questionCounter ++ 
} 

function next(){
    if(questionCounter === gameData.length){
        console.log("quiz over");
    } else{
        newQuestion();
    }
}
window.onload = function() {
    //first we will set all questions in availableQuestions Array
    setavailableQuestions();
    //second we will call newQuestion(); function
    newQuestion();
}

