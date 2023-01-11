var questions = [
    {
        question: "Javascript is an _______ language?",
        ansChoices:  ["Object-Orinted", "Object-Based", "Procedural", "None of the above"],
        corrAns: "Object-Oriented",
    },
    {
        question: "Which of the Folloiwng key words is used to define a variable in Javascript",
        ansChoices:  ["var", "let", "Both A and B", "None of the above"],
        corrAns: "Both A and B",
    },
    {
        question: "Which of the following methods is used to access HTML elemnts using Javascript?",
        ansChoices:  ["getElementbyid()", "getElementByClassName()", "Both A and B", "None of the above"],
        corrAns: "Both A and B",
    },
    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        ansChoices:  ["Throws an error", "Ignored the statements", "Give a warning", "None of the above"],
        corrAns: "Ignored the statements",
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        ansChoices:  ["document.write()", "console.log()", "window.alert()", "None of the above"],
        corrAns: "All of the above",
    },
    {
        question: "How can a datatype be declared to be a constant Type?",
        ansChoices:  ["const", "var", "let", "constant"],
        corrAns: "const",
    },

];
var questionIndex = 0;
var currentQuestion;
var startDiv = document.getElementById("start-div");
var questionsDiv  = document.getElementById("questions-div");
var choicesDiv  = document.getElementById("choices-div");
var questionEl = document.getElementById("question");
var timerId;
var timeEl = document.getElementById("time");
var timeLeft = 120;
var startBtnEl = document.getElementById("start-button");
choicesDiv.onclick = answerClick;
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
    currentQuestion = questions[questionIndex];
    questionEl.textContent = currentQuestion.question;

    choicesDiv.innerHTML = '';

    for ( let i =0; i < currentQuestion.ansChoices.length; i++) {
        let choice = currentQuestion.ansChoices[i];
        let choiceEl = document.createElement('button');
        choiceEl.setAttribute ('class', 'choice');
        choiceEl.setAttribute('value', choice);

        choiceEl.textContent = i + 1 + " . " + choice;

        choicesDiv.appendChild(choiceEl);
    }


}
function oneSecHandler() {
    timeLeft--;
    timeEl.textContent = timeLeft;
    // rest of the function tbe ( to be done)
}

function answerClick(event) {
    var btn = event.target;

    if(!btn.matches('.choice')) {
        return;
    }

    if (btn.value != currentQuestion.corrAns) {
        timeLeft -= 15;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
        alert ("Wrong answeer, Press OK to  proceed");
    
    timeEl.textContent = timeLeft;
    }
    else {
        alert("Right answer!! Press OK to proceed");
    }
    questionIndex++;
    if (timeLeft <=0 || questionIndex === questions.length) {
        endQuiz();
    } else {
        fetchQuestion();
    }
}
function endQuiz() {
    //tbd
}