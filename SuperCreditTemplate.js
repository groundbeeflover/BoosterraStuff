// Project details data
const projectDetailsData = [
    { label: "Developers", value: "RePlanet, Wilderlands" },
    { label: "Locations", value: "Romania, Hungary" },
    { label: "Credit Size", value: "30m2" }
];

// Populate project details
const projectDetailsContainer = document.getElementById("project-details");
projectDetailsData.forEach(({ label, value }) => {
    const detail = document.createElement("div");
    detail.style.textAlign = "center";

    const detailLabel = document.createElement("p");
    detailLabel.textContent = label;
    detailLabel.style.fontSize = "2em";
    detailLabel.style.fontWeight = "bold";
    detailLabel.style.color = "#eef6ef";
    detail.appendChild(detailLabel);

    const detailValue = document.createElement("p");
    detailValue.textContent = value;
    detailValue.style.fontSize = "1.4em";
    detailValue.style.color = "#ffffff";
    detail.appendChild(detailValue);

    projectDetailsContainer.appendChild(detail);
});

// SDG image-text pairs
const imageTextPairs = {
    "assets/productimages/supercredit.png": "Clean water",
    "assets/productimages/supercredit.png": "Fresh air",
    "assets/productimages/supercredit.png": "No Poverty",
    "assets/productimages/supercredit.png": "Blah",
    "assets/productimages/supercredit.png": "Blah ",
    "assets/productimages/supercredit.png": "Blah"
};

// Populate SDG properties
const sdgPropertiesContainer = document.getElementById("sdg-properties");
Object.entries(imageTextPairs).forEach(([imagePath, text]) => {
    const pairContainer = document.createElement("div");

    const img = document.createElement("img");
    img.src = imagePath;
    img.alt = text;

    const textElement = document.createElement("p");
    textElement.textContent = text;

    pairContainer.appendChild(img);
    pairContainer.appendChild(textElement);
    sdgPropertiesContainer.appendChild(pairContainer);
});
