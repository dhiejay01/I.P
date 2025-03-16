const questions = [
    // HTML Questions
    {
        question: "• What does HTML stand for?",
        options: ["HyperText Markup Language", "HighText Machine Language", "HyperText Multilayer Language"],
        answer: "HyperText Markup Language"
    },
    {
        question: "• What is the purpose of the <head> tag in an HTML document?",
        options: ["To display content", "To contain meta-information", "To include scripts"],
        answer: "To contain meta-information"
    },
    {
        question: "• How do you create a hyperlink in HTML?",
        options: ["< link >", "< a >", "< href >"],
        answer: "< a >"
    },
    {
        question: "• What is the difference between a < div > and a < span >?",
        options: ["< div > is inline, < span > is block", "< div > is block, < span > is inline", "No difference"],
        answer: "< div > is block, < span > is inline"
    },
    {
        question: "• What tag is used to create a paragraph in HTML?",
        options: ["< p >", "< para >", "< text >"],
        answer: "< p >"
    },
  
    // CSS Questions
    {
        question: "• What does CSS stand for?",
        options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "• How do you apply a CSS style to an HTML element?",
        options: ["Inline", "Internal", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "• What is the difference between class and ID selectors in CSS?",
        options: ["Class is unique, ID is not", "ID is unique, class is not", "No difference"],
        answer: "ID is unique, class is not"
    },
    {
        question: "• How can you center a block element horizontally?",
        options: ["Set margin to auto", "Use text-align: center", "Use float"],
        answer: "Set margin to auto"
    },
    {
        question: "• What property in CSS is used to change the text color?",
        options: ["color", "font-color", "text-color"],
        answer: "color"
    },

    // JavaScript Questions
    {
        question: "• What does JavaScript primarily do in web development?",
        options: ["Style pages", "Add interactivity", "Structure content"],
        answer: "Add interactivity"
    },
    {
        question: "• How do you declare a variable in JavaScript?",
        options: ["var", "let", "Both"],
        answer: "Both"
    },
    {
        question: "• What is the difference between let and var?",
        options: ["let is block-scoped, var is function-scoped", "No difference", "var is faster"],
        answer: "let is block-scoped, var is function-scoped"
    },
    {
        question: "• How do you create a function in JavaScript?",
        options: ["function keyword", "create function", "def keyword"],
        answer: "function keyword"
    },
    {
        question: "• What is used to display an alert box in JavaScript?",
        options: ["alert()", "message()", "show()"],
        answer: "alert()"
    }
];

let score = 0;

// Function to shuffle the array (Fisher-Yates algorithm)
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
}

// Function to shuffle options within each question
function shuffleOptions(questions) {
    questions.forEach(q => {
        shuffleArray(q.options); // Shuffle the options for each question
    });
}

function loadQuiz() {
    shuffleArray(questions); // Shuffle the order of questions
    shuffleOptions(questions); // Shuffle the options of each question
    
    const quizContainer = document.getElementById('quiz');
    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <p>${q.question}</p>
            ${q.options.map((option, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label>
            `).join('')}
        `;
        quizContainer.appendChild(questionElement);
    });
}

function submitQuiz() {
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });
    displayResult();
}

function displayResult() {
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `Your score: ${score} out of ${questions.length}`;
}

document.getElementById('submit').addEventListener('click', submitQuiz);

// Load quiz on page load
window.onload = loadQuiz;
