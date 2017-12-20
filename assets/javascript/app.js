var answer;
var response;
var questionTitle;
var questionAnswer;
var currentQuestion = 0;
var correctAnswer = 0;
var timer = $("#timer");
var actualQuestion = $('#question');
var answerChoices = $('#answerChoice');

//Creating an object that will hold all of the trivia questions

var myQuestions = [{
  questionId: 1,
  question: "How many planets are in the solar system?",
  answers: ["9","8","10","11"],
  correctAnswer: myQuestions.answers[1]
},
{
  questionId: 2,
  question: "What is the diameter of the Sun?",
  answers: ["1,469,199 km (912,918 mi)","1,104,306 km (686,184 mi)","1,392,684 km (865,374 mi)","960,000 km (596,516 mi)"],
  correctAnswer: 2
},
{
  questionId: 3,
  question:"How many moons does Jupiter have?",
  answers: ["24","66","94","112"],
  correctAnswer: 1
}
];

console.log(myQuestions[0].correctAnswer);
// Need to recognize the click event in irder to begin the trivia Game

//Creating a function to display a question
for (var i = 0; i < myQuestions.length; i++) {
  var selectedQuestion = 1;
    if (selectedQuestion == myQuestions[i].questionId){
      $(actualQuestion).append("<h2>" + myQuestions[i].question + "</h2>");

      for (var j = 0; j < myQuestions[i].answers.length; j++) {
        // templateLiteral = `string${mylist}`
        $(answerChoices).append("<button class = answerButton + id= " + myQuestions[i].answers[j] + " value = " + myQuestions[i].answers[j] + " > " + myQuestions[i].answers[j] + "</button><br>");
      }
    }
  }

//click values




//Display the next question in the Game
//Display all the potential answers
  //Recognize the answer selected
    //If correct, display that the answer was correct
    //If incorrect, display that the answer was incorrect
//Loop through each question until all the questions have been answered
//Display the results at the end
