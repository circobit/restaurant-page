// modules/initial-load.js
export function createHeader() {
	// Header container
	const header = document.createElement("header");
	header.className = "header";

	// Logo container
	const logoDiv = document.createElement("div");
	logoDiv.className = "logoDiv";
	header.appendChild(logoDiv);
	// Logo Title
	const logoTitle = document.createElement("p");
	logoTitle.textContent = "SAN TELMO";
	// Append Title to logoDiv
	logoDiv.appendChild(logoTitle);

	// Nav Menu
	const nav = document.createElement("nav");
	nav.className = "navMenu";
	// Home Button
	const homeBtn = document.createElement("button");
	homeBtn.id = "homeBtn";
	homeBtn.textContent = "Home";
	// Menu Button
	const menuBtn = document.createElement("button");
	menuBtn.id = "menuBtn";
	menuBtn.textContent = "Menu";
	// About Button
	const aboutBtn = document.createElement("button");
	aboutBtn.id = "aboutBtn";
	aboutBtn.textContent = "About";
	// Append buttons to Nav
	nav.appendChild(homeBtn);
	nav.appendChild(menuBtn);
	nav.appendChild(aboutBtn);
	// Append nav to header
	header.appendChild(nav);

	return header;
}