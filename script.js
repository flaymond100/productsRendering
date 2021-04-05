let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000],
		brands: ['hp','huawei']
	},
	{
		type: 'laptop',
		price: [50,1500],
		brands: ['hp','huawei','lenovo']
	},
	{
		type: 'smartphone',
		price: [80,2000],
		brands: ['hp','lenovo']
	},
	{
		type: 'tablet',
		price: [20,1300],
		brands: ['lenovo']
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100,
		colors: ['#c62828','#ce93d8']
	},
	{
		type: 'eyeshadow',
		price: 50,
		colors: ['#ff8a80','#f50057','#c62828']
	},
	{
		type: 'lipstick',
		price: 80,
		colors: ['#f50057','#c62828']
	},
	{
		type: 'nail-polish',
		price: 200,
		colors: ['#c62828','#ce93d8']
	},
	{
		type: 'perfume',
		price: 300,
	}
];

let kitchenProducts = [
	{
		type: 'grater',
		price: 10,
		ingredients: [
			{
				name: 'Butter',
				count: '100 g'
			},
			{
				name: 'Bread',
				count: '200 g'
			},
			{
				name: 'Cheese',
				count: '500 g'
			}
		]},
	{
		type: 'pastry-bag',
		price: 25,
		ingredients: [
			{
				name: 'Powdered sugar',
				count: '210 g'
			},
			{
				name: 'Almond flour',
				count: '1 cup'
			},
			{
				name: 'Salt',
				count: '1 teaspoon'
			},
			{
				name: 'Egg whites',
				count: '3'
			},
			{
				name: 'Granulated sugar',
				count: '50 g'
			},
			{
				name: 'Pink gel food coloring',
				count: '2 drops'
			}
		]},
	{
		type: 'scale',
		price: 5,
		ingredients: [
			{
				name: 'Active dry yeast',
				count: '1 tablespoon'
			},
			{
				name: 'Sugar',
				count: '1 tablespoon'
			},
			{
				name: 'Salt',
				count: '1 tablespoon'
			},
			{
				name: 'Warm water',
				count: '2 cups'
			}
		]},
	{
		type: 'whisk',
		price: 15,
		ingredients: [
			{
				name: 'Freshly squeezed lemon juice',
				count: '2 tablespoon'
			},
			{
				name: 'Baking apples like Golden Delicious, Cortland, or Mutsu',
				count: '3 pounds'
			},
			{
				name: 'Sugar, plus more for sprinkling on the pie',
				count: '2/3 cup'
			},
			{
				name: 'Unsalted butter',
				count: '1/4 cup'
			},
			{
				name: 'Ground cinnamon',
				count: '1/4 teaspoon'
			},
			{
				name: 'large egg, lightly beaten',
				count: '1'
			},
]}];


class Category{
	constructor(category, products){
		this.category = category;
		this.products = products;
	}

	render(){
		let categoryBlock = `<section data-product-type="${this.category}" class="flex-section">
			<h2>Category: ${this.category}</h2>
			<div class="flex-products">${
				this.products
				.map(product=>this.renderProduct(product))
				.join('')
			}</div>
		</section><hr>`;
		document.write(categoryBlock);
	}

	renderProduct(product){
		return `<div class="flex-card"><img src="images/${this.category}/${product.type}.svg" width="50">
		<div class="flex-text">Product: <b>${product.type}</b></div>
		<div class="flex-text">Price: <b>${product.price}</b></div>
		
			${this.renderParts(product)}
		</div>`;
	}
}

class Kitchen extends Category{
	constructor(category, products){
		super(category, products);
	}

	renderParts(product){
		return `<hr><h3 style="margin-left: 20px;">Ingredients:</h3><img src="images/${this.category}/ingredients/${product.type}.svg" width="50"><ul>${
			product.ingredients
				.map(ingredient=>`<li>${ingredient.name}: ${ingredient.count}</li>`)
				.join('')
			}</ul>`
	}
}

class Devices extends Category{
	constructor(category, products){
		super(category, products);
	}

	renderParts(product){
		return `<hr><div class="brands">${
			product.brands
				.map(brand=>`<div><img src="images/${this.category}/devicesBrands/${brand}.svg"></div>`)
				.join('')
			}</div>`
	}
}

class Cosmetics extends Category{
	constructor(category, products){
		super(category, products);
	}

	renderParts(product){
		if (Array.isArray(product.colors)){
			return `<hr><div class="colors">${
				product.colors
					.map(color=>`<div class="cosmetics-colors"style="background-color:${color};"></div>`)
					.join(' ')
				}</div>`
		} else {
			return ` `
		}
	}
}

let kitchen = new Kitchen("Kitchen",kitchenProducts);
let devices = new Devices("Devices",devicesProducts);
let cosmetics = new Cosmetics("Cosmetics",cosmeticsProducts);

kitchen.render();
devices.render();
cosmetics.render();