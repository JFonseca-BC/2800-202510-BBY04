async function getVestabotResponse(input)
{
    const response = await fetch("/vestabotChat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({input: input})
    });

    if (!response.ok) throw new Error("Failed to fetch results from gemini");

    const responseJSON = await response.text();

    return responseJSON;
}

