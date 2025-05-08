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


