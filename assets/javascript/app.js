var correct = 0;
var incorrect = 0;
var unanswered = 0;
var counterNumber;
var counter;
var timer;
var questionNumber = 0;
var answerChoices = 0;
var downloadTimer;
//Creating all of my my questions

var questions = [
  {
    question: "How many planets are in the solar system?",
    answers: [9,8,10,11],
    correctAnswer: 8,
    image: "../images/solar-system.jpg"
  },
  {
    question: "What is the diameter of the Sun?",
    answers: ["1,469,199 km (912,918 mi)","1,104,306 km (686,184 mi)","1,392,684 km (865,374 mi)","960,000 km (596,516 mi)"],
    correctAnswer: "1,104,306 km (686,184 mi)",
    image: "../images/sun.jpeg"
  },
  {
    question:"How many moons does Jupiter have?",
    answers: [24,66,94,112],
    correctAnswer: 66,
    image: "../images/jupiter.jpg"
  }
];

//On click of the star button, begin the Game

$("#start").click(function(){
  $("#start").remove();
  nextQuestion();
});

//Creeating the function for the timer to start at 30 and work its way down to 0

function countDowntimer() {
  var timeleft = 30;
  $("#timer").show();
  $("#timer").text(timeleft);
  downloadTimer = setInterval(function(){
    timeleft--;
    $("#timer").text(timeleft);
    if (timeleft <= 0) {
      unanswered++;
      questionIncrement();
      if (questionNumber > questions.length - 1) {
        clearInterval(downloadTimer);
        results();
      } else {
        nextQuestion();
      }
    }
  }, 1000);
}


//Increment through each question
function questionIncrement(){
  questionNumber++;
}

console.log('questionNumber: ' + questionNumber);
console.log('number of questions ' + questions.length);

//Increment through each answer answerChoice
function answerIncrement() {
  $("#answerChoice").text("");
  for (var i = 0; i < questions[questionNumber].answers.length; i++) {
    $("#answerChoice").append('<button class = "col-lg-6 col-md-6 col-sm-6 col-6 btn btn-primary btn-large align-content-center answerButton" + id= ' + questions[questionNumber].answers[i] + " value = " + questions[questionNumber].answers[i] + " > " + questions[questionNumber].answers[i] + "</button><br>");
  }
  $("#answerChoice").show();
}

//Creating a function to display the results
function results(){
  // Hide all other divs on screen
  $("#timer").hide();
  $("#question").hide();
  $("#answerChoice").hide();
  $("#correctAnswer").hide();
  $("#nextButton").hide();
  //Add text to show the user they are done
  //Add the amount correct
  //Add the amount incorrect
  //Add the amount unanswered
  //Add a button to start over
  $("#results").append('<h2 class="numberCorrect">Correct Answers: <span> '+ correct + '</span></h2>');
  $("#results").append('<h2 class="numberIncorrect">Incorrect Answers: <span> '+ incorrect + '</span></h2>');
  $("#results").append('<h2 class="numberUnanswered">Incorrect Answers: <span> '+ unanswered + '</span></h2>');
}

function nextQuestion() {
  clearInterval(downloadTimer);

  if (questionNumber > questions.length - 1) {
    results();
    return;
  }

  //Advance to the next Question

  console.log('questionNumber: ' + questionNumber);
  //begin countdown timer
  countDowntimer();

  console.log('Question ' + questionNumber);
  //Add the question text
  $("#question").text(questions[questionNumber].question);
  $("#correctAnswer").text("");

  //Add the potential answers
  answerIncrement();

  $(".answerButton").click(function(){
    clearInterval(downloadTimer);
    console.log($(this).text());
    if ($(this).text().trim() == questions[questionNumber].correctAnswer){
      $("#timer").replaceWith('<h2 id="timer">Correct Answer!</h2>');
      correct++;
      console.log('correct ' + correct);
    } else {
      $("#timer").replaceWith('<h2 id="timer">Wrong Answer! Better Luck Next TIme</h2>');
      incorrect++;
    }

    $("#answerChoice").hide();
    $("#correctAnswer").text(questions[questionNumber].correctAnswer);
    $("#answerImage").append(questions[questionNumber].image);
    $("#next").append('<button class = "btn btn-primary btn-large align-content-center answerButton" + id="nextButton">Next</button>');
    $("#nextButton").click(function() {
      questionIncrement();
      nextQuestion();
      $("#next").text("");
    });

  });

}
