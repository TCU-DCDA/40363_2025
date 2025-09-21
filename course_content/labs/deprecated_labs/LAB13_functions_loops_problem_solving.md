# Lab 13 – Functions, Loops & Problem Solving

> Delivery Mode: In-Class Workshop ➜ Problem-Solving Practice (Hybrid)

Goal: Develop computational thinking skills through practical programming exercises using functions, loops, and logical problem-solving approaches.

## Learning Outcomes
- Master function creation and usage patterns
- Apply loops effectively for repetitive tasks and data processing
- Develop problem-solving strategies for programming challenges
- Practice code organization and reusability principles
- Build confidence with JavaScript syntax and logic

## Prerequisites
- Completed Lab 12 (JavaScript Fundamentals)
- Understanding of variables, data types, and basic operators
- Familiarity with browser console and debugging

## Tasks

### 1. Advanced Function Patterns
1. **Function Parameters and Return Values:**
   ```javascript
   // Functions with default parameters
   function createWelcomeMessage(name = "Visitor", timeOfDay = "day") {
       return `Good ${timeOfDay}, ${name}! Welcome to my website.`;
   }
   
   // Functions with multiple return types
   function analyzeScore(score) {
       if (score < 0 || score > 100) {
           return { error: "Invalid score range" };
       }
       
       return {
           score: score,
           grade: getLetterGrade(score),
           passed: score >= 60,
           category: score >= 90 ? "Excellent" : score >= 80 ? "Good" : "Needs Improvement"
       };
   }
   
   // Helper function
   function getLetterGrade(score) {
       if (score >= 90) return "A";
       if (score >= 80) return "B";
       if (score >= 70) return "C";
       if (score >= 60) return "D";
       return "F";
   }
   ```

2. **Higher-Order Functions and Callbacks:**
   ```javascript
   // Function that takes another function as parameter
   function processUserData(data, processor) {
       return processor(data);
   }
   
   // Callback functions
   const upperCaseProcessor = (text) => text.toUpperCase();
   const wordCountProcessor = (text) => text.split(" ").length;
   
   // Usage
   const userInput = "Hello world from JavaScript";
   console.log(processUserData(userInput, upperCaseProcessor));
   console.log(processUserData(userInput, wordCountProcessor));
   ```

### 2. Loop Mastery and Applications
1. **Array Processing with Loops:**
   ```javascript
   const students = [
       { name: "Alice", grades: [85, 92, 78] },
       { name: "Bob", grades: [90, 84, 88] },
       { name: "Carol", grades: [76, 81, 85] }
   ];
   
   // Calculate averages using for...of
   function calculateStudentAverages(students) {
       const results = [];
       
       for (const student of students) {
           let total = 0;
           for (const grade of student.grades) {
               total += grade;
           }
           const average = total / student.grades.length;
           
           results.push({
               name: student.name,
               average: Math.round(average * 100) / 100,
               letterGrade: getLetterGrade(average)
           });
       }
       
       return results;
   }
   ```

2. **Pattern Generation and Data Manipulation:**
   ```javascript
   // Generate sequences
   function generateFibonacci(n) {
       if (n <= 0) return [];
       if (n === 1) return [0];
       if (n === 2) return [0, 1];
       
       const sequence = [0, 1];
       for (let i = 2; i < n; i++) {
           sequence.push(sequence[i-1] + sequence[i-2]);
       }
       return sequence;
   }
   
   // Text analysis
   function analyzeText(text) {
       const words = text.toLowerCase().split(/[^a-z]+/).filter(word => word.length > 0);
       const wordCount = {};
       
       for (const word of words) {
           wordCount[word] = (wordCount[word] || 0) + 1;
       }
       
       return {
           totalWords: words.length,
           uniqueWords: Object.keys(wordCount).length,
           mostCommon: getMostCommonWord(wordCount),
           wordFrequency: wordCount
       };
   }
   
   function getMostCommonWord(wordCount) {
       let mostCommon = "";
       let highestCount = 0;
       
       for (const word in wordCount) {
           if (wordCount[word] > highestCount) {
               highestCount = wordCount[word];
               mostCommon = word;
           }
       }
       
       return { word: mostCommon, count: highestCount };
   }
   ```

### 3. Problem-Solving Strategies
1. **Breaking Down Complex Problems:**
   ```javascript
   // Problem: Create a personal portfolio data manager
   
   // Step 1: Define data structure
   const portfolioData = {
       personalInfo: {
           name: "",
           title: "",
           email: "",
           bio: ""
       },
       skills: [],
       projects: [],
       experience: []
   };
   
   // Step 2: Create helper functions
   function addSkill(skillName, proficiency) {
       portfolioData.skills.push({
           name: skillName,
           level: proficiency,
           category: categorizeSkill(skillName)
       });
   }
   
   function addProject(name, description, technologies) {
       portfolioData.projects.push({
           name,
           description,
           technologies,
           id: generateProjectId(),
           dateAdded: new Date().toISOString()
       });
   }
   
   // Step 3: Utility functions
   function categorizeSkill(skillName) {
       const categories = {
           frontend: ["html", "css", "javascript", "react"],
           backend: ["node", "python", "java", "php"],
           tools: ["git", "vscode", "photoshop"]
       };
       
       for (const category in categories) {
           if (categories[category].includes(skillName.toLowerCase())) {
               return category;
           }
       }
       return "other";
   }
   
   function generateProjectId() {
       return "proj_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
   }
   ```

2. **Input Validation and Error Handling:**
   ```javascript
   function validateEmail(email) {
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       return emailRegex.test(email);
   }
   
   function safelyParseNumber(input) {
       const num = parseFloat(input);
       if (isNaN(num)) {
           return { success: false, error: "Invalid number format" };
       }
       return { success: true, value: num };
   }
   
   function addSkillSafely(skillName, proficiency) {
       // Validate inputs
       if (!skillName || typeof skillName !== "string") {
           return { success: false, error: "Skill name must be a non-empty string" };
       }
       
       const proficiencyCheck = safelyParseNumber(proficiency);
       if (!proficiencyCheck.success) {
           return { success: false, error: "Proficiency must be a number" };
       }
       
       if (proficiencyCheck.value < 1 || proficiencyCheck.value > 10) {
           return { success: false, error: "Proficiency must be between 1 and 10" };
       }
       
       // Add skill if validation passes
       addSkill(skillName, proficiencyCheck.value);
       return { success: true, message: "Skill added successfully" };
   }
   ```

### 4. Real-World Application Projects
1. **Personal Website Interaction Enhancement:**
   ```javascript
   // Dynamic content generation
   function generateSkillsList(skills) {
       let html = "<ul class='skills-list'>";
       
       for (const skill of skills) {
           const proficiencyBar = "★".repeat(Math.floor(skill.level / 2)) + 
                                 "☆".repeat(5 - Math.floor(skill.level / 2));
           html += `
               <li class="skill-item">
                   <span class="skill-name">${skill.name}</span>
                   <span class="skill-level">${proficiencyBar}</span>
                   <span class="skill-category">${skill.category}</span>
               </li>
           `;
       }
       
       html += "</ul>";
       return html;
   }
   
   // Interactive content calculator
   function calculateReadingTime(content) {
       const wordsPerMinute = 200;
       const wordCount = content.split(/\s+/).length;
       const readingTime = Math.ceil(wordCount / wordsPerMinute);
       
       return {
           wordCount,
           readingTime,
           readingTimeText: `${readingTime} min read`
       };
   }
   ```

2. **Data Analysis Tools:**
   ```javascript
   // Website analytics simulator
   function analyzeVisitorData(visitors) {
       const analytics = {
           totalVisitors: visitors.length,
           uniqueCountries: new Set(visitors.map(v => v.country)).size,
           averageTimeOnSite: 0,
           mostPopularPages: {},
           hourlyTraffic: new Array(24).fill(0)
       };
       
       let totalTime = 0;
       for (const visitor of visitors) {
           totalTime += visitor.timeOnSite;
           
           // Track page popularity
           for (const page of visitor.pagesVisited) {
               analytics.mostPopularPages[page] = 
                   (analytics.mostPopularPages[page] || 0) + 1;
           }
           
           // Track hourly traffic
           const visitHour = new Date(visitor.visitTime).getHours();
           analytics.hourlyTraffic[visitHour]++;
       }
       
       analytics.averageTimeOnSite = totalTime / visitors.length;
       
       return analytics;
   }
   ```

## Practice Challenges

### Challenge 1: Text Processor
Create a comprehensive text analysis tool:
- [ ] Count words, characters, and paragraphs
- [ ] Find longest and shortest words
- [ ] Calculate reading time
- [ ] Generate word frequency report
- [ ] Identify repeated phrases

### Challenge 2: Grade Management System
Build a student grade tracker:
- [ ] Add students and grades
- [ ] Calculate individual and class averages
- [ ] Generate grade distribution reports
- [ ] Identify students needing help
- [ ] Export summary statistics

### Challenge 3: Personal Portfolio Manager
Create a dynamic portfolio system:
- [ ] Add/remove skills with validation
- [ ] Categorize skills automatically
- [ ] Generate HTML for skill display
- [ ] Calculate portfolio completeness score
- [ ] Export portfolio data

### Challenge 4: Simple Game Logic
Develop a number guessing game:
- [ ] Generate random target number
- [ ] Provide hints (higher/lower)
- [ ] Track number of guesses
- [ ] Implement difficulty levels
- [ ] Store high scores

## Success Criteria
- [ ] Functions are properly structured with clear parameters and return values
- [ ] Loops are used efficiently for data processing
- [ ] Error handling and input validation implemented
- [ ] Code is well-organized and commented
- [ ] All challenges completed and tested
- [ ] Problem-solving approach is systematic
- [ ] Functions are reusable and modular
- [ ] Performance considerations addressed

## Code Organization Template
```javascript
// ==========================================
// CONSTANTS AND CONFIGURATION
// ==========================================
const CONFIG = {
    MAX_SKILL_LEVEL: 10,
    MIN_SKILL_LEVEL: 1,
    WORDS_PER_MINUTE: 200
};

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
function validateInput(input, type) {
    // Validation logic
}

function formatOutput(data) {
    // Formatting logic
}

// ==========================================
// CORE FUNCTIONALITY
// ==========================================
function processData(data) {
    // Main processing logic
}

function analyzeResults(results) {
    // Analysis logic
}

// ==========================================
// TESTING AND INITIALIZATION
// ==========================================
function runTests() {
    // Test your functions here
}

function init() {
    console.log("Starting application...");
    runTests();
}

// Start the application
init();
```

## Debugging and Testing Strategies
1. **Function Testing:**
   ```javascript
   // Create test functions
   function testCalculateAverage() {
       const testScores = [85, 90, 78];
       const result = calculateAverage(testScores);
       console.log(`Average of [85, 90, 78] should be 84.33, got: ${result}`);
   }
   
   // Test edge cases
   function testEdgeCases() {
       console.log("Testing empty array:", calculateAverage([]));
       console.log("Testing single value:", calculateAverage([100]));
   }
   ```

2. **Progressive Development:**
   - Start with simple versions of functions
   - Add complexity gradually
   - Test each addition thoroughly
   - Use console.log liberally during development

## Troubleshooting Common Issues
- **Infinite loops:** Always ensure loop conditions can be met
- **Array index errors:** Check array bounds before accessing elements
- **Function scope issues:** Understand variable scope and hoisting
- **Logic errors:** Walk through code step-by-step with sample data

## Next Steps
These function and loop skills are essential for DOM manipulation and interactive web development. The problem-solving strategies you develop here will be crucial when we start working with user interfaces and dynamic content in upcoming labs.
