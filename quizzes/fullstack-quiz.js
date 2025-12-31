// FSWD Quiz Questions – JavaScript OOPS & Core Internals
window.fswdQuiz = [
  {
    question: "What does the `new` keyword do internally in JavaScript?",
    options: [
      "Creates a class instance only",
      "Allocates memory, binds `this`, and returns an object",
      "Calls a function without arguments",
      "Copies methods manually"
    ],
    answer: 1
  },
  {
    question: "What does `this` refer to inside a normal object method?",
    options: [
      "The global object always",
      "The function itself",
      "The object that calls the method",
      "The object where the method is written"
    ],
    answer: 2
  },
  {
    question: "Why is inheritance considered tightly coupled?",
    options: [
      "Child class depends heavily on parent implementation",
      "Parent cannot exist without child",
      "Methods are copied instead of shared",
      "Inheritance improves flexibility"
    ],
    answer: 0
  },
  {
    question: "Which relationship best describes composition?",
    options: [
      "IS-A",
      "CAN-DO",
      "HAS-A",
      "EXTENDS-A"
    ],
    answer: 2
  },
  {
    question: "What is the main purpose of mixins in JavaScript?",
    options: [
      "To create multiple inheritance",
      "To share behavior without class inheritance",
      "To store private data",
      "To replace constructors"
    ],
    answer: 1
  },
  {
    question: "Why do mixins rely on property name matching?",
    options: [
      "Because mixins define state",
      "Because JavaScript auto-maps variables",
      "Because mixins operate on `this` dynamically",
      "Because classes enforce contracts"
    ],
    answer: 2
  },
  {
    question: "What is the Global Execution Context (GEC)?",
    options: [
      "Execution context created for every function",
      "The first execution context created when JS runs",
      "A context created only in browsers",
      "A temporary execution environment"
    ],
    answer: 1
  },
  {
    question: "When is a Function Execution Context (FEC) created?",
    options: [
      "When a function is defined",
      "When the program starts",
      "When a function is called",
      "When a function returns"
    ],
    answer: 2
  },
  {
    question: "What happens when a function finishes execution?",
    options: [
      "Its execution context is paused",
      "Its execution context is moved to global",
      "Its execution context is destroyed and popped from stack",
      "Its variables become global"
    ],
    answer: 2
  },
  {
    question: "What does hoisting actually mean?",
    options: [
      "JavaScript moves code to the top",
      "Variables are copied before execution",
      "Memory is allocated before execution starts",
      "Functions are executed first"
    ],
    answer: 2
  },
  {
    question: "Why does `var` return undefined when accessed before declaration?",
    options: [
      "Because it is not hoisted",
      "Because it is hoisted and initialized to undefined",
      "Because it is block scoped",
      "Because of TDZ"
    ],
    answer: 1
  },
  {
    question: "What is the Temporal Dead Zone (TDZ)?",
    options: [
      "Where variables are deleted",
      "Where functions are stored",
      "The time between variable creation and initialization",
      "The scope of `var` variables"
    ],
    answer: 2
  },
  {
    question: "Why does accessing a `let` variable in TDZ throw an error?",
    options: [
      "To stop the program permanently",
      "To improve performance",
      "To fail early and prevent silent bugs",
      "Because memory is not allocated"
    ],
    answer: 2
  },
  {
    question: "Which concept allows a function to remember variables after its outer function has finished?",
    options: [
      "Hoisting",
      "Scope chaining",
      "Closure",
      "Polymorphism"
    ],
    answer: 2
  },
  {
    question: "Why is composition preferred over inheritance in many cases?",
    options: [
      "It creates deeper class hierarchies",
      "It avoids tight coupling and improves flexibility",
      "It enforces abstraction strictly",
      "It removes the need for objects"
    ],
    answer: 1
  },
  {
    question: "What happens if a child class does not implement an abstract-like method in JavaScript?",
    options: [
      "Compile-time error occurs",
      "JavaScript prevents object creation",
      "Runtime error occurs when method is used",
      "Nothing, abstraction is ignored"
    ],
    answer: 2
  },
  {
    question: "Why are JavaScript classes called 'syntax sugar'?",
    options: [
      "Because they change JS behavior",
      "Because they hide prototypes",
      "Because they provide a cleaner syntax over prototypes",
      "Because they are slower"
    ],
    answer: 2
  },
  {
    question: "Which design approach uses dependency injection correctly?",
    options: [
      "Creating dependencies inside constructor",
      "Hardcoding object creation",
      "Passing dependencies from outside",
      "Using global variables"
    ],
    answer: 2
  },
  {
    question: "What is the biggest advantage of dependency injection?",
    options: [
      "Faster execution",
      "Less memory usage",
      "Loose coupling and easier testing",
      "Automatic inheritance"
    ],
    answer: 2
  },
  {
    question: "What happens during call stack overflow?",
    options: [
      "JavaScript stops execution safely",
      "Memory allocation is optimized",
      "Too many execution contexts exceed stack limit",
      "Garbage collector removes functions"
    ],
    answer: 2
  }
];
