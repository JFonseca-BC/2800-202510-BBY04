const userTextInput = $("#user-text");
const chatBox = $("#chat");

/**
 * Adds a chat bubble to the chat interface with the given message and role. 
 * The role determines the styling of the bubble and which side of the chatBox the 
 * chat bubble ends up.
 * 
 * @param {string} chatMessage represents the message to display in the chat bubble.
 * @param {string} role represents the role of the message sender, either "user" or "model".
 */
async function addChatBubble(chatMessage, role) {
    var side = "start";
    var chatBubbleStyle = "bg-body-tertiary me-1";

    if(role == "user") {
        side = "end";  // Right aligns the user's chat bubble
        chatBubbleStyle = "userChatBubble ms-1"; // userChatBubble = user-specific bubble styling
    }

    // Utilizes html template to create user or model specific chat bubbles
    $.get("/templates/chatBubble.html", (chatBubbleHTML) => {
        let chatBubble = $(chatBubbleHTML); 

        chatBubble.addClass(`justify-content-${side}`);

        chatBubble.find(".chatBubble").addClass(chatBubbleStyle);
        chatBubble.find("p").text(chatMessage);

        chatBox.append(chatBubble);
    });
}

/**
 * Sends the user's input to the vestabot API and retrieves the chatbot's response.
 * 
 * @param {string} input represents the user's message to send to the vestabot.
 * @returns {Promise<string>} a promise resolving to the vestabot's text response.
 */
async function getVestabotResponse(input) {
    const response = await fetch("/vestabot/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ input: input })
    });

    if (!response.ok) throw new Error("Failed to fetch results from gemini");

    const responseText = await response.text();

    return responseText;
}

/**
 * Handles the chat input event when the user presses Enter, updates the UI, and fetches a response. 
 * The handler only accepts  "enter" or "return" keys being pressed. 
 * 
 * @param {KeyboardEvent} event represents the keyboard event triggered by user input.
 */
async function chat(event) {
    if(event.key !== "Enter") {
        return;
    }

    const userInput = event.target.value.trim();

    if(userInput.length === 0) {
        return;
    }

    await addChatBubble(userInput, "user");
    userTextInput.val(""); // Clear the input field after sending

    const vestaOutput = await getVestabotResponse(userInput);

    await addChatBubble(vestaOutput, "model");
}

/**
 * Loads the previous chat history from the server and displays it in the chat interface.
 * If the user has no previous chat history with Vesta, an empty chat window is displayed.
 */
async function loadChatHistory() {
    const response = await fetch("/vestabot/history", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const chatHistory = await response.json();

    // Displays all past chat messages in the Vesta Chat Window
    // If statement handles and ignores user's who have no previous chats with Vesta.
    if(Array.isArray(chatHistory) && chatHistory.length !== 0) {
        chatHistory.forEach(async messageObj => {
            await addChatBubble(messageObj.parts[0].text, messageObj.role);
        });
    }

}

// Only accepts the user's input when they press "enter" (or "return" on mobile)
userTextInput.on("keydown", chat);

$(document).ready(loadChatHistory);
