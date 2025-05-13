const searchInput = document.getElementById("sds-search");
const linksContainer = document.getElementById("chemical-links-container");
const originalHTML =  linksContainer.innerHTML;

async function getChemicalsJSON(query)
{
    const response = await fetch("/sdsSearch", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({search: query})
    });

    if (!response.ok) throw new Error("Failed to fetch results from database");

    const chemicalsJSON = await response.json();

    return chemicalsJSON;
}

function appendChemicalLinks(chemicals)
{
    const listGroup = document.createElement("div");
    listGroup.classList.add("list-group");
        
    chemicals.forEach(chemical => {
        const link = document.createElement("a");
        link.href = `/sds/${chemical.substance_name}`;
        link.textContent = chemical.substance_name;
        link.className = "list-group-item list-group-item-action";
        listGroup.appendChild(link);
    });

    linksContainer.innerHTML = "";
    linksContainer.appendChild(listGroup);
}

function resetLinks() 
{
    linksContainer.innerHTML = originalHTML;
}

async function searchChemicals(event)
{
    const query = event.target.value.trim();

    if(query.length === 0) 
    {
        resetLinks();
        return;
    }

    const chemicals = await getChemicalsJSON(query);
    
    if(chemicals.length === 0) 
    {
        linksContainer.innerHTML = `<p class="text-center text-danger fs-4">No Safety Data Sheets found<p>`;
        return;
    }

    appendChemicalLinks(chemicals);
}

searchInput.addEventListener("input", searchChemicals);
