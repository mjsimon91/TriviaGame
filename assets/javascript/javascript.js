var correct;
var incorrect;
var counterNumber;
var counter;
var timer;
var questionNumber = 0;
var answerChoices = 0
//Creating all of my my questions

var questions = [{
  questionId: 1,
  question: "How many planets are in the solar system?",
  answers: [9,8,10,11],
  correctAnswer: 8
},
{
  questionId: 2,
  question: "What is the diameter of the Sun?",
  answers: ["1,469,199 km (912,918 mi)","1,104,306 km (686,184 mi)","1,392,684 km (865,374 mi)","960,000 km (596,516 mi)"],
  correctAnswer: "1,104,306 km (686,184 mi)"
},
{
  questionId: 3,
  question:"How many moons does Jupiter have?",
  answers: ["24","66","94","112"],
  correctAnswer: 66
}
];

//On click of the star button, begin the Game

$("#start").click(function(){
  $("#start").remove();
  startGame();
});

//Creeating the function for the timer to start at 30 and work its way down to 0

function countDowntimer() {
  var timeleft = 30;
    var downloadTimer = setInterval(function(){
    timeleft--;
    $("#timer").text(timeleft)
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);
  }


//Increment through each question
function questionIncrement(){
  questionNumber++;
}

console.log('questionNumber: ' + questionNumber);

//Increment through each answer answerChoice
function answerIncrement() {
  for (var i = 0; i < questions[questionNumber].answers.length; i++) {
    $("#answerChoice").append("<button class = answerButton + id= " + questions[questionNumber].answers[i] + " value = " + questions[questionNumber].answers[i] + " > " + questions[questionNumber].answers[i] + "</button><br>");
  }
}

//Creating a function that will begin the game.
//
function startGame(){
  //begin countdown timer
  countDowntimer();

    //Add the question text

    $("#question").append("<h2>" + questions[questionNumber].question + "</h2>");

    //Add the potential answers
    answerIncrement();

    $(".answerButton").click(function(){
      console.log(this.value);
      if (this.value == questions[questionNumber].correctAnswer){
        $("#timer").replaceWith('<h2 id="correctResponse">Correct Answer!</h2>');
        $("#answerChoice").hide();
        $("#correctAnswer").text(questions[questionNumber].correctAnswer);
        nextQuestion();
      } else {
        $("#timer").replaceWith('<h2 id="incorrectResponse">Wrong Answer! Better Luck Next TIme</h2>');
        $("#answerChoice").hide();
        $("#correctAnswer").text(questions[questionNumber].correctAnswer);
        nextQuestion();
      }
    });
  }

  function nextQuestion(){
    //Advance to the next Question

    questionIncrement()

    //begin countdown timer
    countDowntimer();

    //Add the question text

    $("#question").append("<h2>" + questions[questionNumber].question + "</h2>");

    //Add the potential answers
    answerIncrement();

    $(".answerButton").click(function(){
      console.log(this.value);
      if (this.value == questions[questionNumber].correctAnswer){
        $("#timer").replaceWith('<h2 id="correctResponse">Correct Answer!</h2>');
        $("#answerChoice").hide();
        $("#correctAnswer").text(questions[questionNumber].correctAnswer);
      } else {
        $("#timer").replaceWith('<h2 id="incorrectResponse">Wrong Answer! Better Luck Next TIme</h2>');
        $("#answerChoice").hide();
        $("#correctAnswer").text(questions[questionNumber].correctAnswer);
      }
    });
  }
