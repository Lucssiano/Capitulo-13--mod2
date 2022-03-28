import * as jsonfile from 'jsonfile';

class Product {
	id: number;
	name: string;
	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}
}

class ProductCollection {
	async getAll() {
		// Devuelve todos los productos
		// const products = jsonfile.readFile('./products.json');
		// products.then((productos) => productos);
		// products.catch((error) => console.error(error, 'falló'));

		// return products;
		const products = await jsonfile.readFile('./products.json');
		return products;
	}
	async getById(id: number) {
		// Devuelve el producto con el id ingresado
		const allProducts = await this.getAll();
		return allProducts.find((prod) => prod.id === id);
		// return this.getAll().then((productos) => productos.find((product) => product.id === id));
	}
}

export { Product, ProductCollection };
