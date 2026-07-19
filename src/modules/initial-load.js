// modules/initial-load.js

// Header
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


// Content Wrapper
export function createContentWrapper() {
	// Main container
	const main = document.createElement("main");
	main.id = "mainContent";
	// Return main element
	return main;
}


// Footer
export function createFooter() {
	// Footer element
	const footer = document.createElement("footer");
	footer.className = "footer";
	// Footer title
	const footerTitle = document.createElement("p");
	footerTitle.textContent = "© 2026 San Telmo Restaurant";
	footerTitle.className = "footerTitle";
	// Footer address
	const footerAddress = document.createElement("p");
	footerAddress.textContent = "Av. del Libertador 4782";
	// Footer city
	const footerCity = document.createElement("p");
	footerCity.textContent = "Autonomous City of Buenos Aires";
	// Footer country
	const footerCountry = document.createElement("p");
	footerCountry.textContent = "Argentina";
	// Append content to footer element
	footer.appendChild(footerTitle);
	footer.appendChild(footerAddress);
	footer.appendChild(footerCity);
	footer.appendChild(footerCountry);
	// Return footer element
	return footer;
}