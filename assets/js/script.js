const questionNumber = document.getElementById ('number')
const questionContainer = document.getElementById('question-container')
const answerButtons = document.getElementById ('answer-buttons')
const scoreArea = document.getElementById ('score-area')
const nextButton = document.getElementById ('next')

let questionCounter = 0;
let scoreCounter = 0;
let currentQuestion;
let availableQuestions= [];


//push the questions into availableQuestions Array.

function prefillAvailableQuestion(){
    const totalQuestions = gameData.length;
    for (let i=0; i<totalQuestions; i++){       
        availableQuestions.push(gameData[i])
    }
}
function setavailableQuestions(question){
    document.getElementById('btn1').innerHTML=question.options[0]
    document.getElementById('btn2').innerHTML=question.options[1]
    document.getElementById('btn3').innerHTML=question.options[2]
    document.getElementById('btn4').innerHTML=question.options[3]
}

//set question and options
function newQuestion(){
    //set question number
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + gameData.length;
    // set question text
    //get random question
    const index= Math.floor(Math.random() * availableQuestions.length);
    const question = availableQuestions[index];
    questionContainer.innerHTML = question.question;
       setavailableQuestions(question);
       availableQuestions.splice(index, 1);
    questionCounter ++ ;
    
} 

function calculateCorrectAnswer(){}

function incrementScore(){}



function next(){
    if(questionCounter === gameData.length){
        console.log("quiz over");
    } else{
        newQuestion();
    }
}

prefillAvailableQuestion()
newQuestion();


