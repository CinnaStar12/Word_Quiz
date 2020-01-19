var start = $("#start-btn");
var questionTitle = $("#questionDiv");
var secondsLeft = 75;
var timer = $("#timer");
var qNumber = 0;
var message = $("<h3>");

start.on("click", function(){
    start.remove();
    runQuiz(0);
    var time = setInterval(timeLimit(), 1000);
    
})
function runQuiz(qNumber){
    //find question title, choices, and answer
    var choices = questions[qNumber].choices;
    var answer = questions[qNumber].answer;
    var selection= $("<ol>");
    //write and append question
    questionTitle.text(questions[qNumber].title);
    questionTitle.append(selection);
    //create buttons and append for choices
    console.log(answer);
    choices.forEach(function(choice){
        var choiceList = $("<li>")
        var choiceBtn = $("<button>");
        choiceBtn.text(choice)
        choiceBtn.attr("class", "btn btn-primary")
        selection.append(choiceList);
        choiceList.append(choiceBtn);
        
    });
    //check answer if wrong lose time, if right gain score and move on.
   
    
    selection.on("click", function(event){
        if(event.target.textContent === answer)
        {
            message.text("Correct!");
            qNumber++;
            runQuiz(qNumber);
            $.append(message)
        } 
        else{
            message.text("Wrong!");
        }
    })
    
}
function timeLimit(){
    timer.text(secondsLeft);
    secondsLeft--;

}
