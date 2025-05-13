async function downloadPDF()
{
    let sdsElement = document.getElementById("sds-document").innerHTML;
    let chemicalName = document.getElementById("chemical-name").innerText;
    
    let options = {
        margin:       1,
        filename:     `${chemicalName}.pdf`,
        image:        {type: "jpeg", quality: 1 },
        pagebreak:    {avoid: "div"},
        html2canvas:  {scale: 2 },
        jsPDF:        {unit: "in", format: "letter", orientation: "portrait"}
    };

    await html2pdf().set(options).from(sdsElement).save();
}