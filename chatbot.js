const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Chatbot responses
const responses = {
    'hello': 'Hi! How can I assist you?',
    'how are you': 'I\'m doing great, thanks!',
    'what is your name': 'I\'m Chatbot!',
    // Add more responses...
};

// Function to generate bot response
function getBotResponse(userMessage) {
    const userMessageLower = userMessage.toLowerCase();
    for (const key in responses) {
        if (userMessageLower.includes(key)) {
            return responses[key];
        }
    }
    return 'Sorry, I didn\'t understand that.';
}

// Send button click event listener
sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        // Display user message
        const userMessageHTML = `
            <div class="message user-message">
                <span>You:</span> ${userMessage}
            </div>
        `;
        chatBody.insertAdjacentHTML('beforeend', userMessageHTML);

        // Get bot response
        const botResponse = getBotResponse(userMessage);

        // Display bot response
        const botResponseHTML = `
            <div class="message bot-message">
                <span>Chatbot:</span> ${botResponse}
            </div>
        `;
        chatBody.insertAdjacentHTML('beforeend', botResponseHTML);

        // Scroll to bottom of chat body
        chatBody.scrollTop = chatBody.scrollHeight;

        // Clear user input
        userInput.value = '';
    }
});

