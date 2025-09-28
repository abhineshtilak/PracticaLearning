// questions.js

const questions = [
  // Excel / Data Manipulation (7 Questions)
  {
    question: "You have two text columns in Excel, First Name and Last Name. Which function would you use to combine them into a full name?",
    options: ["=MERGE()", "=CONCAT()", "=TEXTJOIN()", "=COMBINE()"],
    correct: 1
  },
  {
    question: "Which Excel feature quickly removes duplicate entries from a dataset?",
    options: ["Filter", "Data Validation", "Remove Duplicates", "Conditional Formatting"],
    correct: 2
  },
  {
    question: "You want to find the average sales for the month from a list of daily sales. Which function should you use?",
    options: ["=SUM()", "=AVERAGE()", "=MEDIAN()", "=COUNT()"],
    correct: 1
  },
  {
    question: "Which Excel feature shows a tiny chart inside a cell to quickly visualize trends?",
    options: ["Conditional Formatting", "Sparklines", "Pivot Tables", "Data Validation"],
    correct: 1
  },
  {
    question: "You need to find the position of a particular item in a list. Which Excel function is best?",
    options: ["=LOOKUP()", "=FIND()", "=MATCH()", "=INDEX()"],
    correct: 2
  },
  {
    question: "Which chart type is best for showing the distribution of test scores in a class?",
    options: ["Pie Chart", "Histogram", "Line Chart", "Scatter Plot"],
    correct: 1
  },
  {
    question: "You want to assign a label 'Pass' or 'Fail' to students based on their marks. Which function will help?",
    options: ["=SWITCH()", "=LOOKUP()", "=IF()", "=CHOOSE()"],
    correct: 2
  },

  // Power BI / Visualization (7 Questions)
  {
    question: "Your manager wants to see sales trends over the last 12 months. Which visual should you use in Power BI?",
    options: ["Column Chart", "Line Chart", "Pie Chart", "Tree Map"],
    correct: 1
  },
  {
    question: "You have sales data in multiple tables from different regions. Which feature allows combining them?",
    options: ["Data Model", "Power Query", "Dashboard", "Relationships"],
    correct: 1
  },
  {
    question: "Which DAX function calculates the cumulative total of sales?",
    options: ["SUM()", "RANKX()", "CALCULATE()", "TOTALYTD()"],
    correct: 3
  },
  {
    question: "A customer table is linked to an orders table such that each customer can have multiple orders. What type of relationship is this?",
    options: ["One-to-One", "Many-to-Many", "One-to-Many", "Unrelated"],
    correct: 2
  },
  {
    question: "Which filter in Power BI affects all report pages, not just one page?",
    options: ["Slicer", "Page Filter", "Report Filter", "Visual Filter"],
    correct: 2
  },
  {
    question: "You want to show the proportion of sales per product category. Which visual is best?",
    options: ["Stacked Column Chart", "Pie Chart", "Line Chart", "Scatter Chart"],
    correct: 1
  },
  {
    question: "Which feature lets you create custom calculations in Power BI using formulas?",
    options: ["Power Query", "Visualizations", "DAX", "M Language"],
    correct: 2
  },

  // Power Query / Data Transformation (6 Questions)
  {
    question: "Which step in Power Query specifies the original source of your data?",
    options: ["Changed Type", "Source", "Navigation", "Applied Steps"],
    correct: 1
  },
  {
    question: "You have two tables with the same structure and want to stack one on top of the other. Which operation should you use?",
    options: ["Merge Queries", "Append Queries", "Join Queries", "Union Tables"],
    correct: 1
  },
  {
    question: "Some rows have errors and you want to remove them. Which Power Query function should you use?",
    options: ["Filter Rows", "Remove Errors", "Remove Duplicates", "Clean Data"],
    correct: 1
  },
  {
    question: "Which language is used to perform transformations in Power Query?",
    options: ["DAX", "SQL", "M Language", "Python"],
    correct: 2
  },
  {
    question: "You want to track all transformations applied to your dataset in Power Query. Which pane shows this?",
    options: ["Applied Steps", "Data Preview", "Query Editor", "Data Model"],
    correct: 0
  },
  {
    question: "Which operation changes the type of data in a column in Power Query?",
    options: ["Convert Data", "Transform Column", "Change Type", "Format Column"],
    correct: 2
  },

  // Statistics / Data Analytics (6 Questions)
  {
    question: "Which measure represents the middle value in a dataset?",
    options: ["Median", "Mean", "Mode", "Range"],
    correct: 0
  },
  {
    question: "Which statistic shows the value that occurs most frequently?",
    options: ["Mean", "Median", "Mode", "Variance"],
    correct: 2
  },
  {
    question: "Which measure helps you understand how spread out data is?",
    options: ["Range", "Variance", "Standard Deviation", "All of the above"],
    correct: 3
  },
  {
    question: "You want to see the frequency distribution of exam scores. Which plot is most suitable?",
    options: ["Box Plot", "Scatter Plot", "Histogram", "Line Chart"],
    correct: 2
  },
  {
    question: "A correlation coefficient of 0.82 indicates what type of relationship?",
    options: ["Strong Positive", "Strong Negative", "Weak Positive", "No Relationship"],
    correct: 0
  },
  {
    question: "You run an A/B test to check which website layout converts better. Which metric tells you if the difference is statistically significant?",
    options: ["p-value", "Mean", "Variance", "Median"],
    correct: 0
  },

  // Scenario-based Questions (2 Questions)
  {
    question: "You have a dataset with sales and customer information. You need to calculate total sales per region and visualize it. What steps should you take in Power BI?",
    options: [
      "Use Power Query to merge tables, create a DAX measure for total sales, and use a Column Chart",
      "Create a Pivot Table in Excel and use a Line Chart in Power BI",
      "Use DAX to calculate median sales and plot a Pie Chart",
      "Filter the dataset by region and use a Scatter Chart"
    ],
    correct: 0
  },
  {
    question: "A dataset contains errors in some rows, and you need a clean dataset for analysis. Which is the most efficient approach?",
    options: [
      "Manually delete rows in Excel",
      "Use Power Query to remove errors and apply necessary transformations",
      "Ignore errors and proceed with analysis",
      "Use a Pivot Table to hide errors"
    ],
    correct: 1
  }
];
