# Lab 13 – Functions & DOM Manipulation

> Delivery Mode: In-Class Demo ➜ Guided Practice ➜ Interactive Project (Hybrid)

Goal: Learn to create JavaScript functions and connect them to HTML elements. Make your websites interactive by responding to user actions like clicks and form inputs.

## Learning Outcomes
- Create and call JavaScript functions with parameters
- Connect JavaScript to HTML elements using DOM selection
- Handle user interactions with event listeners
- Modify HTML content and styling with JavaScript
- Build interactive elements that respond to user actions
- Understand the relationship between HTML structure and JavaScript functionality

## Prerequisites
- Completed LAB12 (JavaScript Fundamentals & Variables)
- Understanding of HTML structure and CSS styling
- Basic knowledge of JavaScript variables and data types
- Familiarity with browser developer tools and console

## 🎯 Understanding Functions

### What are Functions?
**Functions are reusable blocks of code that perform specific tasks.** Think of them as recipes - you write the instructions once, then follow the recipe anytime you need it.

### Why Use Functions?
- **Avoid repetition** - write code once, use it many times
- **Organize code** - keep related code grouped together
- **Make debugging easier** - fix problems in one place
- **Create modular programs** - build complex functionality from simple parts

### Function Syntax

#### **Basic Function Declaration**
```javascript
function functionName() {
    // Code to execute goes here
    console.log('This function was called!');
}

// Call the function
functionName();
```

#### **Function with Parameters**
```javascript
function greetStudent(name, course) {
    console.log('Hello, ' + name + '! Welcome to ' + course + '.');
}

// Call with arguments
greetStudent('Alice', 'Web Development');
greetStudent('Bob', 'JavaScript Fundamentals');
```

#### **Function with Return Value**
```javascript
function calculateAverage(score1, score2, score3) {
    let average = (score1 + score2 + score3) / 3;
    return average;
}

// Use the returned value
let myAverage = calculateAverage(85, 92, 78);
console.log('Your average is:', myAverage);
```

## 🌐 Understanding the DOM

### What is the DOM?
**DOM (Document Object Model)** is how JavaScript sees and interacts with your HTML page. Think of it as a map that JavaScript uses to find and modify HTML elements.

### Selecting HTML Elements

#### **HTML to Work With:**
```html
<h1 id="main-title">Welcome to JavaScript</h1>
<p class="intro">This is an introduction paragraph.</p>
<button id="click-me">Click Me!</button>
<div class="content">
    <p>Content paragraph 1</p>
    <p>Content paragraph 2</p>
</div>
```

#### **JavaScript Selection Methods:**

**1. Select by ID (most common)**
```javascript
let title = document.getElementById('main-title');
let button = document.getElementById('click-me');
console.log(title);  // Shows the h1 element
```

**2. Select by Class**
```javascript
let intro = document.querySelector('.intro');
let allContent = document.querySelectorAll('.content p');
console.log(intro);      // First element with class 'intro'
console.log(allContent); // All paragraphs inside .content
```

**3. Select by Tag Name**
```javascript
let allParagraphs = document.querySelectorAll('p');
let firstButton = document.querySelector('button');
```

### Modifying HTML Content

#### **Change Text Content**
```javascript
let title = document.getElementById('main-title');
title.textContent = 'JavaScript is Amazing!';

let intro = document.querySelector('.intro');
intro.textContent = 'Now this paragraph says something different!';
```

#### **Change HTML Content**
```javascript
let content = document.querySelector('.content');
content.innerHTML = '<p><strong>This is bold text!</strong></p>';
```

#### **Modify CSS Styles**
```javascript
let title = document.getElementById('main-title');
title.style.color = 'blue';
title.style.fontSize = '2em';
title.style.textAlign = 'center';

let button = document.getElementById('click-me');
button.style.backgroundColor = 'green';
button.style.color = 'white';
button.style.padding = '10px 20px';
```

## 🖱️ Adding Interactivity with Event Listeners

### What are Events?
**Events** are things that happen on your webpage - clicks, key presses, mouse movements, form submissions, etc.

### Common Event Types
- `click` - user clicks an element
- `mouseover` - mouse moves over an element
- `keydown` - user presses a key
- `submit` - form is submitted
- `load` - page finishes loading

### Adding Event Listeners

#### **Basic Click Handler**
```javascript
let button = document.getElementById('click-me');

button.addEventListener('click', function() {
    console.log('Button was clicked!');
    alert('You clicked the button!');
});
```

#### **Function-Based Event Handler**
```javascript
function handleButtonClick() {
    console.log('Function was called by click!');
    let title = document.getElementById('main-title');
    title.textContent = 'You clicked the button!';
    title.style.color = 'red';
}

let button = document.getElementById('click-me');
button.addEventListener('click', handleButtonClick);
```

#### **Event Handler with Parameters**
```javascript
function changeTitle(newText, newColor) {
    let title = document.getElementById('main-title');
    title.textContent = newText;
    title.style.color = newColor;
}

let button = document.getElementById('click-me');
button.addEventListener('click', function() {
    changeTitle('Button was clicked!', 'purple');
});
```

## 🔧 Hands-On Exercises

### Exercise 1: Basic Functions Practice
Create functions for common calculations:

```javascript
// Function to calculate tip
function calculateTip(billAmount, tipPercent) {
    let tip = billAmount * (tipPercent / 100);
    return tip;
}

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Function to create greeting message
function createGreeting(name, timeOfDay) {
    return 'Good ' + timeOfDay + ', ' + name + '!';
}

// Test your functions
console.log('Tip on $50 at 18%:', calculateTip(50, 18));
console.log('25°C in Fahrenheit:', celsiusToFahrenheit(25));
console.log(createGreeting('Alice', 'morning'));
```

### Exercise 2: DOM Selection Practice
Create an HTML page and select different elements:

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Practice</title>
</head>
<body>
    <h1 id="page-title">DOM Practice Page</h1>
    <p class="description">Learning to select elements</p>
    <button id="btn-1">Button 1</button>
    <button id="btn-2">Button 2</button>
    <div class="info-box">
        <p>Information paragraph</p>
        <span id="status">Ready</span>
    </div>

    <script>
        // Select elements and log them
        console.log('Title:', document.getElementById('page-title'));
        console.log('Description:', document.querySelector('.description'));
        console.log('First Button:', document.getElementById('btn-1'));
        console.log('All Buttons:', document.querySelectorAll('button'));
        console.log('Status:', document.getElementById('status'));
    </script>
</body>
</html>
```

### Exercise 3: Content Modification
Practice changing content and styles:

```javascript
// Change text content
let title = document.getElementById('page-title');
title.textContent = 'Modified by JavaScript!';

// Change styles
title.style.color = 'blue';
title.style.textAlign = 'center';
title.style.fontSize = '2.5em';

// Modify description
let description = document.querySelector('.description');
description.textContent = 'This text was changed by JavaScript';
description.style.backgroundColor = 'lightblue';
description.style.padding = '10px';

// Update status
let status = document.getElementById('status');
status.textContent = 'Updated by JS';
status.style.color = 'green';
status.style.fontWeight = 'bold';
```

## 💻 Interactive Project: Personal Information Display

Create an interactive webpage that demonstrates functions and DOM manipulation:

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Personal Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .section {
            margin: 20px 0;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 5px;
        }
        button {
            background: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            margin: 5px;
        }
        button:hover {
            background: #0056b3;
        }
        .highlight {
            background-color: yellow;
            padding: 5px;
        }
        .info-display {
            border: 2px solid #ddd;
            padding: 15px;
            margin: 10px 0;
            background: white;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 id="main-title">Interactive Personal Page</h1>

        <div class="section">
            <h2>Personal Information</h2>
            <div id="personal-info" class="info-display">
                <p id="name-display">Click a button to see information</p>
                <p id="age-display"></p>
                <p id="school-display"></p>
            </div>
            <button id="show-name">Show Name</button>
            <button id="show-age">Show Age</button>
            <button id="show-school">Show School</button>
            <button id="show-all">Show All Info</button>
        </div>

        <div class="section">
            <h2>Interactive Calculations</h2>
            <div id="calc-results" class="info-display">
                Click buttons to see calculations
            </div>
            <button id="calc-age">Calculate Birth Year</button>
            <button id="calc-gpa">Calculate GPA</button>
            <button id="calc-tip">Calculate Tip</button>
        </div>

        <div class="section">
            <h2>Style Changes</h2>
            <p id="style-text">This text can be styled with JavaScript</p>
            <button id="change-color">Change Color</button>
            <button id="make-big">Make Text Big</button>
            <button id="add-highlight">Add Highlight</button>
            <button id="reset-style">Reset Style</button>
        </div>

        <div class="section">
            <h2>Page Modifications</h2>
            <button id="change-title">Change Page Title</button>
            <button id="add-paragraph">Add New Paragraph</button>
            <button id="count-elements">Count Page Elements</button>
        </div>
    </div>

    <script>
        // Personal information variables
        const myName = 'Your Name Here';
        const myAge = 20;
        const mySchool = 'University of Example';
        const currentYear = 2024;

        // Functions for displaying information
        function showPersonalInfo(infoType) {
            let nameDisplay = document.getElementById('name-display');
            let ageDisplay = document.getElementById('age-display');
            let schoolDisplay = document.getElementById('school-display');

            // Clear previous content
            nameDisplay.textContent = '';
            ageDisplay.textContent = '';
            schoolDisplay.textContent = '';

            if (infoType === 'name' || infoType === 'all') {
                nameDisplay.textContent = 'Name: ' + myName;
            }
            if (infoType === 'age' || infoType === 'all') {
                ageDisplay.textContent = 'Age: ' + myAge + ' years old';
            }
            if (infoType === 'school' || infoType === 'all') {
                schoolDisplay.textContent = 'School: ' + mySchool;
            }
        }

        // Functions for calculations
        function calculateBirthYear(age, currentYear) {
            return currentYear - age;
        }

        function calculateGPA(scores) {
            let total = 0;
            for (let i = 0; i < scores.length; i++) {
                total += scores[i];
            }
            return (total / scores.length).toFixed(2);
        }

        function calculateTip(billAmount, tipPercent) {
            return (billAmount * tipPercent / 100).toFixed(2);
        }

        function displayCalculation(calculationType) {
            let resultsDiv = document.getElementById('calc-results');

            if (calculationType === 'age') {
                let birthYear = calculateBirthYear(myAge, currentYear);
                resultsDiv.innerHTML = '<strong>Birth Year Calculation:</strong><br>' +
                                     'If you are ' + myAge + ' in ' + currentYear +
                                     ', you were born in ' + birthYear;
            }
            else if (calculationType === 'gpa') {
                let testScores = [85, 92, 78, 88, 95];
                let gpa = calculateGPA(testScores);
                resultsDiv.innerHTML = '<strong>GPA Calculation:</strong><br>' +
                                     'Test Scores: ' + testScores.join(', ') + '<br>' +
                                     'Average GPA: ' + gpa;
            }
            else if (calculationType === 'tip') {
                let billAmount = 45.67;
                let tipPercent = 18;
                let tipAmount = calculateTip(billAmount, tipPercent);
                resultsDiv.innerHTML = '<strong>Tip Calculation:</strong><br>' +
                                     'Bill: $' + billAmount + '<br>' +
                                     'Tip (' + tipPercent + '%): $' + tipAmount + '<br>' +
                                     'Total: $' + (parseFloat(billAmount) + parseFloat(tipAmount)).toFixed(2);
            }
        }

        // Functions for styling
        function changeTextStyle(styleType) {
            let textElement = document.getElementById('style-text');

            if (styleType === 'color') {
                let colors = ['red', 'blue', 'green', 'purple', 'orange'];
                let randomColor = colors[Math.floor(Math.random() * colors.length)];
                textElement.style.color = randomColor;
            }
            else if (styleType === 'big') {
                textElement.style.fontSize = '2em';
                textElement.style.fontWeight = 'bold';
            }
            else if (styleType === 'highlight') {
                textElement.classList.add('highlight');
            }
            else if (styleType === 'reset') {
                textElement.style.color = '';
                textElement.style.fontSize = '';
                textElement.style.fontWeight = '';
                textElement.classList.remove('highlight');
            }
        }

        // Functions for page modifications
        function modifyPage(modificationType) {
            if (modificationType === 'title') {
                let title = document.getElementById('main-title');
                title.textContent = 'Title Changed by JavaScript!';
                title.style.color = 'green';
            }
            else if (modificationType === 'paragraph') {
                let newParagraph = document.createElement('p');
                newParagraph.textContent = 'This paragraph was added by JavaScript at ' + new Date().toLocaleTimeString();
                newParagraph.style.backgroundColor = 'lightgreen';
                newParagraph.style.padding = '10px';
                document.querySelector('.container').appendChild(newParagraph);
            }
            else if (modificationType === 'count') {
                let buttons = document.querySelectorAll('button');
                let paragraphs = document.querySelectorAll('p');
                let divs = document.querySelectorAll('div');

                alert('Page Elements Count:\n' +
                      'Buttons: ' + buttons.length + '\n' +
                      'Paragraphs: ' + paragraphs.length + '\n' +
                      'Divs: ' + divs.length);
            }
        }

        // Event listeners for personal information
        document.getElementById('show-name').addEventListener('click', function() {
            showPersonalInfo('name');
        });

        document.getElementById('show-age').addEventListener('click', function() {
            showPersonalInfo('age');
        });

        document.getElementById('show-school').addEventListener('click', function() {
            showPersonalInfo('school');
        });

        document.getElementById('show-all').addEventListener('click', function() {
            showPersonalInfo('all');
        });

        // Event listeners for calculations
        document.getElementById('calc-age').addEventListener('click', function() {
            displayCalculation('age');
        });

        document.getElementById('calc-gpa').addEventListener('click', function() {
            displayCalculation('gpa');
        });

        document.getElementById('calc-tip').addEventListener('click', function() {
            displayCalculation('tip');
        });

        // Event listeners for styling
        document.getElementById('change-color').addEventListener('click', function() {
            changeTextStyle('color');
        });

        document.getElementById('make-big').addEventListener('click', function() {
            changeTextStyle('big');
        });

        document.getElementById('add-highlight').addEventListener('click', function() {
            changeTextStyle('highlight');
        });

        document.getElementById('reset-style').addEventListener('click', function() {
            changeTextStyle('reset');
        });

        // Event listeners for page modifications
        document.getElementById('change-title').addEventListener('click', function() {
            modifyPage('title');
        });

        document.getElementById('add-paragraph').addEventListener('click', function() {
            modifyPage('paragraph');
        });

        document.getElementById('count-elements').addEventListener('click', function() {
            modifyPage('count');
        });

        // Initial page setup
        console.log('Interactive page loaded successfully!');
        console.log('Try clicking the buttons to see JavaScript in action');
    </script>
</body>
</html>
```

## 🔍 Understanding the Code Flow

### How Event Listeners Work
1. **Page loads** - HTML renders, CSS applies
2. **JavaScript runs** - functions are defined, event listeners are attached
3. **User clicks button** - event listener function executes
4. **Function modifies DOM** - content or styles change
5. **User sees changes** - webpage updates immediately

### Function Organization Pattern
```javascript
// 1. Define variables at the top
const userName = 'Alice';

// 2. Define functions in the middle
function greetUser(name) {
    return 'Hello, ' + name + '!';
}

// 3. Add event listeners at the bottom
document.getElementById('my-button').addEventListener('click', function() {
    let greeting = greetUser(userName);
    document.getElementById('output').textContent = greeting;
});
```

## 🐛 Common Mistakes and Solutions

### 1. Element Not Found Error
```javascript
// ❌ This will cause an error if element doesn't exist
let button = document.getElementById('missing-button');
button.addEventListener('click', function() {
    console.log('clicked');
});

// ✅ Check if element exists first
let button = document.getElementById('my-button');
if (button) {
    button.addEventListener('click', function() {
        console.log('clicked');
    });
}
```

### 2. Function Called Immediately Instead of on Click
```javascript
// ❌ Wrong - function runs immediately
button.addEventListener('click', myFunction());

// ✅ Correct - function runs when clicked
button.addEventListener('click', myFunction);
```

### 3. Forgetting to Return Values
```javascript
// ❌ Function doesn't return anything
function addNumbers(a, b) {
    let sum = a + b;
    // Missing return statement
}

// ✅ Function returns the result
function addNumbers(a, b) {
    let sum = a + b;
    return sum;
}
```

### 4. Scope Issues with Variables
```javascript
// ❌ Variable not accessible outside function
function calculateTotal() {
    let total = 100;
}
console.log(total); // Error - total is not defined

// ✅ Return value or use global variable
function calculateTotal() {
    let total = 100;
    return total;
}
let myTotal = calculateTotal();
console.log(myTotal); // Works correctly
```

## ✅ Success Criteria

By the end of this lab, you should be able to:

### **Function Skills:**
- [ ] Create functions with and without parameters
- [ ] Write functions that return values
- [ ] Call functions and use their return values
- [ ] Understand function scope and variable accessibility

### **DOM Manipulation Skills:**
- [ ] Select HTML elements by ID and class
- [ ] Change text content of elements
- [ ] Modify CSS styles through JavaScript
- [ ] Create new HTML elements with JavaScript

### **Event Handling Skills:**
- [ ] Add click event listeners to buttons
- [ ] Create functions that respond to user interactions
- [ ] Understand the relationship between events and functions
- [ ] Handle multiple different events on the same page

### **Project Completion:**
- [ ] Built an interactive webpage with multiple functions
- [ ] Demonstrated content modification through button clicks
- [ ] Created calculations that display results dynamically
- [ ] Applied style changes through JavaScript interactions

## 🔧 Testing and Debugging

### Browser Console Debugging
```javascript
// Add these debug statements to your functions
function myFunction() {
    console.log('Function started');
    let result = calculateSomething();
    console.log('Calculation result:', result);
    console.log('Function completed');
    return result;
}
```

### Common Console Commands for Testing
```javascript
// Test if elements exist
document.getElementById('my-button')

// Test if functions are defined
typeof myFunction

// Test function calls directly
myFunction('test parameter')

// Check current element content
document.getElementById('output').textContent
```

## 📚 Looking Ahead

**Next Lab (LAB14):** We'll learn about arrays and objects - the data structures you'll use to store and organize information in Project 2.

**Connection to Project 2:** The functions and DOM manipulation skills you learned today are essential for:
- Adding new favorites to your list
- Displaying favorites on the webpage
- Handling form submissions
- Creating interactive buttons for delete/edit actions

## 🎉 Congratulations!

You've learned how to make websites interactive! You can now:
- Create reusable functions for common tasks
- Connect JavaScript to HTML elements
- Respond to user interactions
- Modify webpage content and appearance dynamically

These skills form the core of interactive web development and prepare you for building dynamic web applications in Project 2.