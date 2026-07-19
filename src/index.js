// index.js
import "./style.css";
import { createHeader, createContentWrapper, createFooter } from "./modules/initial-load.js";

const contentDiv = document.getElementById("content");
contentDiv.appendChild(createHeader());