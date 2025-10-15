// quizzes/quiz-script.js
document.addEventListener("DOMContentLoaded", () => {
  const startQuizBtn = document.getElementById("startQuizBtn");
  const nameSection = document.getElementById("nameSection");
  const quizSection = document.getElementById("quizSection");
  const quizContainer = document.getElementById("quizContainer");
  const nameInput = document.getElementById("studentName");

  let currentQuestion = 0;
  let score = 0;
  let wrongAnswers = [];
  let studentName = "";

  // Automatically detect which quiz array exists
  const quizSet = window.bpmQuiz || window.daQuiz || window.fswdQuiz || window.basicCompQuiz;

  if (!quizSet) {
    quizContainer.innerHTML = `<p class="text-red-600 text-lg font-semibold">⚠️ No quiz data found! Check your quiz file.</p>`;
    return;
  }

  // When user clicks start
  startQuizBtn.addEventListener("click", () => {
    studentName = nameInput.value.trim();
    if (!studentName) {
      nameInput.classList.add("ring-2", "ring-red-500");
      return;
    }

    nameSection.classList.add("opacity-0", "scale-90");
    setTimeout(() => {
      nameSection.classList.add("hidden");
      quizSection.classList.remove("hidden");
      quizSection.classList.add("animate-fadeIn");
      currentQuestion = 0;
      score = 0;
      wrongAnswers = [];
      loadQuizCard();
    }, 300);
  });

  // Load a single question card
  function loadQuizCard() {
    quizContainer.innerHTML = "";

    if (currentQuestion >= quizSet.length) {
      showFinalResult();
      return;
    }

    const q = quizSet[currentQuestion];
    const card = document.createElement("div");
    card.classList.add("bg-white", "shadow-lg", "rounded-2xl", "p-6", "mb-6", "animate-fadeIn");

    const questionEl = document.createElement("p");
    questionEl.classList.add("text-xl", "font-semibold", "mb-4");
    questionEl.textContent = `${currentQuestion + 1}. ${q.question}`;
    card.appendChild(questionEl);

    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.classList.add("block", "w-full", "text-left", "mb-3", "p-3", "border", "rounded-lg", "hover:bg-gray-100", "transition");
      btn.textContent = opt;

      btn.addEventListener("click", () => {
        card.querySelectorAll("button").forEach(b => (b.disabled = true));

        if (i === q.answer) {
          btn.classList.add("bg-green-500", "text-white");
          score++;
        } else {
          btn.classList.add("bg-red-500", "text-white");
          card.querySelectorAll("button")[q.answer].classList.add("bg-green-500", "text-white");
          wrongAnswers.push({
            question: q.question,
            correct: q.options[q.answer],
            chosen: q.options[i],
          });
        }

        const nextBtn = document.createElement("button");
        nextBtn.textContent = currentQuestion + 1 < quizSet.length ? "Next Question →" : "Finish Quiz 🏁";
        nextBtn.classList.add("mt-4", "px-6", "py-3", "bg-indigo-600", "text-white", "rounded-xl", "hover:bg-indigo-700", "transition");
        nextBtn.addEventListener("click", () => {
          currentQuestion++;
          loadQuizCard();
        });
        card.appendChild(nextBtn);
      });

      card.appendChild(btn);
    });

    quizContainer.appendChild(card);
  }

  // Show final score + feedback
  function showFinalResult() {
    quizContainer.innerHTML = "";

    const percent = Math.round((score / quizSet.length) * 100);
    let feedback = "";
    if (percent < 30) feedback = "😢 Poor – Keep practicing!";
    else if (percent < 75) feedback = "🙂 Good – You can do better!";
    else if (percent < 90) feedback = "😎 Great – Impressive work!";
    else if (percent < 100) feedback = "🔥 Very Great – Almost perfect!";
    else feedback = "🏆 Champion – Full marks! Excellent!";

    // RESULT CARD
    const resultCard = document.createElement("div");
    resultCard.classList.add("bg-white", "shadow-xl", "rounded-2xl", "p-8", "mb-6", "w-full", "animate-fadeIn");
    resultCard.innerHTML = `
      <h2 class="text-3xl font-bold text-indigo-700 mb-3">Quiz Completed!</h2>
      <p class="text-lg text-gray-700 mb-2">${capitalize(studentName)}, your score is 
        <span class="text-indigo-600 font-semibold">${score}/${quizSet.length}</span>
        <span class="text-gray-600">(${percent}%)</span>
      </p>
      <p class="text-xl font-medium text-gray-800 mb-4">${feedback}</p>
      <div class="flex flex-wrap justify-center gap-3">
        <button id="viewWrongBtn" class="px-5 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition">
          View Wrong Answers
        </button>
        <button id="retakeBtn" class="px-5 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Retake Quiz</button>
        <button id="homeBtn" class="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Back to Home</button>
      </div>
    `;

    // WRONG ANSWERS CARD (initially hidden)
    const wrongCard = document.createElement("div");
    wrongCard.classList.add("bg-white", "shadow-md", "rounded-2xl", "p-6", "w-full", "animate-fadeIn", "hidden");

    if (wrongAnswers.length > 0) {
      const header = document.createElement("h3");
      header.classList.add("text-2xl", "font-bold", "text-red-600", "mb-4");
      header.textContent = "❌ Questions you got wrong:";
      wrongCard.appendChild(header);

      const list = document.createElement("ul");
      list.classList.add("space-y-3");

      wrongAnswers.forEach((w) => {
        const item = document.createElement("li");
        item.classList.add("bg-red-50", "border-l-4", "border-red-500", "p-3", "rounded");
        item.innerHTML = `
          <p class="font-semibold mb-1"><strong>Q:</strong> ${w.question}</p>
          <p class="text-sm"><strong>Your answer:</strong> <span class="text-red-600">${w.chosen}</span></p>
          <p class="text-sm"><strong>Correct answer:</strong> <span class="text-green-600">${w.correct}</span></p>
        `;
        list.appendChild(item);
      });

      wrongCard.appendChild(list);
    } else {
      wrongCard.innerHTML = `
        <h3 class="text-2xl font-bold text-green-600 mb-2">🎉 All correct!</h3>
        <p class="text-gray-700">Excellent work — you answered every question correctly.</p>
      `;
    }

    quizContainer.appendChild(resultCard);
    quizContainer.appendChild(wrongCard);

    // Handle Buttons
    document.getElementById("viewWrongBtn").addEventListener("click", () => {
      wrongCard.classList.toggle("hidden");
    });

    document.getElementById("retakeBtn").addEventListener("click", () => {
      currentQuestion = 0;
      score = 0;
      wrongAnswers = [];
      quizContainer.innerHTML = "";
      loadQuizCard();
    });

    document.getElementById("homeBtn").addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
});
