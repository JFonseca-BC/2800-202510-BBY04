console.log("Successfully called app.js");

function loadHeaderFooter() {
    console.log($('#navbarPlaceholder').load('./text/navbar.html'));
    console.log($('#footerPlaceholder').load('./text/footer.html'));
}
loadHeaderFooter();