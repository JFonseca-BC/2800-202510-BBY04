const userTextInput = $("#user-text");
const chatBox = $("#chat");

async function addChatBubble(vestaOutput, role)
{
    var side = "start";
    var chatBubbleStyle = "bg-body-tertiary me-1";

    if(role == "user")
    {
        side = "end";
        chatBubbleStyle = "userChatBubble ms-1";
    }

    $.get("/templates/chatBubble.html", (chatBubbleHTML) => {
        let chatBubble = $(chatBubbleHTML);

        chatBubble.addClass(`justify-content-${side}`);

        chatBubble.find(".chatBubble").addClass(chatBubbleStyle);
        chatBubble.find("p").text(vestaOutput);

        chatBox.append(chatBubble);
    });
}

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

async function chat(event)
{
    if(event.key !== "Enter")
    {
        return;
    }

    const userInput = event.target.value.trim();

    if(userInput.length === 0) 
    {
        return;
    }

    await addChatBubble(userInput, "user");
    userTextInput.val("");

    const vestaOutput = await getVestabotResponse(userInput);

    await addChatBubble(vestaOutput, "model");
}

async function loadChatHistory()
{
    const response = await fetch("/vestabot/history", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const chatHistory = await response.json();
    if(Array.isArray(chatHistory) && chatHistory.length !== 0)
    {
        chatHistory.forEach(async messageObj => {
            await addChatBubble(messageObj.parts[0].text, messageObj.role);
        });
    }

}

userTextInput.on("keydown", chat);
$(document).ready(loadChatHistory);
