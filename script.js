// script.js

// Questions will come from questions.js file
// (Make sure you load questions.js before this file in HTML)

// Elements
const questionElement = document.getElementById("question");
const optionsContainer = document.querySelector(".options");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

// Load a question
function loadQuestion() {
  answered = false;
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  // Clear old options
  optionsContainer.innerHTML = "";

  // Add new options
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    button.addEventListener("click", () => selectAnswer(button, index));
    optionsContainer.appendChild(button);
  });
}

// Handle answer selection
function selectAnswer(button, index) {
  if (answered) return;
  answered = true;

  const currentQuestion = questions[currentQuestionIndex];
  const optionButtons = optionsContainer.querySelectorAll(".option");

  optionButtons.forEach((btn, i) => {
    if (i === currentQuestion.correct) {
      btn.classList.add("correct");
    } else if (i === index) {
      btn.classList.add("wrong");
    }
    btn.disabled = true;
  });

  if (index === currentQuestion.correct) {
    score++;
  }
}

// Next button
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    quizEnd();
  }
});

// End of quiz
function quizEnd() {
  questionElement.textContent = `Quiz Completed 🎉 Your Score: ${score}/${questions.length}`;
  optionsContainer.innerHTML = "";
  nextButton.style.display = "none";
}

// Start quiz
loadQuestion();
