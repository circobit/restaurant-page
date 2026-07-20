// Images imports
import milanesaImg from '../assets/images/menu/1-milanesas.png';
import bifeImg from '../assets/images/menu/2-bife-de-chorizo.png';
import provoletaImg from '../assets/images/menu/3-provoleta.png';
import empanadasImg from '../assets/images/menu/4-empanadas.png';
import matambreImg from '../assets/images/menu/5-matambre-a-la-pizza.png';
import asadoImg from '../assets/images/menu/6-asado-de-tira.png';
import revueltoGramajoImg from '../assets/images/menu/7-revuelto-gramajo.png';
import sorrentinosImg from '../assets/images/menu/8-sorrentino-jyq.png';
import mollejasImg from '../assets/images/menu/9-mollejas-al-limon.png';
import choripanImg from '../assets/images/menu/10-choripan.png';
import flanImg from '../assets/images/menu/11-flan.png';
import panquequesImg from '../assets/images/menu/12-panqueque.png';

// Menu items
const menuItems = [
	{ name: "Milanesa a la Napolitana", description: "The ultimate Argentine comfort food. A crispy, golden breaded beef cutlet topped with thick-cut ham, rich tomato sauce, melted mozzarella, and a sprinkle of oregano. Served with a mountainside of French fries.", image: milanesaImg },
	{ name: "Bife de Chorizo", description: "The king of the parrilla. A thick, juicy 400g cut of premium grass-fed Argentine beef, seared over charcoal and wood to lock in maximum flavor and tenderness.", image: bifeImg },
	{ name: "Provoleta a la Parrilla", description: "A thick slab of provolone cheese grilled until crisp and golden on the outside, melted and stretchy on the inside. Drizzled with olive oil, oregano, and crushed red pepper.", image: provoletaImg },
	{ name: "Empanadas Salteñas", description: "Classic hand-folded pastries filled with knife-cut beef, sautéed onions, hard-boiled egg, and traditional spices. Baked in a wood-fired oven until golden brown.", image: empanadasImg },
	{ name: "Matambre a la Pizza", description: "Tenderized flank steak cooked over the grill and treated like a pizza crust: topped with savory tomato sauce, melted mozzarella cheese, fresh tomatoes, and black olives.", image: matambreImg },
	{ name: "Asado de Tira (Short Ribs)", description: "The backbone of any true Argentine barbecue. Cross-cut beef short ribs, slow-grilled over charcoal to yield a rich, smoky flavor and fall-apart meat.", image: asadoImg },
	{ name: "Revuelto Gramajo", description: "A legendary Buenos Aires late-night staple. Crispy, ultra-thin shoestring potatoes scrambled with fresh eggs, diced ham, and sweet green peas.", image: revueltoGramajoImg },
	{ name: "Sorrentinos de Jamón y Queso", description: "Round, oversized Argentine-style ravioli stuffed with a generous mix of cooked ham and melted cheese, smothered in a slow-simmered beef, tomato, and red wine sauce (tuco).", image: sorrentinosImg },
	{ name: "Mollejas al Limón", description: "A coveted delicacy at the parrilla. Veal sweetbreads grilled over high heat until delightfully crispy on the outside, rich and tender inside, finished with a generous squeeze of fresh lemon juice.", image: mollejasImg },
	{ name: "Choripán con Chimichurri", description: "The undisputed street food classic: grilled artisan pork sausage served butterflied inside a crusty baguette, slathered with our homemade garlic and herb chimichurri sauce.", image: choripanImg },
	{ name: "Flan Mixto", description: "Classic homemade vanilla custard cooked in a caramel-coated mold, served with generous, unscripted dollops of thick Argentine dulce de leche and fresh whipped cream.", image: flanImg },
	{ name: "Panqueque con Dulce de Leche", description: "Warm, thin crêpes stuffed to the brim with rich dulce de leche, rolled up and caramelized on top with a hot iron plate for a light, crispy sugar crunch.", image: panquequesImg }
];

export default function loadMenu() {
	// Get #content div
	const menuContent = document.createElement("div");
	menuContent.className = "menuContent";

	// Create menuTitle
	const menuTitle = document.createElement("div");
	menuTitle.className = "menuTitle";
	menuTitle.textContent = "Taste the flavor of our land";

	// Create menuGrid div
	const menuGrid = document.createElement("div");
	menuGrid.className = "menuGrid";

	// Create cards based on items within menuItems
	menuItems.forEach((item) => {
		const gridItem = document.createElement("div");
		gridItem.className = "gridItem";
		const itemImg = document.createElement("img");
		itemImg.className = "itemImg";
		itemImg.src = item.image;
		const itemTitle = document.createElement("p");
		itemTitle.className = "itemTitle";
		itemTitle.textContent = item.name;
		const itemDescription = document.createElement("p");
		itemDescription.className = "itemDescription";
		itemDescription.textContent = item.description;
		gridItem.appendChild(itemImg);
		gridItem.appendChild(itemTitle);
		gridItem.appendChild(itemDescription);
		menuGrid.append(gridItem);
	})

	menuContent.appendChild(menuGrid);

	return menuContent;
}