// Create const
// Game questions and answers
const gameData = [
    {
        question: `<img class="question" id="image" src="assets/images/cat.jpg">
        <p class="question"><b>Cat</b></p>`,
        answer:
            `<button class="btn">Gato</button> 
            <button class="btn">Perro</button> 
            <button class="btn">Búho</button> 
            <button class="btn">Cerdo</button>`,
        corretAnswer: "a"

    },
    {
        question: `<img class="question" id="image" src="assets/images/cow.jpg">
        <p class="question"><b>Cow</b></p>`,
        answer: `<button class="btn">Pato</button> 
            <button class="btn">Vaca</button> 
            <button class="btn">Caballo</button> 
            <button class="btn">Oveja</button>`,
        correctAnswer: "b"

    },
    {
        question: `<img class="question" id="image" src="assets/images/dog.jpg">
        <p class="question"><b>Dog</b></p>`,
        answer:`<button class="btn">Gato</button> 
        <button class="btn">Perro</button> 
        <button class="btn">Mono</button> 
        <button class="btn">Rana</button>`,
        correctAnswer: "b"

    },
    {
        question: `<img class="question" id="image" src="assets/images/donkey.jpg">
        <p class="question"><b>Donkey</b></p>`,
        answer:`<button class="btn">Gato</button> 
        <button class="btn">Ardilla</button> 
        <button class="btn">Burro</button> 
        <button class="btn">Rana</button>`,
        correctAnswer: "c"
    },
    {
        question: `<img class="question" id="image" src="assets/images/duck.jpg">
        <p class="question"><b>Duck</b></p>`,
        answer:`<button class="btn">Gato</button> 
        <button class="btn">Burro</button> 
        <button class="btn">Mono</button> 
        <button class="btn">Pato</button>`,
        correctAnswer: "d"
    },
    {
        question: `<img class="question" id="image" src="assets/images/eagle.jpg">
        <p class="question"><b>Eagle</b></p>`,
        answer:`<button class="btn">Aguila</button> 
        <button class="btn">Erizo</button></button> 
        <button class="btn">Mono</button> 
        <button class="btn">Ardilla</button>`,
        correctAnswer: "a"
    },

    {
        question: `<img class="question" id="image" src="assets/images/fox.jpg">
        <p class="question"><b>Fox</b></p>`,
        answer:`<button class="btn">Buho</button> 
        <button class="btn">Erizo</button> 
        <button class="btn">Zorro</button> 
        <button class="btn">Perro</button>`,
        correctAnswer: "c"
    },
    {
        "question": `<img class="question" id="image" src="assets/images/frog.jpg">
        <p class="question"><b>Frog</b></p>`,
        answer:`<button class="btn">Buho</button> 
        <button class="btn">Erizo</button> 
        <button class="btn">Aguila</button> 
        <button class="btn">Rana</button>`,
        correctAnswer: "d"
    },
    {
        question: `<img class="question" id="image" src="assets/images/hedgehog.jpg">
        <p class="question"><b>Hedgehog</b></p>`,
        answer:`<button class="btn">Gato</button> 
        <button class="btn">Erizo</button> 
        <button class="btn">Mono</button> 
        <button class="btn">Caballo</button>`,
        correctAnswer: "b"
    },
    {
        question: `<img class="question" id="image" src="assets/images/horse.jpg">
        <p class="question"><b>Horse</b></p>`, 
        answer:`<button class="btn">Gato</button> 
        <button class="btn">Caballo</button> 
        <button class="btn">Rana</button> 
        <button class="btn">Perro</button>`,
        correctAnswer: "b"
    },
    {
        question: `<img class="question" id="image" src="assets/images/monkey.jpg">
        <p class="question"><b>Monkey</b></p>`, 
        answer:`<button class="btn">Cerdo</button> 
        <button class="btn">Oveja</button> 
        <button class="btn">Mono</button> 
        <button class="btn">Vaca</button>`,
        correctAnswer: "c"
    },
    {
        question: `<img class="question" id="image" src="assets/images/owl.jpg">
        <p class="question"><b>Owl</b></p>`,
        answer:`<button class="btn">Caballo</button> 
        <button class="btn">Buho</button> 
        <button class="btn">Pato</button> 
        <button class="btn">Rana</button>`,
        correctAnswer: "b"
    },
    {
        question: `<img class="question" id="image" src="assets/images/pig.jpg">
        <p class="question"><b>Pig</b></p>`,
        answer:`<button class="btn">Cerdo</button> 
        <button class="btn">Caballo</button> 
        <button class="btn">Gato</button> 
        <button class="btn">Vaca</button>`,
        correctAnswer: "a"
    },
    {
        question: `<img class="question" id="image" src="assets/images/sheep.jpg">
        <p class="question"><b>Sheep</b></p>`,
        answer:`<button class="btn">Burro</button> 
        <button class="btn">Oveja</button> 
        <button class="btn">Ardilla</button> 
        <button class="btn">Vaca</button>`,
        correctAnswer: "b"
    },
    {
        question: `<img class="question" id="image" src="assets/images/squirrel.jpg">
        <p class="question"><b>Squirrel</b></p>`,
        answer:`<button class="btn">Perro</button> 
        <button class="btn">Oveja</button> 
        <button class="btn">Mono</button> 
        <button class="btn">Ardilla</button>`,
        correctAnswer: "d"
    },    
];

const gameArea = document.getElementById('game-area');
const questionContainer = document.getElementById('question-container');
const answers = document.getElementById('answer-buttons');
const score = document.getElementsByClassName('score-area');
const next = document.getElementById ('next');

let answer = document.createElement ('section')
let question = document.createElement('section')
let availableQuestion = [];
let scores = 0
let currentQuestion;

//Call functions. 

setAvailableQuestion();
getNewQuestion();

//Functions
//Push the questions and answers into availableQuestion Array
function setAvailableQuestion(){
    const totalQuestion = gameData.length;
     for(let i=0; i<totalQuestion; i++){
        availableQuestion.push(gameData[i])
     }
}
//Set and get random question/answers
function getNewQuestion() {
    const questionIndex = availableQuestion[Math.floor(Math.random() * availableQuestion.length)];
    currentQuestion = questionIndex;
    questionContainer.innerHTML = currentQuestion.question;
    answers.innerHTML = currentQuestion.answer;
}


function selectAnswer(){

}


function calculateCorrectAnswer(){

}

function incrementScore(){

}

function setNextQuestion(){

}

