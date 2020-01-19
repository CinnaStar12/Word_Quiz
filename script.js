var start = $("#start-btn");
var questionTitle = $("#questionDiv");
var secondsLeft = 75;
var timer = $("#timer");
var qNumber = 0;
var message = $("<h2>");


function runQuiz(qNumber) {
    //find question title, choices, and answer
    var choices = questions[qNumber].choices;
    var answer = questions[qNumber].answer;
    var selection = $("<ol>");
    //write and append question
    questionTitle.text(questions[qNumber].title);
    questionTitle.append(selection);
    //create buttons and append for choices
    console.log(answer);
    choices.forEach(function (choice) {
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
        if (event.target.textContent === answer) {
            message.text("Correct!");
            qNumber++;
            runQuiz(qNumber);
        }
        else {
            message.text("Wrong!");
            secondsLeft -= 10;
        }
    })

}
function timeLeft(){
    var timeLimit = setInterval(function(){
        secondsLeft--;
        timer.text("Time: " + secondsLeft);
        if(secondsLeft <= 0)
        {
            endQuiz();
        }
    }, 1000);
}

start.on("click", function () {
    start.remove();
    timeLeft();
    runQuiz(0);


})
function endQuiz(){
    questionTitle.remove();
}