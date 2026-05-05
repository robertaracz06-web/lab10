
let questions = [
    {
        question: "Do you feel happy?",
        options: {
            a: "Yes",
            b: "No"
        },
        correctAnswer: "a",
        correctResponse: "Super!",
        incorrectResponse: "I am sorry"
    },
    {
        question: "Care limbaj este folosit pentru structura paginilor web?",
        options: {
            a: "CSS",
            b: "HTML",
            c: "JavaScript"
        },
        correctAnswer: "b",
        correctResponse: "Exact! Ești un viitor Web Developer grozav.",
        incorrectResponse: "Greșit. Mai încearcă la următoarea tură!"
    }
];


let currentQuestionIndex = 0; 
let chatContainer = document.getElementById("chat-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementById("user-input");

displayQuestion();


function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let optionsHTML = Object.keys(currentQuestion.options).map(key => `${key}) ${currentQuestion.options[key]}`).join(' | ');

    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
    
    botResponse.innerHTML = `<strong>Chatbot:</strong> ${currentQuestion.question} <br> <em>${optionsHTML}</em>`;
    
    
    chatContainer.appendChild(botResponse); 
}

function scrollChatContainerToBottom() {
    let chatContainer = document.getElementById("chat-container");
    chatContainer.scrollTop = chatContainer.scrollHeight;
}


chatForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let userResponse = userInput.value.toLowerCase().trim(); 

    
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.innerHTML = `<strong>Tu:</strong> ${userResponse}`;
    chatContainer.appendChild(userMessage);

    let currentQuestion = questions[currentQuestionIndex];
    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
    botResponse.innerHTML = `<strong>Chatbot:</strong> `;
    
    
    if (userResponse === currentQuestion.correctAnswer) {
        botResponse.innerHTML += currentQuestion.correctResponse;
    } else {
        botResponse.innerHTML += currentQuestion.incorrectResponse;
    }
    chatContainer.appendChild(botResponse);

    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length; 
    
    userInput.value = ""; 
    
    
    displayQuestion();

    scrollChatContainerToBottom();
});