var startBtn = document.querySelector("#start");
var question = document.querySelector("#question");
var choices = document.querySelector("#choices");
var scoreTracker = document.querySelector("#score");
var countDown = document.querySelector("#countdown");
var scoreInput = document.querySelector("#userInput")

var questionsArr = [
    {
        question: "What is the tallest mountain?",
        choice1: "Mount Everest",
        choice2: "Mount Kilimanjaro",
        choice3: "Mount Fuji",
        choice4: "Mount Logan",
        answer: "Mount Everest"
    },
    {
        question: "Who was first prime minister of Canada?",
        choice1: "Justin Trudeau",
        choice2: "Joe Clark",
        choice3: "John A. Macdonald",
        choice4: "John Turner",
        answer: "John A. Macdonald"

    }
];
var questionIndex = 0;
var time = 60;
var score = 0;
var choicesSomething = document.getElementById("choices");
var scores = [];
var timerId;




startBtn.addEventListener('click', function () {
    document.getElementById("start").style.display = "none"
    quiz();
    countDown.innerText = time
    startTimer();

})

function quiz() {
    question.textContent = questionsArr[questionIndex]["question"]
    choices.innerHTML = ""
    for (var i = 1; i < 5; i++) {
        console.log("test");
        var newBtn = document.createElement("button");
        newBtn.textContent = questionsArr[questionIndex]["choice" + i];
        choices.appendChild(newBtn);
    }

}


function startTimer() {
timerId = setInterval(function () {
        time--;
        countDown.innerText = time;
    }, 1000)
}

choices.addEventListener('click', function (event) {
    if (event.target.textContent == questionsArr[questionIndex].answer) {
        alert("You got it right!")
        score++;
        questionIndex++;
    }

    else {
        alert("You got it wrong!")
        questionIndex++;
        time--;
    }

    if (questionIndex >= questionsArr.length) {
        endQuiz();
    }
    else {
        quiz();
    }

})



function endQuiz() {
    clearInterval(timerId);
    scoreInput.classList.remove("is-hidden");
    // Use clickevent on button to grab value from input
    // Save input value and score in an object 
    // push that object into scores array
    // Set the array in local storage using JSON 
}


