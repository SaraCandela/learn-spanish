// create const
const gameData = [
    {
        question: "assets/images/cat.jpg",
        a: "Gato",
        b: "Perro",
        c: "Buho",
        d: "Cerdo",
        answer: "a"

    },
    {
        question: "assets/images/cow.jpg",
        a: "Pato",
        b: "Vaca",
        c: "Caballo",
        d: "Oveja",
        answer: "b"

    },
    {
        question: "assets/images/dog.jpg",
        a: "Gato",
        b: "Perro",
        c: "Mono",
        d: "Rana",
        answer: "b"

    },
    {
        question: "assets/images/donkey.jpg",
        a: "Gato",
        b: "Ardilla",
        c: "Burro",
        d: "Rana",
        answer: "c"
    },
    {
        question: "assets/images/duck.jpg",
        a: "Gato",
        b: "Burro",
        c: "Mono",
        d: "Pato",
        answer: "d"
    },
    {
        question: "assets/images/eagle.jpg",
        a: "Aguila",
        b: "Erizo",
        c: "Mono",
        d: "Rana",
        answer: "a"
    },

    {
        question: "assets/images/fox.jpg",
        a: "Aguila",
        b: "Erizo",
        c: "Zorro",
        d: "Ardilla",
        answer: "c"
    },
    {
        "question": "assets/images/frog.jpg",
        a: "Aguila",
        b: "Erizo",
        c: "Buho",
        d: "Rana",
        answer: "d"
    },
    {
        question: "assets/images/hedgehog.jpg",
        a: "Aguila",
        b: "Erizo",
        c: "Mono",
        d: "Caballo",
        answer: "b"
    },
    {
        question: "assets/images/horse.jpg", 
        a: "Gato",
        b: "Caballo",
        c: "Mono",
        d: "Perro",
        answer: "b"
    },
    {
        question: "assets/images/monkey.jpg", 
        a: "Cerdo",
        b: "Oveja",
        c: "Mono",
        d: "Vaca",
        answer: "c"
    },
    {
        question: "assets/images/owl.jpg",
        a: "Oveja",
        b: "Buho",
        c: "Mono",
        d: "Pato",
        answer: "b"
    },
    {
        question: "assets/images/pig.jpg",
        a: "Cerdo",
        b: "Caballo",
        c: "Gato",
        d: "Vaca",
        answer: "a"
    },
    {
        question: "assets/images/sheep.jpg",
        a: "Burro",
        b: "Oveja",
        c: "Ardilla",
        d: "Vaca",
        answer: "b"
    },
    {
        question: "assets/images/squirrel.jpg",
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

