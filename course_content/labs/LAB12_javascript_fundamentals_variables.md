# Lab 12 – JavaScript Fundamentals & Variables

> Delivery Mode: In-Class Demo ➜ Hands-On Practice ➜ Mini Project (Hybrid)

Goal: Introduction to JavaScript programming fundamentals. Learn variables, data types, and basic console interaction while building on your existing HTML/CSS knowledge from Labs 1-11.

## Learning Outcomes
- Understand what JavaScript is and how it relates to HTML/CSS
- Create and use variables with proper naming conventions
- Work with different data types (strings, numbers, booleans)
- Use the browser console for testing and debugging
- Connect JavaScript to HTML pages and see immediate results
- Build confidence with basic programming concepts

## Prerequisites
- Completed LAB11 (Typography & Design Polish)
- Solid understanding of HTML structure and CSS styling
- Deployed portfolio website (from Project 1)
- Familiarity with VS Code and browser developer tools

## 🚀 Getting Started: Your First JavaScript

### What is JavaScript?
**JavaScript is the programming language of the web** that makes websites interactive and dynamic.

**Think of it like this:**
- **HTML** = The structure (like the frame of a house)
- **CSS** = The styling (like paint, furniture, decoration)
- **JavaScript** = The functionality (like electricity, plumbing, smart features)

### Where JavaScript Lives
JavaScript can be added to your HTML in three ways:

#### **1. Inline JavaScript (avoid this)**
```html
<!-- Don't do this - hard to maintain -->
<button onclick="alert('Hello!')">Click me</button>
```

#### **2. Internal JavaScript (okay for learning)**
```html
<!DOCTYPE html>
<html>
<head>
    <title>My JavaScript Page</title>
</head>
<body>
    <h1>Learning JavaScript</h1>

    <!-- JavaScript goes before closing body tag -->
    <script>
        console.log('Hello from JavaScript!');
    </script>
</body>
</html>
```

#### **3. External JavaScript (best practice)**
```html
<!DOCTYPE html>
<html>
<head>
    <title>My JavaScript Page</title>
</head>
<body>
    <h1>Learning JavaScript</h1>

    <!-- Link to external JavaScript file -->
    <script src="script.js"></script>
</body>
</html>
```

### Your First JavaScript Console Commands

**Open your browser console:** F12 (Windows) or Cmd+Opt+I (Mac), then click "Console" tab

**Try these commands one by one:**
```javascript
// Type each line and press Enter
console.log('Hello, JavaScript!');
console.log('My name is [Your Name]');
console.log(2 + 3);
console.log('I am learning JavaScript');
```

## 📝 Understanding Variables

### What are Variables?
**Variables are containers that store data values.** Think of them like labeled boxes where you can put different things.

### Creating Variables in JavaScript

#### **Method 1: Using `let` (recommended)**
```javascript
let studentName = 'Alex';
let age = 20;
let isEnrolled = true;

console.log(studentName); // Outputs: Alex
console.log(age);         // Outputs: 20
console.log(isEnrolled);  // Outputs: true
```

#### **Method 2: Using `const` (for values that won't change)**
```javascript
const schoolName = 'University of Example';
const maxStudents = 30;
const courseName = 'Web Development';

console.log(schoolName); // Outputs: University of Example
```

#### **Method 3: Using `var` (older method, avoid)**
```javascript
var oldWay = 'Avoid using var';
// Use let or const instead
```

### Variable Naming Rules

#### **✅ Good Variable Names:**
```javascript
let firstName = 'Sarah';
let lastName = 'Johnson';
let studentAge = 19;
let isGraduated = false;
let courseTitle = 'Introduction to JavaScript';
```

#### **❌ Bad Variable Names:**
```javascript
let n = 'Sarah';           // Too short, unclear
let student_first_name;    // Use camelCase instead
let 2ndStudent;            // Can't start with number
let first-name;            // Hyphens not allowed
let let = 'reserved';      // Can't use JavaScript keywords
```

#### **✨ JavaScript Naming Convention: camelCase**
- First word lowercase, capitalize first letter of subsequent words
- `firstName`, `lastName`, `studentAge`, `isEnrolled`

## 🎯 JavaScript Data Types

### 1. Strings (Text)
```javascript
let message = 'Hello, world!';
let name = "JavaScript";
let description = `This is a template literal`;

// String methods you can try
console.log(message.length);        // Length of string
console.log(message.toUpperCase()); // Convert to uppercase
console.log(name.toLowerCase());    // Convert to lowercase
```

### 2. Numbers
```javascript
let score = 95;
let price = 19.99;
let negativeNumber = -42;

// Math operations
console.log(10 + 5);    // Addition: 15
console.log(10 - 3);    // Subtraction: 7
console.log(4 * 5);     // Multiplication: 20
console.log(15 / 3);    // Division: 5
console.log(17 % 5);    // Remainder: 2
```

### 3. Booleans (True/False)
```javascript
let isStudent = true;
let hasGraduated = false;
let isOnline = true;

console.log(isStudent);     // true
console.log(hasGraduated);  // false
```

### 4. Checking Data Types
```javascript
let name = 'Alice';
let age = 22;
let isActive = true;

console.log(typeof name);     // "string"
console.log(typeof age);      // "number"
console.log(typeof isActive); // "boolean"
```

## 🔧 Hands-On Exercises

### Exercise 1: Personal Information Variables
Create variables for your personal information and display them:

```javascript
// Create these variables with your information
let myName = 'Your Name Here';
let myAge = 20;
let myMajor = 'Computer Science';
let isCurrentStudent = true;
let favoriteColor = 'blue';

// Display your information
console.log('Name:', myName);
console.log('Age:', myAge);
console.log('Major:', myMajor);
console.log('Current Student:', isCurrentStudent);
console.log('Favorite Color:', favoriteColor);
```

### Exercise 2: Simple Calculator
Practice with numbers and mathematical operations:

```javascript
// Create number variables
let num1 = 25;
let num2 = 7;

// Perform calculations
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

// Display results
console.log(num1 + ' + ' + num2 + ' = ' + sum);
console.log(num1 + ' - ' + num2 + ' = ' + difference);
console.log(num1 + ' × ' + num2 + ' = ' + product);
console.log(num1 + ' ÷ ' + num2 + ' = ' + quotient);
```

### Exercise 3: String Manipulation
Practice working with text:

```javascript
let firstName = 'Alex';
let lastName = 'Smith';
let fullName = firstName + ' ' + lastName;
let greeting = 'Hello, ' + fullName + '!';

console.log('First Name:', firstName);
console.log('Last Name:', lastName);
console.log('Full Name:', fullName);
console.log('Greeting:', greeting);
console.log('Name Length:', fullName.length);
console.log('Uppercase:', fullName.toUpperCase());
```

## 💻 Mini Project: Personal Dashboard

Create a simple HTML page with embedded JavaScript that displays your personal information:

### 1. Create HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My JavaScript Dashboard</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .dashboard {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .info-section {
            margin: 20px 0;
            padding: 15px;
            background: #f8f9fa;
            border-left: 4px solid #007bff;
        }
    </style>
</head>
<body>
    <div class="dashboard">
        <h1>My JavaScript Dashboard</h1>
        <div id="personal-info" class="info-section">
            <h2>Personal Information</h2>
            <!-- JavaScript will add content here -->
        </div>
        <div id="calculations" class="info-section">
            <h2>Math Calculations</h2>
            <!-- JavaScript will add content here -->
        </div>
        <div id="text-info" class="info-section">
            <h2>Text Information</h2>
            <!-- JavaScript will add content here -->
        </div>
    </div>

    <script>
        // Your JavaScript code goes here
    </script>
</body>
</html>
```

### 2. Add JavaScript Variables and Console Output
```javascript
<script>
// Personal Information Variables
let studentName = 'Your Name';
let studentAge = 20;
let currentYear = 2024;
let birthYear = currentYear - studentAge;
let major = 'Computer Science';
let isEnrolled = true;
let gpa = 3.7;

// Display personal information in console
console.log('=== Personal Information ===');
console.log('Name:', studentName);
console.log('Age:', studentAge);
console.log('Birth Year:', birthYear);
console.log('Major:', major);
console.log('Enrolled:', isEnrolled);
console.log('GPA:', gpa);

// Math calculations
let mathScore1 = 87;
let mathScore2 = 92;
let mathScore3 = 78;
let averageScore = (mathScore1 + mathScore2 + mathScore3) / 3;

console.log('=== Grade Calculations ===');
console.log('Test 1:', mathScore1);
console.log('Test 2:', mathScore2);
console.log('Test 3:', mathScore3);
console.log('Average:', averageScore.toFixed(2));

// String operations
let university = 'University of Example';
let fullStudentInfo = studentName + ' - ' + major + ' major at ' + university;
let welcomeMessage = 'Welcome, ' + studentName + '! You are ' + studentAge + ' years old.';

console.log('=== Text Information ===');
console.log('University:', university);
console.log('Full Info:', fullStudentInfo);
console.log('Welcome Message:', welcomeMessage);
console.log('Message Length:', welcomeMessage.length);

// Data type information
console.log('=== Data Types ===');
console.log('Type of studentName:', typeof studentName);
console.log('Type of studentAge:', typeof studentAge);
console.log('Type of isEnrolled:', typeof isEnrolled);
console.log('Type of gpa:', typeof gpa);
</script>
```

## 🔍 Testing Your Code

### Using Browser Console
1. **Open your HTML file** in a web browser
2. **Open Developer Tools** (F12 or Cmd+Opt+I)
3. **Click the Console tab**
4. **Look for your output** - you should see all your console.log statements
5. **Experiment** - type variable names to see their values

### Common Console Commands to Try
```javascript
// After your code runs, try these in the console:
studentName                    // See the value
typeof studentName            // Check the data type
studentAge + 5               // Math with variables
studentName.toUpperCase()    // String methods
averageScore.toFixed(1)      // Round to 1 decimal place
```

## 🐛 Common Beginner Mistakes

### 1. Forgetting Semicolons
```javascript
// Good practice (though not always required)
let name = 'Alice';
let age = 20;
```

### 2. Mixing Up Variable Declaration
```javascript
// ❌ Wrong - forgot 'let'
name = 'Alice';     // Creates global variable

// ✅ Correct
let name = 'Alice';
```

### 3. Case Sensitivity
```javascript
let studentName = 'Alice';
console.log(studentname);  // ❌ Error - wrong case
console.log(studentName);  // ✅ Correct
```

### 4. Confusing Strings and Numbers
```javascript
let num1 = '5';      // This is a string
let num2 = 3;        // This is a number
console.log(num1 + num2);  // Outputs: "53" (concatenation)

// To fix - convert string to number:
console.log(Number(num1) + num2);  // Outputs: 8 (addition)
```

## ✅ Success Criteria

By the end of this lab, you should be able to:

### **Knowledge Checks:**
- [ ] Explain what JavaScript is and how it relates to HTML/CSS
- [ ] Create variables using `let` and `const`
- [ ] Use proper camelCase naming conventions
- [ ] Work with strings, numbers, and booleans
- [ ] Use basic mathematical operations
- [ ] Display information using `console.log()`

### **Practical Skills:**
- [ ] Add JavaScript to an HTML page
- [ ] Use browser developer tools and console
- [ ] Create and modify variables
- [ ] Combine strings with concatenation
- [ ] Perform basic calculations
- [ ] Debug simple JavaScript errors

### **Mini Project Completion:**
- [ ] Created HTML page with embedded JavaScript
- [ ] Used at least 8 different variables
- [ ] Demonstrated string, number, and boolean data types
- [ ] Performed mathematical calculations
- [ ] Used string methods and concatenation
- [ ] Successfully viewed output in browser console

## 🔧 Troubleshooting Guide

### **JavaScript Not Running?**
1. **Check browser console** for error messages
2. **Verify script tag placement** - should be before `</body>`
3. **Check for typos** in variable names and syntax
4. **Ensure HTML file opens** in browser correctly

### **Console.log Not Showing?**
1. **Open Developer Tools** (F12)
2. **Click Console tab**
3. **Refresh the page** to run JavaScript again
4. **Check for JavaScript errors** (red text in console)

### **Variables Undefined?**
1. **Check spelling** and capitalization
2. **Ensure variable declared** with `let` or `const`
3. **Check scope** - variables only exist where declared

## 📚 Looking Ahead

**Next Lab (LAB13):** We'll learn about functions and how to make our JavaScript interactive by connecting it to HTML elements. You'll start making buttons that actually do things!

**Connection to Project 2:** The variables and data types you learned today are the foundation for storing and managing your favorite places data.

## 🎉 Congratulations!

You've taken your first steps into JavaScript programming! You now understand:
- How to create and use variables
- Different data types and their purposes
- Basic mathematical and string operations
- How to test and debug using the browser console

These fundamentals will serve as the building blocks for everything we do in Project 2 and beyond.