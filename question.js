// questions.js

const questions = [
  // CSS Basics
  {
    question: "Which property is used to change the text color in CSS?",
    options: ["font-color", "text-color", "color", "background-color"],
    correct: 2
  },
  {
    question: "Which property is used to change the background color in CSS?",
    options: ["bgcolor", "background", "background-color", "color"],
    correct: 2
  },
  {
    question: "Which property is used to align text to the center?",
    options: ["align", "text-align", "font-align", "justify"],
    correct: 1
  },
  {
    question: "Which property is used to set the spacing between lines of text?",
    options: ["line-height", "letter-spacing", "word-spacing", "text-spacing"],
    correct: 0
  },
  {
    question: "Which property controls the visibility of an element?",
    options: ["display", "visibility", "opacity", "position"],
    correct: 1
  },
  {
    question: "Which property is used to round the corners of a box?",
    options: ["corner-radius", "border-style", "border-radius", "border-corner"],
    correct: 2
  },
  {
    question: "Which property makes an element take the full width of its parent?",
    options: ["display: block", "display: inline", "width: auto", "flex: 1"],
    correct: 0
  },
  {
    question: "Which property hides an element but still keeps its space?",
    options: ["display: none", "visibility: hidden", "opacity: 0", "z-index: -1"],
    correct: 1
  },
  {
    question: "Which unit in CSS is relative to the parent element’s font size?",
    options: ["em", "rem", "px", "%"],
    correct: 0
  },
  {
    question: "Which CSS property is used to add shadow to text?",
    options: ["font-shadow", "text-shadow", "box-shadow", "shadow"],
    correct: 1
  },

  // JavaScript - Variables & Basics
  {
    question: "Which keyword declares a variable that can be reassigned?",
    options: ["const", "let", "var", "static"],
    correct: 1
  },
  {
    question: "Which keyword declares a constant variable in JavaScript?",
    options: ["var", "let", "const", "static"],
    correct: 2
  },
  {
    question: "What is the correct operator to check equality in both value and type?",
    options: ["=", "==", "===", "!="],
    correct: 2
  },
  {
    question: "What will typeof null return in JavaScript?",
    options: ["null", "object", "undefined", "number"],
    correct: 1
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["/* */", "//", "#", "<!-- -->"],
    correct: 1
  },

  // JavaScript - Functions
  {
    question: "Which keyword is used to define a function?",
    options: ["func", "function", "method", "define"],
    correct: 1
  },
  {
    question: "How do you call a function named myFunc?",
    options: ["call myFunc", "myFunc()", "run myFunc", "invoke.myFunc"],
    correct: 1
  },
  {
    question: "What will happen if a function does not return anything?",
    options: ["It returns null", "It returns undefined", "It throws an error", "It stops execution"],
    correct: 1
  },
  {
    question: "Which syntax is correct for an arrow function?",
    options: [
      "function => () {}",
      "() => {}",
      "=> function() {}",
      "() => function {}"
    ],
    correct: 1
  },
  {
    question: "Which is a correct arrow function returning x + y?",
    options: [
      "(x, y) => { return x + y; }",
      "(x, y) => x + y",
      "x, y => return x + y",
      "(x, y) => { x + y }"
    ],
    correct: 0
  },

  // JavaScript - Loops
  {
    question: "Which loop executes a block of code a specific number of times?",
    options: ["while", "do...while", "for", "foreach"],
    correct: 2
  },
  {
    question: "Which loop checks the condition before executing the block?",
    options: ["for", "while", "do...while", "foreach"],
    correct: 1
  },
  {
    question: "Which loop is guaranteed to run at least once?",
    options: ["for", "while", "do...while", "foreach"],
    correct: 2
  },
  {
    question: "Which statement exits the current loop?",
    options: ["exit", "stop", "break", "end"],
    correct: 2
  },
  {
    question: "Which statement skips the current iteration and moves to the next?",
    options: ["continue", "skip", "next", "pass"],
    correct: 0
  },

  // JavaScript - DOM
  {
    question: "Which method selects an element by ID?",
    options: [
      "document.getElementById()",
      "document.querySelectorAll()",
      "document.getElementsByClassName()",
      "document.querySelectorAll('#id')"
    ],
    correct: 0
  },
  {
    question: "Which method selects the first matching element?",
    options: [
      "document.getElementById()",
      "document.querySelector()",
      "document.getElementsByTagName()",
      "document.getElementsByClassName()"
    ],
    correct: 1
  },
  {
    question: "Which property changes the HTML content of an element?",
    options: ["innerHTML", "value", "textContent", "setAttribute"],
    correct: 0
  },
  {
    question: "Which property changes the text content of an element?",
    options: ["innerHTML", "textContent", "innerText", "nodeValue"],
    correct: 1
  },
  {
    question: "Which method adds a new element to the DOM?",
    options: ["appendChild()", "createElement()", "addNode()", "insert()"],
    correct: 0
  },
  {
    question: "Which method creates a new HTML element in JavaScript?",
    options: ["document.create()", "document.newElement()", "document.createElement()", "document.appendElement()"],
    correct: 2
  },
  {
    question: "Which method removes a child node from the DOM?",
    options: ["removeNode()", "removeChild()", "delete()", "clearNode()"],
    correct: 1
  },
  {
    question: "Which method adds an event listener to an element?",
    options: ["onEvent()", "addEvent()", "addEventListener()", "attachEvent()"],
    correct: 2
  },
  {
    question: "Which event is fired when a button is clicked?",
    options: ["hover", "change", "submit", "click"],
    correct: 3
  },
  {
    question: "Which property is used to change the value of an input field?",
    options: ["innerHTML", "textContent", "value", "inputValue"],
    correct: 2
  },
  {
    question: "Which property returns the parent node of an element?",
    options: ["parentNode", "getParent()", "parentElement", "ancestor"],
    correct: 0
  },
  {
    question: "Which property gives the number of child elements?",
    options: ["childNodes", "children.length", "nodeCount", "childCount"],
    correct: 1
  },
  {
    question: "Which property changes the style of an element in JavaScript?",
    options: ["setAttribute()", "style", "cssText", "changeStyle()"],
    correct: 1
  }
];
