// create const
let question = document.createElement('div')
const gameData = [
    {
        question: `<img class="question" id="image" src="assets/images/cat.jpg">
        <p class="question" id="animal"><b>Cat</b></p>`,
        a: "Gato",
        b: "Perro",
        c: "Buho",
        d: "Cerdo",
        answer: "a"

    },
    {
        question: `<img class="question" id="image" src="assets/images/cow.jpg">
        <p class="question" id="animal"><b>Cow</b></p>`,
        a: "Pato",
        b: "Vaca",
        c: "Caballo",
        d: "Oveja",
        answer: "b"

    },
    {
        question: `<img class="question" id="image" src="assets/images/dog.jpg">
        <p class="question" id="animal"><b>Dog</b></p>`,
        a: "Gato",
        b: "Perro",
        c: "Mono",
        d: "Rana",
        answer: "b"

    },
    {
        question: `<img class="question" id="image" src="assets/images/donkey.jpg">
        <p class="question" id="animal"><b>Donkey</b></p>`,
        a: "Gato",
        b: "Ardilla",
        c: "Burro",
        d: "Rana",
        answer: "c"
    },
    {
        question: `<img class="question" id="image" src="assets/images/duck.jpg">
        <p class="question" id="animal"><b>Duck</b></p>`,
        a: "Gato",
        b: "Burro",
        c: "Mono",
        d: "Pato",
        answer: "d"
    },
    {
        question: `<img class="question" id="image" src="assets/images/eagle.jpg">
        <p class="question" id="animal"><b>Eagle</b></p>`,
        a: "Aguila",
        b: "Erizo",
        c: "Mono",
        d: "Rana",
        answer: "a"
    },

    {
        question: `<img class="question" id="image" src="assets/images/fox.jpg">
        <p class="question" id="animal"><b>Fox</b></p>`,
        a: "Aguila",
        b: "Erizo",
        c: "Zorro",
        d: "Ardilla",
        answer: "c"
    },
    {
        "question": `<img class="question" id="image" src="assets/images/frog.jpg">
        <p class="question" id="animal"><b>Frog</b></p>`,
        a: "Aguila",
        b: "Erizo",
        c: "Buho",
        d: "Rana",
        answer: "d"
    },
    {
        question: `<img class="question" id="image" src="assets/images/hedgehog.jpg">
        <p class="question" id="animal"><b>Hedgehog</b></p>`,
        a: "Aguila",
        b: "Erizo",
        c: "Mono",
        d: "Caballo",
        answer: "b"
    },
    {
        question: `<img class="question" id="image" src="assets/images/horse.jpg">
        <p class="question" id="animal"><b>Horse</b></p>`, 
        a: "Gato",
        b: "Caballo",
        c: "Mono",
        d: "Perro",
        answer: "b"
    },
    {
        question: `<img class="question" id="image" src="assets/images/monkey.jpg">
        <p class="question" id="animal"><b>Monkey</b></p>`, 
        a: "Cerdo",
        b: "Oveja",
        c: "Mono",
        d: "Vaca",
        answer: "c"
    },
    {
        question: `<img class="question" id="image" src="assets/images/owl.jpg">
        <p class="question" id="animal"><b>Owl</b></p>`,
        a: "Oveja",
        b: "Buho",
        c: "Mono",
        d: "Pato",
        answer: "b"
    },
    {
        question: `<img class="question" id="image" src="assets/images/pig.jpg">
        <p class="question" id="animal"><b>Pig</b></p>`,
        a: "Cerdo",
        b: "Caballo",
        c: "Gato",
        d: "Vaca",
        answer: "a"
    },
    {
        question: `<img class="question" id="image" src="assets/images/sheep.jpg">
        <p class="question" id="animal"><b>Sheep</b></p>`,
        a: "Burro",
        b: "Oveja",
        c: "Ardilla",
        d: "Vaca",
        answer: "b"
    },
    {
        question: `<img class="question" id="image" src="assets/images/squirrel.jpg">
        <p class="question" id="animal"><b>Squirrel</b></p>`,
        a: "Perro",
        b: "Oveja",
        c: "Mono",
        d: "Ardilla",
        answer: "d"
    },    
];
const gameArea = document.getElementById('game-area');
const questionContainer = document.getElementById('question-container');
const answers = document.getElementById('answer-buttons');
const score = document.getElementsByClassName('score-area');
const next = document.getElementById ('next');

let questionCounter = 0
let scores = 0
let currentQuestion;
let availableQuestion = [];

//call the functions. 

setAvailableQuestion();
getNewQuestion();


// push the questions into availableQuestion Array
function setAvailableQuestion(){
    const totalQuestion = gameData.length;
     for(let i=0; i<totalQuestion; i++){
        availableQuestion.push(gameData[i])
     }
}
//set question and get random question
function getNewQuestion() {
    const questionIndex = availableQuestion[Math.floor(Math.random() * availableQuestion.length)];
    currentQuestion = questionIndex;
    questionContainer.innerHTML = currentQuestion.question;
}

function selectAnswer(){

}


function calculateCorrectAnswer(){

}

function incrementScore(){

}

function setNextQuestion(){

}

