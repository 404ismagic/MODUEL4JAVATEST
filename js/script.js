var questions = [
    {
        question: "Q1",
        ansChoices:  ["A1", "A2", "A3", "A4"],
        corrAns: "A3",
    },
    {
        question: "Q2",
        ansChoices:  ["A1", "A2", "A3", "A4"],
        corrAns: "A1",
    },
    {
        question: "Q3",
        ansChoices:  ["A1", "A2", "A3", "A4"],
        corrAns: "A2",
    },
    {
        question: "Q4",
        ansChoices:  ["A1", "A2", "A3", "A4"],
        corrAns: "A3",
    },
    {
        question: "Q5",
        ansChoices:  ["A1", "A2", "A3", "A4"],
        corrAns: "A4",
    },
    {
        question: "Q6",
        ansChoices:  ["A1", "A2", "A3", "A4"],
        corrAns: "A1",
    },

];
var startDiv = document.getElementById("start-div");
var questionsDiv  = document.getElementById("questions-div");
var timerId;
var timeEl = document.getElementById("time");
var timeLeft = 120;
var startBtnEl = document.getElementById("start-button");
startBtnEl.onclick=startQuiz;

function startQuiz() {
    startDiv.setAttribute('class','hide');
    questionsDiv.removeAttribute('class');
    timerId = setInterval(oneSecHandler,  1000);
    timeEl.textContent = timeLeft;
    fetchQuestion();
}
function fetchQuestion() {
    //tbd
}
function oneSecHandler() {
    timeLeft--;
    timeEl.textContent = timeLeft;
    // rest of the function tbe ( to be done)
}