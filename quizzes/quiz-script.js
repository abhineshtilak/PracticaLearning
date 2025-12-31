// quizzes/quiz-script.js
document.addEventListener("DOMContentLoaded", initQuiz);
function initQuiz() {

  const startQuizBtn = document.getElementById("startQuizBtn");
  const nameSection = document.getElementById("nameSection");
  const quizSection = document.getElementById("quizSection");
  const quizContainer = document.getElementById("quizContainer");
  const nameInput = document.getElementById("studentName");

  let currentQuestion = 0;
  let score = 0;
  let wrongAnswers = [];
  let studentName = "";

  const correctSound = new Audio("sounds/correct.mp3");
  const wrongSound = new Audio("sounds/wrong.mp3");
  const resultSound = new Audio("sounds/result.mp3");

  

  const quizSet =
    window.bpmQuiz ||
    window.daQuiz ||
    window.fswdQuiz ||
    window.basicCompQuiz;

  if (!quizSet) {
    quizContainer.innerHTML = `<p class="text-red-400">⚠️ No quiz data found</p>`;
    return;
  }

  startQuizBtn.onclick = () => {
    studentName = nameInput.value.trim();
    if (!studentName) return alert("Enter your name");

    nameSection.classList.add("hidden");
    quizSection.classList.remove("hidden");

    currentQuestion = 0;
    score = 0;
    wrongAnswers = [];
    loadQuizCard();
  };

  function loadQuizCard() {
    quizContainer.innerHTML = "";

    if (currentQuestion >= quizSet.length) {
      showFinalResult();
      return;
    }

    const q = quizSet[currentQuestion];

    const card = document.createElement("div");
    card.className =
      "rounded-2xl p-6 mb-6 border border-white/15 backdrop-blur-md bg-white/5";

    const questionEl = document.createElement("p");
    questionEl.className = "text-lg font-semibold mb-4 text-white";
    questionEl.textContent = `${currentQuestion + 1}. ${q.question}`;
    card.appendChild(questionEl);

    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className =
        "block w-full text-left mb-3 p-3 rounded-lg border border-white/20 bg-white/5 hover:bg-cyan-400/10 transition";
      btn.textContent = opt;

      btn.onclick = () => {
        card.querySelectorAll("button").forEach(b => b.disabled = true);

        if (i === q.answer) {
          btn.classList.add("bg-cyan-500/20", "border-cyan-400");
          score++;
          correctSound.play();
        } else {
          btn.classList.add("bg-red-500/20", "border-red-400");
          card.querySelectorAll("button")[q.answer]
            .classList.add("bg-cyan-500/20", "border-cyan-400");
          wrongAnswers.push({
            question: q.question,
            correct: q.options[q.answer],
            chosen: q.options[i],
          });
          wrongSound.play();
        }

        const nextBtn = document.createElement("button");
        nextBtn.textContent =
          currentQuestion + 1 < quizSet.length
            ? "Next Question →"
            : "Finish Quiz 🏁";

        nextBtn.className =
          "mt-4 px-6 py-3 rounded-xl border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 transition";

        nextBtn.onclick = () => {
          currentQuestion++;
          loadQuizCard();
        };

        card.appendChild(nextBtn);
      };

      card.appendChild(btn);
    });

    quizContainer.appendChild(card);
  }

  function showFinalResult() {
    quizContainer.innerHTML = "";
    resultSound.play();

    const percent = Math.round((score / quizSet.length) * 100);

    const resultCard = document.createElement("div");
    resultCard.className =
      "rounded-2xl p-8 border border-white/15 bg-white/5 backdrop-blur-md";

    resultCard.innerHTML = `
      <h2 class="text-2xl font-semibold text-white mb-3">Quiz Completed</h2>
      <p class="text-cyan-300 mb-2">${studentName}, Score: ${score}/${quizSet.length} (${percent}%)</p>
      <div class="flex gap-3 flex-wrap mt-4">
        <button id="retakeBtn" class="px-5 py-2 border border-white/20 rounded-lg">Retake</button>
        <button id="homeBtn" class="px-5 py-2 border border-cyan-400 text-cyan-300 rounded-lg">Home</button>
      </div>
    `;

    quizContainer.appendChild(resultCard);

    document.getElementById("retakeBtn").onclick = () => {
      currentQuestion = 0;
      score = 0;
      wrongAnswers = [];
      loadQuizCard();
    };

    document.getElementById("homeBtn").onclick = () => {
      window.location.href = "index.html";
    };
  }
}
