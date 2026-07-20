export default function loadHome() {
	const homeDiv = document.createElement("div");
    homeDiv.className = "homeContent";

	// Headline and Copy
	const headlineDiv = document.createElement("div");
	headlineDiv.className = "headlineDiv";
    const headline = document.createElement("h1");
    headline.textContent = "The Heart of Argentine Tradition";
    const copy = document.createElement("p");
	copy.className = "headlineCopy";
    copy.textContent = "Authentic flavors, charcoal fires, and the unforgettable spirit of a classic Buenos Aires bodegón.";
	headlineDiv.appendChild(headline);
	headlineDiv.appendChild(copy);

	// Hero and Copy
	const heroAndCopyDiv = document.createElement("div");
	heroAndCopyDiv.className = "heroAndCopyDiv";
	const hero = document.createElement("h2");
    hero.textContent = "Welcome to Our Table";
    const copyHero = document.createElement("p");
    copyHero.textContent = "Step inside San Telmo and leave the noise of the city behind. Inspired by the vibrant cobblestone streets and vintage charm of Argentina's most iconic neighborhood, our restaurant brings the true essence of a traditional bodegón to life. From the sizzle of premium grass-fed cuts on our parrilla to the aroma of freshly baked empanadas, every detail is designed to feel like home. Here, meals aren't rushed—they are celebrated over deep conversations, endless laughter, and glasses filled with rich Malbec.";
	heroAndCopyDiv.appendChild(hero);
	heroAndCopyDiv.appendChild(copyHero);

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

	// The Grid
	const theGridTitle = document.createElement("p");
	theGridTitle.className = "theGridTitle";
	theGridTitle.textContent = "The Grill (La Parrilla)";
	const theGridCopy = document.createElement("p");
	theGridCopy.textContent = "Hand-selected Argentine beef, slow-cooked over wood and charcoal by master grillers (parrilleros) who respect the craft.";
	gridItemA.appendChild(theGridTitle);
	gridItemA.appendChild(theGridCopy);
	// Homemade Classics
	const homemadeTitle = document.createElement("p");
	homemadeTitle.className = "homemadeTitle";
	homemadeTitle.textContent = "Homemade Classics";
	const homemadeCopy = document.createElement("p");
	homemadeCopy.textContent = "Recipes passed down through generations. Generous portions meant to be shared, just like Sunday family dinners.";
	gridItemB.appendChild(homemadeTitle);
	gridItemB.appendChild(homemadeCopy);
	// Wine & Spirit
	const wineAndSpiritTitle = document.createElement("p");
	wineAndSpiritTitle.className = "wineAndSpiritTitle";
	wineAndSpiritTitle.textContent = "Wine & Spirit";
	const wineAndSpiritCopy = document.createElement("p");
	wineAndSpiritCopy.textContent = "A curated selection of Mendoza’s finest wines, craft vermouths, and classic cocktails to pair with every bite.";
	gridItemC.appendChild(wineAndSpiritTitle);
	gridItemC.appendChild(wineAndSpiritCopy);

	// Append childs to homeDiv
    homeDiv.appendChild(headlineDiv);
	homeDiv.appendChild(heroAndCopyDiv);
	homeDiv.appendChild(gridHighlights);

    return homeDiv;
}