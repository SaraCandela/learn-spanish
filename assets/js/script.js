const questionNumber = document.getElementById ('number')
const questionContainer = document.getElementById('question-container')
const scoreArea = document.getElementById ('score-area')
const nextButton = document.getElementById ('next')

let questionCounter = 0;
let scoreCounter = 0;
let currentQuestion;
let availableQuestions= [];

//Functions.

//set availableQuestions into an Array
function setQuestions(){
    const totalQuestions = gameData.length;
    for (let i=0; i<totalQuestions; i++){       
        availableQuestions.push(gameData[i])
    }
}

//Set Answers in HTML with quiz.js options.
function setChoices(questionRandom){
    document.getElementById('btn1').innerHTML=questionRandom.options[0]
    document.getElementById('btn2').innerHTML=questionRandom.options[1]
    document.getElementById('btn3').innerHTML=questionRandom.options[2]
    document.getElementById('btn4').innerHTML=questionRandom.options[3]
}

// create a randomize questions and options and add counter.
function newQuestion(){
    //set question number
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + gameData.length;
    //get random question/choices
    const index= Math.floor(Math.random() * availableQuestions.length);
    const questionRandom = availableQuestions[index];
    questionContainer.innerHTML = questionRandom.question;
    availableQuestions.splice(index, 1);
    setChoices(questionRandom)

    
    questionCounter ++ ;
    disableAnswers(false);
} 

function disableAnswers(isDisabled){
    // Get a list of all elements by classname
   let buttons = document.getElementsByClassName('btn');

   // Loop through the HTML Collection
   [].forEach.call(buttons, function (el) {
    el.disabled = isDisabled;

    if (isDisabled) {
      // Disable all answers
      el.classList.add('disabled');
    } else {
        // Enable the answers
        el.classList.remove('disabled');
    }
        // alert(el.innerHTML);
        // el.classList.add('incorrect');
   });

}
function incrementScore(){
    if(el.innerHTML===answer){
    el.classList.add('correct');
    score ++
    }else {
    el.classList.add('incorrect');
    }
    }



function next(){
    if(questionCounter === gameData.length){
        return window.location.assign('/scores.html');
    } else{
        newQuestion();
    }
}

// call funtions
setQuestions();
newQuestion();
// calculateCorrectAnswer()
