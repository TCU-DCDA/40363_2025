# Lab 12 – JavaScript Fundamentals & Programming Logic

> Delivery Mode: In-Class Introduction ➜ Practice Exercises (Hybrid)

Goal: Master JavaScript syntax, data types, and programming fundamentals while building practical skills for web development.

## Learning Outcomes
- Understand JavaScript syntax and basic programming concepts
- Work with variables, data types, and operators effectively
- Implement conditional logic and control structures
- Practice debugging techniques and error handling
- Use browser console for development and testing

## Prerequisites
- Completed personal website with HTML/CSS
- Basic understanding of programming concepts (helpful but not required)
- Familiarity with browser developer tools

## Tasks

### 1. JavaScript Environment Setup
1. **Browser Console Mastery:**
   - Open Developer Tools (F12 or Cmd+Option+I)
   - Navigate to Console tab
   - Practice typing JavaScript commands
   - Understand console output and error messages

2. **Adding JavaScript to HTML:**
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>JavaScript Practice</title>
   </head>
   <body>
       <!-- Your HTML content -->
       
       <!-- JavaScript before closing body tag -->
       <script src="js/script.js"></script>
   </body>
   </html>
   ```

3. **File Organization:**
   ```
   your-project/
   ├── index.html
   ├── css/
   │   └── styles.css
   └── js/
       └── script.js
   ```

### 2. Variables and Data Types
1. **Variable Declaration Best Practices:**
   ```javascript
   // Use const for values that won't change
   const siteName = "My Personal Website";
   const currentYear = 2025;
   
   // Use let for values that will change
   let userScore = 0;
   let isLoggedIn = false;
   
   // Avoid var (legacy syntax)
   // var oldStyle = "avoid this";
   ```

2. **Data Types Exploration:**
   ```javascript
   // Strings
   const firstName = "Alex";
   const lastName = "Johnson";
   const fullName = firstName + " " + lastName;
   const greeting = `Hello, ${firstName}!`; // Template literal
   
   // Numbers
   const age = 25;
   const price = 19.99;
   const calculation = age * 2 + 5;
   
   // Booleans
   const isStudent = true;
   const hasGraduated = false;
   
   // Arrays
   const skills = ["HTML", "CSS", "JavaScript"];
   const numbers = [1, 2, 3, 4, 5];
   
   // Objects
   const person = {
       name: "Alex Johnson",
       age: 25,
       isStudent: true,
       skills: ["HTML", "CSS", "JavaScript"]
   };
   ```

### 3. Operators and Expressions
1. **Arithmetic Operators:**
   ```javascript
   const a = 10;
   const b = 3;
   
   console.log(a + b);  // Addition: 13
   console.log(a - b);  // Subtraction: 7
   console.log(a * b);  // Multiplication: 30
   console.log(a / b);  // Division: 3.333...
   console.log(a % b);  // Modulus (remainder): 1
   console.log(a ** b); // Exponentiation: 1000
   ```

2. **Comparison and Logical Operators:**
   ```javascript
   // Comparison operators
   console.log(5 === 5);    // Strict equality: true
   console.log(5 !== "5");  // Strict inequality: true
   console.log(10 > 5);     // Greater than: true
   console.log(8 <= 10);    // Less than or equal: true
   
   // Logical operators
   const isAdult = age >= 18;
   const canVote = isAdult && isStudent;
   const needsHelp = !isAdult || hasQuestions;
   ```

### 4. Control Structures
1. **Conditional Statements:**
   ```javascript
   const score = 85;
   
   // If-else statements
   if (score >= 90) {
       console.log("Excellent work!");
   } else if (score >= 80) {
       console.log("Good job!");
   } else if (score >= 70) {
       console.log("Keep practicing!");
   } else {
       console.log("Need more study time!");
   }
   
   // Ternary operator (shorthand)
   const grade = score >= 60 ? "Pass" : "Fail";
   ```

2. **Loops:**
   ```javascript
   // For loop
   for (let i = 0; i < 5; i++) {
       console.log(`Count: ${i}`);
   }
   
   // For...of loop (arrays)
   const colors = ["red", "green", "blue"];
   for (const color of colors) {
       console.log(`Color: ${color}`);
   }
   
   // While loop
   let count = 0;
   while (count < 3) {
       console.log(`While count: ${count}`);
       count++;
   }
   ```

### 5. Functions
1. **Function Declaration and Expressions:**
   ```javascript
   // Function declaration
   function greetUser(name) {
       return `Hello, ${name}! Welcome to my website.`;
   }
   
   // Function expression
   const calculateAge = function(birthYear) {
       const currentYear = new Date().getFullYear();
       return currentYear - birthYear;
   };
   
   // Arrow function (modern syntax)
   const double = (number) => number * 2;
   const add = (a, b) => a + b;
   ```

2. **Function Usage and Best Practices:**
   ```javascript
   // Using functions
   const message = greetUser("Alex");
   console.log(message);
   
   const userAge = calculateAge(1998);
   console.log(`You are ${userAge} years old`);
   
   // Functions with multiple parameters
   function createPersonProfile(name, age, skills) {
       return {
           name: name,
           age: age,
           skills: skills,
           bio: `${name} is ${age} years old and knows ${skills.join(", ")}`
       };
   }
   ```

### 6. Practical Exercises
1. **Personal Information Calculator:**
   ```javascript
   // Create variables for personal information
   const birthYear = 2000; // Replace with your birth year
   const currentYear = new Date().getFullYear();
   const age = currentYear - birthYear;
   
   // Create a greeting function
   function createGreeting(name, age) {
       return `Hi! I'm ${name} and I'm ${age} years old.`;
   }
   
   // Display information
   console.log(createGreeting("Your Name", age));
   ```

2. **Skills Assessment Tool:**
   ```javascript
   // Define your skills with experience levels
   const skills = [
       { name: "HTML", level: 8 },
       { name: "CSS", level: 7 },
       { name: "JavaScript", level: 3 }
   ];
   
   // Function to categorize skill level
   function getSkillCategory(level) {
       if (level >= 8) return "Expert";
       if (level >= 6) return "Intermediate";
       if (level >= 3) return "Beginner";
       return "Learning";
   }
   
   // Display skills with categories
   for (const skill of skills) {
       const category = getSkillCategory(skill.level);
       console.log(`${skill.name}: ${category} (${skill.level}/10)`);
   }
   ```

## Practice Exercises

### Exercise 1: Personal Stats Calculator
Create a program that calculates and displays personal statistics:
- [ ] Calculate age from birth year
- [ ] Determine if user can vote (18+)
- [ ] Calculate days until next birthday
- [ ] Display results in console

### Exercise 2: Grade Calculator
Build a simple grade calculator:
- [ ] Create array of assignment scores
- [ ] Calculate average score
- [ ] Determine letter grade
- [ ] Display results with conditional messages

### Exercise 3: Skills Tracker
Create a skills tracking system:
- [ ] Define array of skills with proficiency levels
- [ ] Sort skills by proficiency
- [ ] Count skills in each category
- [ ] Display formatted output

### Exercise 4: Simple Decision Tree
Build a decision-making program:
- [ ] Use multiple conditional statements
- [ ] Handle different user scenarios
- [ ] Provide helpful feedback
- [ ] Test all code paths

## Success Criteria
- [ ] JavaScript file properly linked to HTML
- [ ] All basic data types used correctly
- [ ] Variables declared with appropriate const/let
- [ ] Functions created and called successfully
- [ ] Conditional logic implemented correctly
- [ ] Loops used for repetitive tasks
- [ ] Console.log used for debugging and output
- [ ] Code is well-commented and organized
- [ ] All exercises completed and tested

## Debugging and Testing
1. **Console Debugging:**
   ```javascript
   // Use console.log to check values
   const result = calculateSomething();
   console.log("Result:", result);
   
   // Use console.table for arrays/objects
   console.table(skills);
   
   // Use typeof to check data types
   console.log(typeof myVariable);
   ```

2. **Common Error Prevention:**
   - Check for typos in variable names
   - Ensure proper bracket and parenthesis matching
   - Verify function calls include correct parameters
   - Use browser console to test code snippets

## Code Organization Best Practices
```javascript
// 1. Constants at the top
const SITE_NAME = "My Website";
const CURRENT_YEAR = 2025;

// 2. Variables
let userScore = 0;
let currentPage = "home";

// 3. Functions
function calculateScore(points) {
    // Function logic here
}

// 4. Main program logic
function init() {
    // Initialize your program
}

// 5. Call initialization
init();
```

## Troubleshooting Common Issues
- **Uncaught ReferenceError:** Check variable names and spelling
- **Uncaught TypeError:** Verify you're calling functions correctly
- **Nothing happens:** Check if JavaScript file is linked correctly
- **Unexpected results:** Use console.log to trace variable values

## Next Steps
These JavaScript fundamentals will be essential for adding interactivity to your website. Practice these concepts thoroughly as they form the foundation for DOM manipulation and event handling in upcoming labs.
