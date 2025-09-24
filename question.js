// questions.js

const questions = [
  // Excel (7 Questions)
  {
    question: "Which formula is used to add values in Excel?",
    options: ["=SUM()", "=ADD()", "=TOTAL()", "=COMBINE()"],
    correct: 0
  },
  {
    question: "Which function returns the average of a set of numbers in Excel?",
    options: ["=MEDIAN()", "=MEAN()", "=AVERAGE()", "=MODE()"],
    correct: 2
  },
  {
    question: "Which function is used to find the number of rows in a range?",
    options: ["=ROWS()", "=COLUMNS()", "=COUNT()", "=COUNTA()"],
    correct: 0
  },
  {
    question: "Which Excel feature is best used to quickly summarize and analyze data?",
    options: ["Conditional Formatting", "Charts", "Pivot Tables", "Data Validation"],
    correct: 2
  },
  {
    question: "Which function returns the current date in Excel?",
    options: ["=NOW()", "=DATE()", "=TODAY()", "=TIME()"],
    correct: 2
  },
  {
    question: "Which chart is best to show trends over time in Excel?",
    options: ["Pie Chart", "Column Chart", "Line Chart", "Scatter Plot"],
    correct: 2
  },
  {
    question: "Which function is used for conditional logic in Excel?",
    options: ["=IF()", "=SWITCH()", "=LOGICAL()", "=CASE()"],
    correct: 0
  },

  // Power BI (7 Questions)
  {
    question: "Which view in Power BI is used to create reports and dashboards?",
    options: ["Data View", "Model View", "Report View", "Query Editor"],
    correct: 2
  },
  {
    question: "Which field well in Power BI is used to categorize data in a chart?",
    options: ["Legend", "Values", "Axis", "Tooltips"],
    correct: 0
  },
  {
    question: "Which Power BI chart type is most suitable for showing part-to-whole relationships?",
    options: ["Pie Chart", "Line Chart", "Bar Chart", "Scatter Chart"],
    correct: 0
  },
  {
    question: "What does DAX stand for in Power BI?",
    options: ["Data Analysis Expressions", "Data Analytics Extension", "Data Aggregation Syntax", "Dynamic Analysis Execution"],
    correct: 0
  },
  {
    question: "Which feature in Power BI allows drilling into hierarchical data?",
    options: ["Drill Through", "Drill Up/Down", "Expand/Collapse", "All of the above"],
    correct: 3
  },
  {
    question: "Which filter type applies only to a single visual in Power BI?",
    options: ["Report Filter", "Page Filter", "Visual Filter", "Slicer"],
    correct: 2
  },
  {
    question: "Which connector is used in Power BI to load data from Excel?",
    options: ["Excel Workbook", "CSV File", "Text File", "ODBC"],
    correct: 0
  },

  // Power Query (6 Questions)
  {
    question: "Which language does Power Query use?",
    options: ["SQL", "M Language", "DAX", "R"],
    correct: 1
  },
  {
    question: "Which step in Power Query removes duplicate rows?",
    options: ["Remove Rows", "Keep Rows", "Remove Duplicates", "Filter Rows"],
    correct: 2
  },
  {
    question: "Which Power Query option is used to merge two tables?",
    options: ["Append Queries", "Merge Queries", "Combine Tables", "Join Queries"],
    correct: 1
  },
  {
    question: "Which step in Power Query is applied first?",
    options: ["Filter Rows", "Changed Type", "Source", "Navigation"],
    correct: 2
  },
  {
    question: "Which operation stacks data from two or more queries?",
    options: ["Merge Queries", "Append Queries", "Join Queries", "Expand Queries"],
    correct: 1
  },
  {
    question: "What does 'Applied Steps' pane in Power Query show?",
    options: ["All queries in the report", "All transformations applied on data", "All relationships in model", "All filters applied"],
    correct: 1
  }
];
