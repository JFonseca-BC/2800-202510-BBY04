//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
function loadSkeleton() {
    $('#navbarPlaceholder').load('/templates/navbar.html');
    $('#footerPlaceholder').load('/templates/footer.html');
}
loadSkeleton();