console.log("Successfully called app.js");

//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
function loadSkeleton() {
    console.log($('#navbarPlaceholder').load('app/html/navbar.html'));
    console.log($('#footerPlaceholder').load('app/html/footer.html'));
}
loadSkeleton();