var startBtn = document.querySelector("#start");
var question = document.querySelector("#question");
var choices = document.querySelector("#choices");
var scoreTracker = document.querySelector("#score");


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



startBtn.addEventListener('click', function (){
    quiz();
})

function quiz() {
    question.textContent = questionsArr[questionIndex]["question"]
    for (var i = 1; i < 5; i++) {
        var newBtn = document.createElement("button");
        newBtn.textContent = questionsArr[questionIndex]["choice" + i];
        choices.appendChild(newBtn);
    }
}

newBtn.addEventListener('click', function(event){
    event.preventDefault();
    if (event.target.textContent == questionsArr[questionIndex].answer) {
        alert("You got it right!")
        score++;
        }
    else {
        alert("You got it wrong!")
    }
scoreTracker.textContent = "You have scored" + score;
questionIndex++;
    

})

