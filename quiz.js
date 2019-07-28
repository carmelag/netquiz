/*Global variables declaration and initialization*/
var i = 0;
var questionsNumber = 5;
var globalScore = 0;
var answerSelected = false;

var questions = Array();
var answers = Array();
var correctAnswers = Array();

var quizSolutionBox = document.getElementById("quiz-solution");
var allAnswers = document.getElementsByClassName("quiz-answer");
var questionContainer = document.getElementById("quiz-question");
var nextButton = document.getElementById("quiz-btn-next");
var endButton = document.getElementById("quiz-btn-end");
var quizEndContainer = document.getElementById("quiz-end");
var quizScoreContainer = document.getElementById("quiz-final-score");

/*Questions array*/
questions.push(
  "How many series Breaking Bad has?",
  "Who is the star actress at Stranger Things?",
  "What role does Jaime Lorente play on La Casa de Papel?",
  "What's the title of the first interactive episode on Netflix?",
  "What's the nationality of the tv serie Dark?"
);

/*Anserws multi-dimentional array*/
answers.push(
  ["5 series", "4 series", "8 series", "9 series"],
  ["Winora Ryder", "Anne Hathaway", "Nicole Kidman", "Sandra Oh"],
  ["Rio", "Denver", "The Professor", "Helsinki"],
  ["Bandersnatch", "The snatch", "IO last on earth", "The OA"],
  ["Russian", "Italian", "American", "German"]
);

/*Correct answers array*/
correctAnswers.push(1, 1, 2, 1, 4);

/*This function is called to hide the other answers when an answer is selected*/
function hideOtherAnswers(answerNumber) {
  for (var j = 0; j < allAnswers.length; j++) {
    allAnswers[j].style.visibility = "hidden";
  }
  var selectedAnswer = document.getElementById("quiz-answer-" + answerNumber);
  selectedAnswer.style.visibility = "visible";
}

/*This functions shows all the answers*/
function showAllAnswers() {
  for (var j = 0; j < allAnswers.length; j++) {
    allAnswers[j].style.visibility = "visible";
  }
}

/*This fuction is called when the user clicks on an answer*/
function checkAnswer(answerNumber) {
  answerSelected = true;
  if (answerNumber == correctAnswers[i]) {
    quizSolutionBox.style.visibility = "visible";
    quizSolutionBox.innerHTML = "Your answer is correct! Good job!";
    globalScore++;
    hideOtherAnswers(answerNumber);
  } else {
    quizSolutionBox.style.visibility = "visible";
    quizSolutionBox.innerHTML =
      "Sorry! The correct answer is: " + answers[i][correctAnswers[i] - 1];
    hideOtherAnswers(answerNumber);
  }
}

/*This function loads the current question*/
function loadQuestion(i) {
  var currentQuestion = questions[i];
  questionContainer.innerHTML = currentQuestion;

  var currentAnswers = answers[i];
  for (j = 0; j < 4; j++) {
    var answerIndex = j + 1;
    var answerContainer = document.getElementById("quiz-answer-" + answerIndex);
    answerContainer.innerHTML = answers[i][j];
  }
}

/*This function takes to the next question*/
function goToNextQuestion() {
  if (answerSelected === true) {
    i++;
    quizSolutionBox.style.visibility = "hidden";
    loadQuestion(i);
    showAllAnswers();
    if (i == 4) {
      nextButton.style.display = "none";
      endButton.style.display = "inline-block";
    }
    answerSelected = false;
  } else {
  }
}

/*This function shows the final score*/
function goToResults() {
  endButton.style.display = "none";
  quizSolutionBox.style.visibility = "hidden";
  questionContainer.style.display = "none";
  document.getElementsByClassName("quiz-answers")[0].style.display = "none";
  quizEndContainer.style.display = "block";
  quizScoreContainer.innerHTML = globalScore;
}

window.onload = function() {
  loadQuestion(i);
};
