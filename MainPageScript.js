// MainPageScript.js

// Function to create a card element
function createCard(title, location, size, imgSrc, altText) {
    const card = document.createElement("div");
    card.className = "card";

    // Card Header
    const cardHeader = document.createElement("div");
    cardHeader.className = "card-header";

    const logo = document.createElement("img");
    logo.className = "logo";
    logo.src = imgSrc;
    logo.alt = altText;

    cardHeader.appendChild(logo);
    card.appendChild(cardHeader);

    // Card Body
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h2");
    cardTitle.className = "card-title";
    cardTitle.textContent = title;

    const infoRow = document.createElement("div");
    infoRow.className = "info-row";

    const locationInfo = document.createElement("div");
    locationInfo.className = "info-item";

    const locationIcon = document.createElement("img");
    locationIcon.className = "info-icon";
    locationIcon.src = imgSrc;
    locationIcon.alt = "Location Icon";

    const locationText = document.createElement("span");
    locationText.textContent = location;

    locationInfo.appendChild(locationIcon);
    locationInfo.appendChild(locationText);

    const sizeInfo = document.createElement("div");
    sizeInfo.className = "info-item";

    const sizeIcon = document.createElement("img");
    sizeIcon.className = "info-icon";
    sizeIcon.src = imgSrc;
    sizeIcon.alt = "Size Icon";

    const sizeText = document.createElement("span");
    sizeText.textContent = size;

    sizeInfo.appendChild(sizeIcon);
    sizeInfo.appendChild(sizeText);

    infoRow.appendChild(locationInfo);
    infoRow.appendChild(sizeInfo);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(infoRow);

    const arrowButton = document.createElement("div");
    arrowButton.className = "arrow-button";

    const arrowImg = document.createElement("img");
    arrowImg.src = imgSrc;
    arrowImg.alt = "Go";

    arrowButton.appendChild(arrowImg);

    card.appendChild(cardBody);
    card.appendChild(arrowButton);

    return card;
}

// Add a single card to the "single-card-container"
const singleCardContainer = document.getElementById("single-card-container");
singleCardContainer.appendChild(
    createCard("Super Credit", "Global", "30m2", "assets/productimages/supercredit.png", "Super Credit Logo")
);

// Add multiple cards to the "project-cards-container"
const projectCardsContainer = document.getElementById("project-cards-container");
for (let i = 1; i <= 6; i++) {
    projectCardsContainer.appendChild(
        createCard(
            `Project ${i}`,
            "Location " + i,
            `${30 + i}m2`,
            "assets/productimages/supercredit.png",
            `Project ${i} Logo`
        )
    );
}

// Function to create an FAQ item
function createFAQItem(question, answer) {
    const faqItem = document.createElement("div");
    faqItem.className = "faq-item";

    const faqQuestion = document.createElement("div");
    faqQuestion.className = "faq-question";

    const questionText = document.createElement("span");
    questionText.textContent = question;

    const toggleIcon = document.createElement("span");
    toggleIcon.className = "faq-toggle-icon";
    toggleIcon.textContent = ">";

    faqQuestion.appendChild(questionText);
    faqQuestion.appendChild(toggleIcon);

    const faqAnswer = document.createElement("div");
    faqAnswer.className = "faq-answer";
    faqAnswer.textContent = answer;

    // Add event listener for toggling the answer display
    faqQuestion.addEventListener("click", () => {
        faqAnswer.classList.toggle("show");
        toggleIcon.classList.toggle("rotate");
    });

    faqItem.appendChild(faqQuestion);
    faqItem.appendChild(faqAnswer);

    return faqItem;
}

// Add FAQ items to the FAQ container
const faqContainer = document.getElementById("faq-container");

const faqs = [
    { question: "What is a Super Credit?", answer: "A Super Credit is a token that represents environmental conservation efforts." },
    { question: "How can I purchase a Super Credit?", answer: "You can purchase through our official website or authorized partners." },
    { question: "What is the purpose of a Super Credit?", answer: "The goal is to contribute to global biodiversity conservation and sustainability." },
];

faqs.forEach(faq => {
    faqContainer.appendChild(createFAQItem(faq.question, faq.answer));
});
