/**
 * 
 * @param {String} url represents the URL string that the ajax call is responding to.
 * @param {Object} callback represents the callback that is passed the response text 
 *                          given by the server.
 */
function ajaxGET(url, callback) 
{

    const xhr = new XMLHttpRequest();

    xhr.onload = function() 
    {
        value = this.responseText;
        if(this.readyState == XMLHttpRequest.DONE && this.status == 200) 
        {
            value = this.responseText;
            callback(this.responseText);
        } 
    }
    xhr.open("GET", url);
    xhr.send();
}

function loadPageLinks()
{
    var chemicalLinksTemplate = document.getElementById("chemical-box-template");
}

/**
 * Loads all the letter groupings of SDS links contained in the argument into the table row, 
 * creating new table cell and anchor tags. The anchor tags are a way for users to access 
 * different SDS links which are grouped by the alphabet/letters.
 * @param {Array<String>} tableLinks represents all the alphabet letters/links that represent 
 * a letter grouping of SDS links.
 */
function loadTableLinks(tableLinks)
{
    var linksTableRow = document.getElementById("links-table-row");

    for(let i = 0; i < tableLinks.length; i++)
    {
        let anchorElement = document.createElement("a");
        let tableCellElement = document.createElement("td");
    
        anchorElement.href = "#" + tableLinks[i].toUpperCase();
        anchorElement.innerText = tableLinks[i].toUpperCase();
        tableCellElement.appendChild(anchorElement);

        linksTableRow.appendChild(tableCellElement);
    }
}

//For testing purposes, to be removed later.
var testTableLinks = ["a", "B", "c", "D", "e", "f"];
loadTableLinks(testTableLinks);