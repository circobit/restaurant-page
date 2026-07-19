// index.js
import "./style.css";
import { createHeader, createContentWrapper, createFooter } from "./modules/initial-load.js";

// Get #content div
const contentDiv = document.getElementById("content");

// Append header to #content div
contentDiv.appendChild(createHeader());
// Append content wrapper to #content div
contentDiv.appendChild(createContentWrapper());