/**
 * Generates a PDF file from the SDS HTML content on the page.
 * Uses the chemical name as the filename, and formats the content
 * with the PDF and image options below.
 *
 * Requires html2pdf.js.
 */
async function downloadPDF()
{
    const sdsElement = document.getElementById("sds-document").innerHTML;
    const chemicalName = document.getElementById("chemical-name").innerText;
    
    // PDF generation settings for html2pdf.js
    const options = {
        margin:       0.5,
        filename:     `${chemicalName}.pdf`,
        image:        {type: "jpeg", quality: 1},
        pagebreak:    {avoid: "div"},
        html2canvas:  {scale: 2},
        jsPDF:        {unit: "in", format: "letter", orientation: "portrait"}
    };

    await html2pdf().set(options).from(sdsElement).save();
}