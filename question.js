// questions.js

const questions = [
  // Descriptive Statistics (7 Questions)
  {
    question: "Which measure represents the central value of a dataset?",
    options: ["Mean", "Median", "Mode", "Range"],
    correct: 0
  },
  {
    question: "Which measure represents the middle value when data is ordered?",
    options: ["Mean", "Median", "Mode", "Variance"],
    correct: 1
  },
  {
    question: "Which measure shows the value that occurs most frequently in a dataset?",
    options: ["Mean", "Median", "Mode", "Standard Deviation"],
    correct: 2
  },
  {
    question: "Which statistic helps measure the spread of a dataset?",
    options: ["Range", "Variance", "Standard Deviation", "All of the above"],
    correct: 3
  },
  {
    question: "The difference between the largest and smallest value in a dataset is called?",
    options: ["Variance", "Range", "Interquartile Range", "Standard Deviation"],
    correct: 1
  },
  {
    question: "Which plot is best for showing frequency distribution of continuous data?",
    options: ["Histogram", "Pie Chart", "Scatter Plot", "Line Chart"],
    correct: 0
  },
  {
    question: "A box plot shows which of the following?",
    options: ["Median, Quartiles, Outliers", "Mean and Variance only", "Correlation", "Frequency Table"],
    correct: 0
  },

  // Probability & Distributions (7 Questions)
  {
    question: "What is the probability of an impossible event?",
    options: ["0", "0.5", "1", "-1"],
    correct: 0
  },
  {
    question: "The sum of probabilities of all possible outcomes of a random experiment is?",
    options: ["0", "0.5", "1", "Cannot determine"],
    correct: 2
  },
  {
    question: "Which distribution is used to model the number of successes in a fixed number of independent trials?",
    options: ["Normal", "Binomial", "Poisson", "Uniform"],
    correct: 1
  },
  {
    question: "Which distribution models the number of events in a fixed interval of time or space?",
    options: ["Normal", "Binomial", "Poisson", "Exponential"],
    correct: 2
  },
  {
    question: "The area under the standard normal curve represents what?",
    options: ["Probability", "Variance", "Standard Deviation", "Z-score"],
    correct: 0
  },
  {
    question: "Which type of probability is based on long-run relative frequency?",
    options: ["Classical", "Empirical", "Subjective", "Conditional"],
    correct: 1
  },
  {
    question: "A Z-score tells us what?",
    options: ["The position of a value relative to the mean", "Probability of occurrence", "The total count", "Variance of dataset"],
    correct: 0
  },

  // Inferential Statistics (6 Questions)
  {
    question: "Which test is used to compare means of two independent groups?",
    options: ["Chi-Square Test", "t-Test", "ANOVA", "Correlation Test"],
    correct: 1
  },
  {
    question: "Which test is used to check the association between two categorical variables?",
    options: ["Chi-Square Test", "t-Test", "ANOVA", "Regression"],
    correct: 0
  },
  {
    question: "In hypothesis testing, a Type I error occurs when?",
    options: [
      "We reject a true null hypothesis",
      "We fail to reject a false null hypothesis",
      "We accept the alternative hypothesis",
      "We calculate p-value incorrectly"
    ],
    correct: 0
  },
  {
    question: "In hypothesis testing, a p-value less than 0.05 usually means?",
    options: ["Accept null hypothesis", "Reject null hypothesis", "Data is invalid", "Increase sample size"],
    correct: 1
  },
  {
    question: "ANOVA is used to compare means of how many groups?",
    options: ["Two", "Three or more", "Only one", "Any number of groups with paired data"],
    correct: 1
  },
  {
    question: "Correlation coefficient ranges between?",
    options: ["0 to 1", "-1 to 1", "-∞ to ∞", "1 to 100"],
    correct: 1
  },

  // Scenario-based Questions (2 Questions)
  {
    question: "You have exam scores of 50 students and want to check if the average score is different from 70. Which statistical method should you use?",
    options: [
      "t-Test for one sample",
      "Chi-Square Test",
      "ANOVA",
      "Correlation Analysis"
    ],
    correct: 0
  },
  {
    question: "You want to see if study hours are related to test scores. Which statistical method is most appropriate?",
    options: [
      "Chi-Square Test",
      "Correlation Analysis",
      "t-Test",
      "Z-Test"
    ],
    correct: 1
  }
];
