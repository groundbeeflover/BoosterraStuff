// Set up the page background and title
document.body.style.backgroundColor = "#0d8359"; // Dark slate grey
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.fontFamily = "Plus Jakarta Sans";

// Create the header section (dark slate grey background)
const header = document.createElement("div");
header.style.padding = "50px 20px";
header.style.textAlign = "center";
header.style.color = "#eef6ef"; // Mint cream
header.style.backgroundColor = "#0d8359"; // Dark slate grey

// Add title to the header
const mainTitle = document.createElement("h1");
mainTitle.textContent = "BIODIVERSITY PROJECT";
mainTitle.style.textTransform = "uppercase";
mainTitle.style.letterSpacing = "2px";
mainTitle.style.fontSize = "1.5em";
mainTitle.style.color = "#eef6ef"; // Mint cream
header.appendChild(mainTitle);

// Add subtitle
const projectTitle = document.createElement("h2");
projectTitle.textContent = "Transylvanian Grasslands";
projectTitle.style.fontSize = "2.5em";
projectTitle.style.fontWeight = "bold";
projectTitle.style.color = "#ffffff"; // White
header.appendChild(projectTitle);

// Add descriptive text
const description = document.createElement("p");
description.textContent =
    "Transylvania's diverse grasslands are threatened by large-scale agriculture. Let's protect 4000+ hectares crucial for preservation.";
description.style.fontSize = "1.2em";
description.style.marginTop = "10px";
description.style.color = "#ffffff"; // White
header.appendChild(description);

// Add project details in a grid
const projectDetails = document.createElement("div");
projectDetails.style.display = "flex";
projectDetails.style.justifyContent = "center";
projectDetails.style.marginTop = "20px";
projectDetails.style.gap = "40px";

// Function to create a detail item
function createDetail(label, value) {
    const detail = document.createElement("div");
    detail.style.textAlign = "center";

    const detailLabel = document.createElement("p");
    detailLabel.textContent = label;
    detailLabel.style.fontSize = "1em";
    detailLabel.style.fontWeight = "bold";
    detailLabel.style.color = "#eef6ef"; // Mint cream
    detail.appendChild(detailLabel);

    const detailValue = document.createElement("p");
    detailValue.textContent = value;
    detailValue.style.fontSize = "1.2em";
    detailValue.style.color = "#ffffff"; // White
    detail.appendChild(detailValue);

    return detail;
}

// Add project details
projectDetails.appendChild(createDetail("Developer", "RePlanet"));
projectDetails.appendChild(createDetail("Location", "Romania"));
projectDetails.appendChild(createDetail("Area size", "4000"));
projectDetails.appendChild(createDetail("Project duration", "30 years"));
projectDetails.appendChild(createDetail("Credit name", "Wallacea Trust - Voluntary Biodiversity Credit"));

// Add details to header
header.appendChild(projectDetails);

// Append header to body
document.body.appendChild(header);

// Create a central white column section
const whiteSection = document.createElement("div");
whiteSection.style.backgroundColor = "#eef6ef"; // Mint cream (white section background)
whiteSection.style.borderRadius = "10px 10px 10px 10px"; // Rounded corners on the top
whiteSection.style.padding = "20px";
whiteSection.style.textAlign = "center";
whiteSection.style.boxSizing = "border-box";
whiteSection.style.margin = "0 auto"; // Centers the section horizontally
whiteSection.style.width = "80%";

// Add an image inside the white section
const image = document.createElement("img");
image.src = "assets/productimages/supercredit.png"; // Image path
image.alt = "Super Credit Image";
image.style.width = "100%";
image.style.borderRadius = "10px";
whiteSection.appendChild(image);

const ProductDescriptionTitle = document.createElement("h3");
ProductDescriptionTitle.textContent = "About our Super Credit"
ProductDescriptionTitle.style.color = "#000000";
ProductDescriptionTitle.style.fontSize = "2.0em";
ProductDescriptionTitle.style.marginBottom = "50px";
whiteSection.appendChild(ProductDescriptionTitle);

// Add sample text below the image
const sampleText = document.createElement("p");
sampleText.innerHTML =
    "Super credit blah blah blah <br>New line";
sampleText.style.marginTop = "20px";
sampleText.style.fontSize = "1.2em";
sampleText.style.color = "#000000";
sampleText.style.justifyContent = "center";
whiteSection.appendChild(sampleText);

// Append the white section to the body
document.body.appendChild(whiteSection);

const SDGContainer = document.createElement("div");
SDGContainer.style.width = "80%";
SDGContainer.style.backgroundColor = "#eef6ef";
SDGContainer.style.borderRadius = "10px 10px 0 0";
SDGContainer.style.padding = "20px";
SDGContainer.style.textAlign = "center";
SDGContainer.style.boxSizing = "border-box";
whiteSection.style.borderRadius = "10px 10px 10px 10px";
SDGContainer.style.margin = "50px auto"; // Centers the section horizontally and adds vertical spacing
SDGContainer.style.width = "80%"; // Ensure width is less than 100%


const SDGProperties = document.createElement("div");
SDGProperties.style.display = "grid";
SDGProperties.style.gridTemplateColumns = "1fr 1fr"; // Two columns
SDGProperties.style.gap = "20px"; // Space between items
SDGProperties.style.padding = "20px";
SDGProperties.style.width = "100%";
SDGProperties.style.boxSizing = "border-box";
SDGProperties.style.alignItems = "center"; // Align items vertically in the middle

const SDGTitle = document.createElement("h3");
SDGTitle.textContent = "Our SDG Commitments";
SDGTitle.style.color = "#000000";
SDGTitle.style.fontSize = "2.0em";
SDGTitle.style.marginBottom = "50px";
SDGTitle.style.textAlign = "center";

SDGContainer.appendChild(SDGTitle);

// Define an object (like a hashmap) for image-text pairs
const imageTextPairs = {
    "assets/productimages/supercredit.png": "Clean water",
    "assets/productimages/supercredit.png": "Fresh air",
    "assets/productimages/supercredit.png": "No Poverty",
    "assets/productimages/supercredit.png": "blah",
    "assets/productimages/supercredit.png": "blah ",
    "assets/productimages/supercredit.png": "blah"
};

// Iterate over the image-text pairs and add them to the grid
Object.entries(imageTextPairs).forEach(([imagePath, text]) => {
    // Create a container for each pair
    const pairContainer = document.createElement("div");
    pairContainer.style.display = "flex";
    pairContainer.style.flexDirection = "row";
    pairContainer.style.alignItems = "center"; // Align image and text vertically

    // Create the image element
    const img = document.createElement("img");
    img.src = imagePath;
    img.alt = text;
    img.style.width = "150px";
    img.style.height = "auto"; // Maintain aspect ratio
    img.style.borderRadius = "10px"; // Optional: Rounded corners
    img.style.marginRight = "20px"; // Space between image and text

    // Create the text element
    const textElement = document.createElement("p");
    textElement.textContent = text;
    textElement.style.margin = "0"; // Remove default margin
    textElement.style.fontSize = "1.2em";
    textElement.style.color = "#135344"; // Optional: Dark slate grey text

    // Add the image and text to the pair container
    pairContainer.appendChild(img);
    pairContainer.appendChild(textElement);

    // Add the pair container to the grid
    SDGProperties.appendChild(pairContainer);
});

SDGContainer.appendChild(SDGProperties);
document.body.appendChild(SDGContainer);
