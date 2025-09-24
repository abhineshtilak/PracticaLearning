// questions.js

const questions = [
  // Arrays (8 Questions)
  {
    question: "Which method adds one or more elements to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: 0
  },
  {
    question: "Which method removes the first element from an array?",
    options: ["pop()", "shift()", "splice()", "All of the above"], // tricky question
    correct: 1
  },
  {
    question: "Which method creates a new array with the results of calling a function on every element?",
    options: ["filter()", "map()", "forEach()", "reduce()"],
    correct: 1
  },
  {
    question: "Which method merges two or more arrays into a new array?",
    options: ["concat()", "join()", "push()", "splice()"],
    correct: 0
  },
  {
    question: "Which method flattens nested arrays into a single array?",
    options: ["flat()", "flatten()", "reduce()", "None of the above"], // tricky question
    correct: 0
  },
  {
    question: "Which method removes elements from an array and optionally inserts new elements?",
    options: ["slice()", "splice()", "pop()", "shift()"],
    correct: 1
  },
  {
    question: "Which method returns a shallow copy of a portion of an array?",
    options: ["slice()", "splice()", "copyWithin()", "fill()"],
    correct: 0
  },
  {
    question: "Which method fills all elements in an array with a static value?",
    options: ["fill()", "map()", "forEach()", "replace()"],
    correct: 0
  },

  // DOM (7 Questions)
  {
    question: "Which method selects an element by its ID?",
    options: ["getElementById()", "getElementsByClassName()", "querySelector()", "querySelectorAll()"],
    correct: 0
  },
  {
    question: "Which property changes the text content of an element?",
    options: ["innerHTML", "textContent", "value", "All of the above"], // tricky question
    correct: 1
  },
  {
    question: "Which method creates a new HTML element?",
    options: ["createElement()", "appendChild()", "insertBefore()", "addElement()"],
    correct: 0
  },
  {
    question: "Which method removes a child element from the DOM?",
    options: ["removeChild()", "deleteElement()", "removeNode()", "clearChild()"],
    correct: 0
  },
  {
    question: "Which method adds a click event listener to an element?",
    options: ["onClick()", "addEventListener()", "attachEvent()", "setEvent()"],
    correct: 1
  },
  {
    question: "Which method selects all elements that match a CSS selector?",
    options: ["getElementById()", "getElementsByClassName()", "querySelector()", "querySelectorAll()"],
    correct: 3
  },
  {
    question: "Which property can be used to change the inline style of an element?",
    options: ["setAttribute()", "style", "cssText", "changeStyle()"],
    correct: 1
  }
];
