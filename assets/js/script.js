const questionNumber = document.getElementById ('number');
const questionContainer = document.getElementById('question-container');

let questionRandom = [];
let questionCounter = 0;
let availableQuestions= [];

//Functions.

/**
 *Push the questions into availableQuestions Array.*/
function setQuestions(){
    const totalQuestions = gameData.length;
    for (let i=0; i<totalQuestions; i++){       
        availableQuestions.push(gameData[i]);
    }
}

/**
 * Set buttons in HTML with quiz.js options.*/
function setChoices(questionRandom){
    document.getElementById('btn1').innerHTML=questionRandom.options[0];
    document.getElementById('btn2').innerHTML=questionRandom.options[1];
    document.getElementById('btn3').innerHTML=questionRandom.options[2];
    document.getElementById('btn4').innerHTML=questionRandom.options[3];
}

/**
 * create a randomize questions, options and add counter. */ 
function newQuestion(){
    //set question number
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + gameData.length;
    //get random question/choices
    const index= Math.floor(Math.random() * availableQuestions.length);
    questionRandom = availableQuestions[index];
    questionContainer.innerHTML = questionRandom.question;
    //Avoid questions to repeat. 
    availableQuestions.splice(index, 1);
    //Call setChoices function with questionRandom so the choices are also randomized. 
    setChoices(questionRandom);

    questionCounter ++ ;
    //Call disableAnswer(false), so when a new answer showns the answers can be chosen. 
    disableAnswers(false);
} 

function disableAnswers(isDisabled){
    // Get a list of all elements by classname
   let buttons = document.getElementsByClassName('btn');

   // Loop through the HTML Collection
   [].forEach.call(buttons, function (el) {
    el.disabled = isDisabled;

    if (isDisabled) {
        correctAnswer(el);
    } else {
        // Enable the answers
        el.classList.remove('correct');
        el.classList.remove('incorrect');
    }
   });
  
}

function correctAnswer(el) {
    // shows correct answer
    if(el.innerHTML===questionRandom.answer){
        el.classList.add('correct');
        }else {
        el.classList.add('incorrect');  
        }
}



function next(){
    //If statement, showing new question when next is pressed and when questions are over shows "scores.html"
    if(questionCounter === gameData.length){
        return window.location.assign('end.html');
    } else{
        newQuestion();
    }
}


// Call funtions
//first set all questions in availableQuestions Array.
setQuestions();
next();