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

/**
 * Returns an array of the different letter groupings of chemicals, based on their first 
 * letter.
 * @param {Array<String>} chemicalNames represents an array of all chemical names to be 
 *                                      listed out on the page.
 * @returns a String array of letters sorted in alphabetical order that represents the 
 *          different letter groups of chemicals.
 */
function createletterGroups(chemicalNames)
{
    let nonUniqueFirstChars = chemicalNames.map((name) => name.toUpperCase().substring(0, 1));

    let uniqueAlpha = [];
    nonUniqueFirstChars.forEach((letter) => {
        if(!uniqueAlpha.includes(letter))
        {
            uniqueAlpha.push(letter);
        }
    });

    let letterGroups = uniqueAlpha.sort();

    return letterGroups;
}

/**
 * Loads all the Safety Data Sheet page links based on the received chemicals. The 
 * links are grouped and ordered by alphabetical order.
 * @param {Array<String>} chemicalNames represents an array of all chemical names to be 
 *                                      listed out on the page.
 * @param {Array<String>} letterGroups represents the letter groups of chemicals in an 
 *                                     array sorted in alphabetical order.
 */
function loadPageLinks(chemicalNames, letterGroups)
{
    var chemicalLinksTemplate = document.getElementById("chemical-box-template");

    letterGroups.forEach((letter) => {
        let newGrouping = chemicalLinksTemplate.content.cloneNode(true);
        let chemicalList = newGrouping.querySelector(".chemical-list");

        let letterHeader = newGrouping.querySelector(".card-title");

        letterHeader.setAttribute("id", letter);
        letterHeader.innerText = letter;

        chemicalNames.sort().forEach((chemical) => {
            if(chemical.charAt(0) == letter)
            {
                let anchorElement = document.createElement("a");

                anchorElement.href = "/sds/" + chemical;
                anchorElement.target = "_blank";
                anchorElement.className = "list-group-item list-group-item-action btn btn-secondary";
                anchorElement.innerText = chemical;

                chemicalList.appendChild(anchorElement);
            }
        });

        document.getElementById("chemical-links-container").appendChild(newGrouping);
    });
}

/**
 * Loads all the letter groupings of SDS links contained in the argument into the table row, 
 * creating new table cell and anchor tags. The anchor tags are a way for users to access 
 * different SDS links which are grouped by the alphabet/letters.
 * @param {Array<String>} letterGroups represents all the alphabet letters/links that represent 
 *                                   a letter grouping of SDS links.
 */
function loadLetterGroups(letterGroups)
{
    var letterGroupingContainer = document.getElementById("letter-grouping-container");

    for(let i = 0; i < letterGroups.length; i++)
    {
        let anchorElement = document.createElement("a");
        var rowElement; 
        if(i % 13 == 0)
        {
            rowElement = document.createElement("div");
            rowElement.className = "row";
            letterGroupingContainer.appendChild(rowElement);
        }
    
        anchorElement.href = "#" + letterGroups[i].toUpperCase();
        anchorElement.innerText = letterGroups[i].toUpperCase();
        anchorElement.className = "btn btn-outline-secondary col p-1"

        rowElement.appendChild(anchorElement);
    }
}

/**
 * Loads the page links to Safety Data Sheet pages for all chemicals received from the server.
 */
function loadSDSPage()
{
    //currently waiting on authentication to be complete to finish the implementation of the sds 
    // route which will serve the chemicalNames to the client.
}

loadSDSPage();


//For testing purposes, to be removed later.
var testChemicals = [
    // A
    "Acetone", "Acetic Acid", "Ammonia", "Aniline", "Arsenic", "Acrylic Acid", "Aluminum Chloride", 
    "Aldehyde", "Anthracene", "Ascorbic Acid",
    // B
    "Benzene", "Boron Trichloride", "Bromine", "Boric Acid", "Butanol", "Benzaldehyde", 
    "Barium Sulfate", "Benzyl Alcohol", "Butanone", "Beryllium",
    // C
    "Chlorine", "Calcium Carbonate", "Carbon Monoxide", "Carbon Dioxide", "Chloroform", "Citric Acid", 
    "Chromium", "Cyclohexane", "Cresol", "Cyanide",
    // D
    "Dichloromethane", "Diethyl Ether", "Dimethyl Sulfoxide", "Dinitrogen Tetroxide", 
    "Dibutyl Phthalate", "Dinitrophenol", "Deuterium", "Dioxane", "Dimethylformamide", "Diazomethane",
    // E
    "Ethanol", "Ethylene", "Ethylene Glycol", "Ethylbenzene", "Ethyl Acetate", "Epichlorohydrin", 
    "Ethylenediamine", "Erythromycin", "Eicosane", "Eosin",
    // F
    "Formaldehyde", "Fluorine", "Ferric Chloride", "Ferrous Sulfate", "Fluoroacetic Acid", "Furan", 
    "Fluorescein", "Folic Acid", "Fructose", "Ferrocenium",
    // G
    "Glucose", "Glycerol", "Glycine", "Guanidine", "Gallic Acid", "Germanium Dioxide", "Gold Chloride", 
    "Glycolic Acid", "Guaiacol", "Glyoxal",
    // H
    "Hydrochloric Acid", "Hydrogen Peroxide", "Hydrazine", "Helium", "Hexane", "Histamine", 
    "Hydrofluoric Acid", "Hydroquinone", "Heptane", "Hypochlorite",
    // I
    "Iodine", "Isopropanol", "Isobutane", "Isobutyl Alcohol", "Indole", "Iron(III) Oxide", "Isoprene", 
    "Imidazole", "Isoamyl Alcohol", "Iodoform",
    // J 
    "Jet Fuel", "Jojoba Oil", "Jasmone", "Juglone", "Joulethione", "Jervine", "Juvenile Hormone", 
    "Juniper Extract", "Jadeite", "Jacobsine",
    // K
    "Ketone", "Kerosene", "Krypton", "Kaolinite", "Ketene", "Kojic Acid", "Kainic Acid", "Kieselguhr", 
    "Kynurenine", "Kallikrein",
    // L
    "Lactic Acid", "Lithium Hydroxide", "Lead Nitrate", "Linoleic Acid", "Limonene", "Lysine", "Leucine", 
    "Lauric Acid", "Lanthanum Oxide", "Lithium Carbonate",
    // M
    "Methanol", "Magnesium Sulfate", "Manganese Dioxide", "Maleic Acid", "Mercury", "Methylamine", 
    "Molybdenum Trioxide", "Malonic Acid", "Morphine", "Methane",
    // N
    "Nitric Acid", "Nitrogen", "Nickel Sulfate", "Naphthalene", "Nicotinic Acid", "Neon", "Ninhydrin", 
    "Neomycin", "Norepinephrine", "Niacin",
    // O
    "Ozone", "Oxalic Acid", "Octane", "Oleic Acid", "Oxygen", "Ortho-Xylene", "Orotic Acid", "O-Anisidine", 
    "Octanol", "Oil of Wintergreen",
    // P
    "Peroxide", "Phenol", "Phosphoric Acid", "Propylene Glycol", "Potassium Permanganate", "Pyridine", 
    "Piperidine", "Paracetamol", "Pentane", "Picric Acid",
    // Q 
    "Quinoline", "Quinine", "Quercetin", "Quinone", "Quinazoline", "Quinacrine", "Quinapril", "Quetiapine", 
    "Quinaldic Acid", "Quinidine",
    // R
    "Radon", "Resorcinol", "Riboflavin", "Rhodium", "Ricin", "Ruthenium", "Rubidium", "Ranolazine", 
    "Ranitidine", "Raffinose",
    // S
    "Sulfuric Acid", "Sodium Chloride", "Sodium Hydroxide", "Sodium Bicarbonate", "Strontium Nitrate", 
    "Sucrose", "Serotonin", "Silicon Dioxide", "Salicylic Acid", "Sorbitol",
    // T
    "Toluene", "Titanium Dioxide", "Trichloroethylene", "Thymol", "Tartaric Acid", "Terpineol", 
    "Triethanolamine", "Thiourea", "Thallium", "Tetracycline",
    // U
    "Uranium Hexafluoride", "Uric Acid", "Urethane", "Urobilin", "Uridine", "Undecane", "Umbelliferone", 
    "Ulexite", "Ununoctium", "Uranium Dioxide",
    // V
    "Vanadium Pentoxide", "Valeric Acid", "Vanillin", "Vinyl Chloride", "Vitamin C", "Verapamil", 
    "Vermiculite", "Viomycin", "Valine", "Vinblastine",
    // W
    "Water", "Wolframite", "Wurtzite", "Warfarin", "Waxes", "Whey", "Wolfram", "White Phosphorus", 
    "Wood Alcohol", "Withaferin",
    // X 
    "Xylene", "Xylose", "Xanthene", "Xenon", "Xylitol", "Xylenol", "Xanthic Acid", "Xanthine", 
    "Xanthan Gum", "Xanthate",
    // Y 
    "Yttrium Nitrate", "Yttrium Oxide", "Yttrium Chloride", "Yellowcake", "Yeast Extract", 
    "Yohimbine", "Yttrium Fluoride", "Ytterbium", "Yttrium Sulfate", "Ylid",
    // Z
    "Zinc Oxide", "Zirconium Dioxide", "Zinc Sulfate", "Zinc Nitrate", "Zirconium Tetrachloride", 
    "Zinc Chloride", "Ziram", "Zineb", "Zeaxanthin", "Zymase"
];
var testLetterGroups = createletterGroups(testChemicals);
loadLetterGroups(testLetterGroups);
loadPageLinks(testChemicals, testLetterGroups);
//end test