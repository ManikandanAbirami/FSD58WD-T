// Define the Quiz Questions and Answers
var quizQuestions = [
  {
    question: "What is 10/2?",
    choices: ["5", "10", "15", "20"],
    correctAnswer: "5",
  },
  {
    question: "What is 30/3?",
    choices: ["5", "10", "15", "20"],
    correctAnswer: "10",
  },
];

// Define Each Questions and Get User's Answer

var userScore = 0;

for (var i = 0; i < quizQuestions.length; i++) {
  var userAnswer = prompt(
    quizQuestions[i].question + "\n" + quizQuestions[i].choices
  );

  if (userAnswer === quizQuestions[i].correctAnswer) {
    userScore++;
  }
}

alert("Your score is: " + userScore + "/" + quizQuestions.length);
