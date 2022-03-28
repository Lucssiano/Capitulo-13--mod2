import * as minimist from 'minimist';
import { ProductController } from './controllers';

function parseaParams(argv) {
	const resultadoMinimist = minimist(argv);
	if (resultadoMinimist.search) {
		return { search: resultadoMinimist.search };
	} else {
		return {};
	}
}

async function main() {
	const argumentos = process.argv.slice(2);
	const argumentosParseados = parseaParams(argumentos);
	const newProductController = new ProductController();
	// newProductController
	// 	.processOptions(argumentosParseados)
	// 	.then((resultado) => console.log(resultado || 'No se encontraron resultados'));
	const opcionesProcesadas = await newProductController.processOptions(argumentosParseados);
	console.log(opcionesProcesadas || 'No se encontraron resultados');
}

main();
