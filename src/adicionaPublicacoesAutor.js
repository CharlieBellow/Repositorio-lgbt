/*import { createRequire } from "module";
const require = createRequire(import.meta.url);*/

import { Autor } from "./Autor.js";
import { Texto } from "./Texto.js";
import { index } from "./index.js";
//const index = require("./index.js");



	// depois quero fazer um laço de repetição pra automatizar isso e a função vai percorrer todos os autores e comparar com os textos e vai adicionar o titulo do novo texto inserido nas publicações do autor. (acho que isso pode ser feito já no momento de adicionar um novo texto ou um novo autor)
	//OBS; se criar o texto já inclui o título ns ppublicações do autor, se criar um autor, nao necessariamente ele precisa ter um título já pblicado, ele só foi criado e a função de inserir as publicaoes vai ser chamada só qd o texto for adicionado
	export function adicionaPublicacoesNoAutor(autorBuscado, texto) {
		if (autorBuscado.sobrenome === texto.autor.sobrenome) {
			// preciso implementar uma função que compare se o texto já consta na lista. se não constar, ele adiciona, se contar ele sai da função
			if (autorBuscado.publicacoes.includes(texto.titulo)) {
				return console.log("título já existente");
			} else {
				autorBuscado.publicacoes.push(texto.titulo);
				return console.log(
					`título adicionado:
				`,
					autorBuscado.publicacoes
				);
			}
		} else {
			console.log("autor não encontrado");
			return;
		}
	}



//adicionaPublicacoesNoAutor(scote, texto1);

// exportando esse arquivo que contém a função de adicionar publicacoes

/*module.exports = adicionaPublicacoesNoAutor;*/
