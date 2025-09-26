// questions.js

const questions = [
  // Excel (7 Questions)
  {
    question: "Which Excel function is used to look up a value in a table vertically?",
    options: ["=HLOOKUP()", "=VLOOKUP()", "=INDEX()", "=MATCH()"],
    correct: 1
  },
  {
    question: "Which function returns the largest value in a range of cells?",
    options: ["=MAX()", "=MIN()", "=LARGE()", "=SUM()"],
    correct: 0
  },
  {
    question: "Which Excel feature allows you to automatically format cells based on conditions?",
    options: ["Data Validation", "Conditional Formatting", "Pivot Table", "Filter"],
    correct: 1
  },
  {
    question: "Which function counts only numeric values in a range?",
    options: ["=COUNT()", "=COUNTA()", "=COUNTIF()", "=COUNTBLANK()"],
    correct: 0
  },
  {
    question: "Which type of chart is best for comparing categories in Excel?",
    options: ["Line Chart", "Column Chart", "Pie Chart", "Scatter Plot"],
    correct: 1
  },
  {
    question: "Which Excel function extracts a substring from a text string?",
    options: ["=LEFT()", "=RIGHT()", "=MID()", "=TEXT()"],
    correct: 2
  },
  {
    question: "Which Excel function returns a value based on multiple conditions?",
    options: ["=IF()", "=IFS()", "=SWITCH()", "=CHOOSE()"],
    correct: 1
  },

  // Power BI (7 Questions)
  {
    question: "Which Power BI visual is best for showing trends over time?",
    options: ["Bar Chart", "Line Chart", "Pie Chart", "Scatter Chart"],
    correct: 1
  },
  {
    question: "Which Power BI component allows combining multiple data sources?",
    options: ["Power Query", "Data Model", "Visualizations", "Dashboard"],
    correct: 0
  },
  {
    question: "Which DAX function calculates the running total of a column?",
    options: ["TOTALYTD()", "SUMX()", "CALCULATE()", "RANKX()"],
    correct: 0
  },
  {
    question: "Which type of relationship connects tables in Power BI based on a single column?",
    options: ["Many-to-Many", "One-to-One", "One-to-Many", "Unrelated"],
    correct: 2
  },
  {
    question: "Which Power BI filter affects all pages in a report?",
    options: ["Report Filter", "Page Filter", "Visual Filter", "Slicer"],
    correct: 0
  },
  {
    question: "Which visual in Power BI is most suitable for showing part-to-whole relationships?",
    options: ["Pie Chart", "Line Chart", "Matrix", "Scatter Chart"],
    correct: 0
  },
  {
    question: "Which Power BI feature allows creating custom columns using formulas?",
    options: ["Power Query", "DAX", "M Language", "Visualizations"],
    correct: 1
  },

  // Power Query (6 Questions)
  {
    question: "Which Power Query feature is used to change data types?",
    options: ["Transform Column", "Change Type", "Format Column", "Convert Data"],
    correct: 1
  },
  {
    question: "Which Power Query operation combines two tables by stacking them?",
    options: ["Merge Queries", "Append Queries", "Join Queries", "Union Tables"],
    correct: 1
  },
  {
    question: "Which step in Power Query specifies the original data source?",
    options: ["Source", "Navigation", "Changed Type", "Applied Steps"],
    correct: 0
  },
  {
    question: "Which Power Query function removes all rows that contain errors?",
    options: ["Remove Duplicates", "Remove Errors", "Filter Rows", "Clean Data"],
    correct: 1
  },
  {
    question: "Which language does Power Query use to transform data?",
    options: ["DAX", "M Language", "SQL", "R"],
    correct: 1
  },
  {
    question: "What does the 'Applied Steps' pane in Power Query show?",
    options: ["All transformations applied on data", "All visuals in report", "All data sources", "All relationships in model"],
    correct: 0
  },

  // Statistics / Data Analytics (6 Questions)
  {
    question: "Which measure represents the middle value in a dataset?",
    options: ["Mean", "Median", "Mode", "Range"],
    correct: 1
  },
  {
    question: "Which measure shows the most frequently occurring value in a dataset?",
    options: ["Mean", "Median", "Mode", "Standard Deviation"],
    correct: 2
  },
  {
    question: "Which statistical measure shows how spread out the data is?",
    options: ["Mean", "Median", "Variance", "Mode"],
    correct: 2
  },
  {
    question: "Which plot is used to display frequency distribution of a dataset?",
    options: ["Histogram", "Scatter Plot", "Box Plot", "Line Chart"],
    correct: 0
  },
  {
    question: "Which correlation coefficient value indicates a strong positive relationship?",
    options: ["-0.9", "0", "0.8", "-0.5"],
    correct: 2
  },
  {
    question: "In A/B testing, which metric is used to measure the difference between two groups?",
    options: ["p-value", "Mean", "Standard Deviation", "Variance"],
    correct: 0
  }
];
