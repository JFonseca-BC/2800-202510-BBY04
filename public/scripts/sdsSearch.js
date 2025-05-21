// Represents the search bar that the user enters a chemical into.
const searchInput = document.getElementById("sds-search");

// Represents the div that contains all the links.
const linksContainer = document.getElementById("chemical-links-container");

// Represents the original links/html that was on the page. Its used to return the original format for all the links.
const originalHTML =  linksContainer.innerHTML;

/**
 * Sends a POST request to retrieve JSON data for chemicals matching the user's query.
 * 
 * @param {string} query represents the user's search input for a specific chemical.
 * @returns an array of JSON representing all the chemicals that match the search input.
 */
async function getChemicalsJSON(query)
{
    const response = await fetch("/sds/search", {
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

/**
 * Clears the current links and appends new SDS links based on the search results.
 * Adds Bootstrap styling to each anchor element.
 * 
 * @param {Array<Object>} chemicals 
 */
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

/**
 * Restores the original HTML of the links container to the default/pre-search state.
 */
function resetLinks() 
{
    linksContainer.innerHTML = originalHTML;
}

/**
 * Handles search input events. Fetches chemical data from the server based on the user's input,
 * updates the view with matching results, or shows a message if no matches are found.
 * Restores the original view if the input is empty.
 * 
 * @param {InputEvent} event represents an input event.
 * @returns nothing. Only returns before the end of the function 
 *          if the user either inputted nothing or a search that doesn't 
 *          match any chemicals in the database.
 */
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

/**
 * Adds an input event listener to the search bar.
 * Triggers dynamic filtering and display of matching SDS links as the user types.
 */
searchInput.addEventListener("input", searchChemicals);
