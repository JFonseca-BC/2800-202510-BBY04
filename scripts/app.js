console.log("Successfully called app.js");

//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
function loadHeaderFooter() {
    console.log($('#navbarPlaceholder').load('./text/navbar.html'));
    console.log($('#footerPlaceholder').load('./text/footer.html'));
}
loadHeaderFooter();