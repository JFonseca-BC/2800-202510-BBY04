const userTextInput = document.getElementById("user-text");
const chatBox = document.getElementById("chat");

function addUserChatElement(userInput)
{
    chatBox.innerHTML += `
        <div class="d-flex flex-row justify-content-end mb-3">
            <div class="p-3 ms-1 border align-middle rounded-4 userChatBubble">
                <p class="small mb-0">${userInput}</p>
            </div>
        </div>
    `;
}

function addVestaChatElement(vestaOutput)
{
    chatBox.innerHTML += `
        <div class="d-flex flex-row justify-content-start mb-3">
            <div class="p-3 me-1 border bg-body-tertiary align-middle rounded-4">
                <p class="small mb-0">${vestaOutput}</p>
            </div>
        </div>        
    `;
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

    addUserChatElement(userInput);
    userTextInput.value = "";

    const vestaOutput = await getVestabotResponse(userInput);

    addVestaChatElement(vestaOutput);
}

userTextInput.addEventListener("keydown", chat);
