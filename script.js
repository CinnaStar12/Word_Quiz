var questions = [
    {
        title: "What river function as the southern border of Texas?", 
        choices: ["Red River", "Brazos River", "Rio Grande River", "San Antonio River"],
        answer: "Rio Grande River"
    },
    {
        title: "What state borders texas to the north?",
        choices: ["Arkansas", "Oklahoma", "New Mexico", "Louisiana"],
        answer: "Oklahoma",
    },
    {
        title: "What city is the capital of texas?",
        choices: ["Austin","Houston","San Antonio", "Dallas"],
        answer: "Austin",
    },
    {
        title:  "Texas is the ___ largest state in the United States.",
        choices: ["1st", "2nd","3rd","4th"],
        answer: "2nd",
    },
    {
        title: "What is the state flower of Texas?",
        choices: ["Texas Indian Paintbrush", "Firewheel","Pink Evening Primrose", "Blue Bonnet"],
        answer: "Blue Bonnet",
    },
    {
        title: "What is the most populated city in Texas?",
        choices: ["Houston", "Austin", "Dallas", "El Paso"],
        answer: "Houston"
    }
    


]
var start = document.querySelector("#start-btn");
var question = document.querySelector("#questionDiv");
var secondsLeft = 75;
var timer = document.querySelector("#timer");


start.addEventListener("click", function(){
    start.remove();
    startQuiz();
    
})

function startQuiz(){

    for(i = 0; i < questions.length; i++ )
    {
        question.textContent = questions[i].title;
        var choiceList = document.createElement("ol")
        choiceList.setAttribute("class", "justify-content-left")
        question.append(choiceList);

        var answers = questions[i].choices;       
        for(i = 1;i <= answers.length; i++)
        {
            var choice = document.createElement("li");
            var choiceBtn = document.createElement("button");
            var index = (i-1);
            choiceBtn.textContent = answers[index];
            choiceBtn.setAttribute("class", "btn btn-primary")
            choiceBtn.setAttribute("data-id", "answer" + (i)); 
            question.appendChild(choiceList);
            choiceList.appendChild(choice);
            choice.appendChild(choiceBtn);
        }
    
    }
}

choiceList.addEventListener("click", function(event){
    if(event.target.matches() = questions.answer)
    {
        
    }
});

