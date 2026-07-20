export default function loadAbout() {
	// Get #content div
	const aboutContent = document.createElement("div");
	aboutContent.className = "aboutContent";

	// Headline
	const headlineDiv = document.createElement("div");
	const headlineTitle = document.createElement("h1");
	headlineTitle.className = "headlineTitle";
	headlineTitle.textContent = "About San Telmo";
	const headlineCopy = document.createElement("div");
	headlineCopy.className = "headlineCopy";
	headlineCopy.textContent = "A Tribute to Argentine Culinary Heritage";
	headlineDiv.appendChild(headlineTitle);
	headlineDiv.appendChild(headlineCopy);

	// Our story
	const heroDiv = document.createElement("div");
	heroDiv.className = "heroDiv";
	const ourStoryTitle = document.createElement("h2");
	ourStoryTitle.className = "ourStoryTitle";
	ourStoryTitle.textContent = "Our Story";
	const ourStoryCopy = document.createElement("div");
	ourStoryCopy.className = "ourStoryCopy";
	ourStoryCopy.textContent = "Founded by the Rossi family, San Telmo captures the nostalgic charm and vibrant energy of the historic Buenos Aires neighborhood it’s named after. A true bodegón is far more than just a restaurant; it is a lively neighborhood sanctuary where portions are generous, wine flows freely, and every guest is welcomed like family. We source our beef directly from the Pampas and honor the time-tested barbecue techniques passed down by generations of parrilleros. From long family lunches to late-night gatherings over a bottle of Malbec, San Telmo was built to keep our proudest traditions alive.";
	heroDiv.appendChild(ourStoryTitle);
	heroDiv.appendChild(ourStoryCopy);

	// Grid Highlights and Div items
	const gridHighlights = document.createElement("div");
	gridHighlights.className = "gridHighlights";
	const gridItemA = document.createElement("div");
	gridItemA.className = "gridItem";
	const gridItemB = document.createElement("div");
	gridItemB.className = "gridItem";
	const gridItemC = document.createElement("div");
	gridItemC.className = "gridItem";
	gridHighlights.appendChild(gridItemA);
	gridHighlights.appendChild(gridItemB);
	gridHighlights.appendChild(gridItemC);

	//=== Grid Items ===//

	// Traditional Parrilla
	const tradParrillaTitle = document.createElement("p");
	tradParrillaTitle.className = "tradParrillaTitle";
	tradParrillaTitle.textContent = "Traditional Parrilla";
	const tradParrillaCopy = document.createElement("p");
	tradParrillaCopy.textContent = "100% grass-fed beef grilled over slow-burning wood and charcoal for authentic flavor.";
	gridItemA.appendChild(tradParrillaTitle);
	gridItemA.appendChild(tradParrillaCopy);
	// Abundant Portions
	const portionsTitle = document.createElement("p");
	portionsTitle.className = "portionsTitle";
	portionsTitle.textContent = "Abundant Portions";
	const portionsCopy = document.createElement("p");
	portionsCopy.textContent = "Recipes passed down through generations. Generous portions meant to be shared, just like Sunday family dinners.";
	gridItemB.appendChild(portionsTitle);
	gridItemB.appendChild(portionsCopy);
	// The spirit of sobremesa
	const sobremesaTitle = document.createElement("p");
	sobremesaTitle.className = "sobremesaTitle";
	sobremesaTitle.textContent = "The Spirit of Sobremesa";
	const sobremesaCopy = document.createElement("p");
	sobremesaCopy.textContent = "We never rush your meal. Stay, talk, and enjoy the post-dinner conversation.";
	gridItemC.appendChild(sobremesaTitle);
	gridItemC.appendChild(sobremesaCopy);

	aboutContent.appendChild(headlineDiv);
	aboutContent.appendChild(heroDiv);
	aboutContent.appendChild(gridHighlights);

	return aboutContent;
}