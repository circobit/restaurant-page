// index.js
import "./style.css";
import { createHeader, createContentWrapper, createFooter } from "./modules/initial-load.js";
import loadHome from "./modules/home.js";

// Get #content div
const contentDiv = document.getElementById("content");

// Append header to #content div
contentDiv.appendChild(createHeader());
// Append content wrapper to #content div
contentDiv.appendChild(createContentWrapper());
// Append footer to #content div
contentDiv.appendChild(createFooter());

// Load default init tab when loading the page for the first time
const main = document.getElementById("mainContent");
main.appendChild(loadHome());

// Function to load content based on passed function
function switchTab(loadFunction) {
    // Clean current content from contentDiv
    main.innerHTML = "";
    // Append content from passed module as function
    main.appendChild(loadFunction());
}

// Set event listener to nav buttons
const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", () => switchTab(loadHome));