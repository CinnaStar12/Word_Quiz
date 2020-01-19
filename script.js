var start = $("#start-btn");
var questionTitle = $("#questionDiv");
var secondsLeft = 0;
var timer = $("#timer");
var qNumber = 0;
var message = $("<h2>");


function runQuiz(qNumber) {
    //find question title, choices, and answer
    var selection = $("<ol>");
    //write and append question
    questionTitle.text(questions[qNumber].title);
    questionTitle.append(selection);
    //create buttons and append for choices
    questions[qNumber].choices.forEach(function (choice) {
        var choiceList = $("<li>")
        var choiceBtn = $("<button>");
        choiceBtn.text(choice)
        choiceBtn.attr("class", "btn btn-primary")
        selection.append(choiceList);
        choiceList.append(choiceBtn);

    });
    //check answer to scrip if wrong lose time, if right gain score and move on.
    selection.append(message);

    $("button").on("click", function (event) {
        if (event.target.textContent === questions[qNumber].answer) {
            message.text("Correct!");
            qNumber++;
            if(qNumber > 9)
            {
                var score = secondsLeft;
                endQuiz();
                clearInterval(timeLimit);
                
                
            }
            else{
            runQuiz(qNumber);
            }
        }
        else {
            message.text("Wrong!");
            secondsLeft -= 15;
            
        }
    })

}
function timeLeft(time){
        secondsLeft = time;
        timeLimit = setInterval(function(){
        secondsLeft--;
        timer.text("Time: " + secondsLeft);
        if(secondsLeft <= 0)
        {
            endQuiz();
            clearInterval(timeLimit);
        }
    }, 1000);
}

start.on("click", startQuiz);

function startQuiz(){
    start.remove();
    timeLeft(150);
    runQuiz(0);

}
function endQuiz(){
    questionTitle.remove();
    var endScreen = $("<div>");
    endScreen.attr("class", "col-md text-center")
    $("body").append(endScreen);
    message.text("Quiz Over!");
    endScreen.append(message);
    var score = $("<div>");
    finalScore = secondsLeft;
    if(finalScore < 0){
        finalScore = 0;
    }
    score.text("Your score is " + finalScore + "!")
    message.append(score);
    clearInterval();
    highScoreBtn = $("<button>")
    highScoreBtn.text("Save High Score")
    highScoreBtn.attr("class", "btn btn-primary")
    endScreen.append(highScoreBtn);
}
highScoreBtn.on("click", function(){
    endScreen.remove();
    input = $("<form>");

})
function saveHighScore(){

}