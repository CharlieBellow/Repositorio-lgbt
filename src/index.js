//import { createRequire } from "module";
//const require = createRequire(import.meta.url);

import { Autor } from "./Autor.js";
//autor = require("./Autor");
import { Texto } from "./Texto";
//texto = require("./Texto");

//import { tentativaDaFuncao } from "./tentativaDaFuncao";
//tentativaDaFuncao = require("./tentativaDaFuncao.js")
	
/* Autor ------------------------------------------------------------------------------------ */

/*export *//*class Autor {
	constructor(nome, sobrenome, formacao, publicacoes) {
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.formacao = formacao;
		this.publicacoes = publicacoes;
	}
}*/


/* Texto ----------------------------------------------------------------------------------- */

/*export *//*class Texto {
	constructor(
		titulo,
		autor,
		ano,
		tipo,
		categoria,
		link,
		citacao,
		avaliacao,
		descricao
	) {
		this.titulo = titulo;
		this.autor = autor;
		this.ano = ano;
		this.tipo = tipo;
		this.categoria = categoria;
		this.link = link;
		this.citacao = citacao;
		this.avaliacao = avaliacao;
		this.descricao = descricao;
	}

	citarIndireta() {
		// Scote (2020, p. 0)
		// receber o sobrenome do autor
		return `${this.autor} (${this.ano}, p. 0)`;
	}

	citarDireta() {
		// (SCOTE, 2020, p. 0)

		return `(${this.autor.toUpperCase()}, ${this.ano}, p. 0)`;
	}
}*/


/* Index ------------------------------------------------------------------------------------------------ */
const scote = new Autor("Fausto", "Scote", "Ciências Sociais");
const ceccarelli = new Autor("Paulo", "Ceccarelli", "Psicanalista");
const moira = new Autor("Amara", "Moira", "filosofa");
const jesus = new Autor("Jaqueline", "Jesus", "filosofa");
const vergueiro = new Autor("Viviane", "Vergueiro", "filosofa");
const vieira = new Autor("Helena", "Vieira", "filosofa");

const textoTransformandoAUniversidade = new Texto(
	"Trans-formando a universidade: um estudo sobre o acesso e a permanência de pessoas Trans no Ensino Superior",
	scote,
	2020,
	"artigo",
	"trans",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa",
	"esse é um texto que fala sobre as pessoas trans na universidade. esse é um texto que fala sobre as pessoas trans na universidade.esse é um texto que fala sobre as pessoas trans na universidade "
);

const textoSeraQueTemosDireito = new Texto(
	"SERÁ QUE TEMOS MESMO O DIREITO A UNIVERSIDADE ? O DESAFIO DO ACESSO E PERMANÊNCIA DE PESSOAS TRANSEXUAIS NO ENSINO SUPERIOR",
	scote,
	2012,
	"artigo",
	"trans",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa",
	"esse texto fala sobre o acesso e a permanência de pessoas trans na universidade.esse texto fala sobre o acesso e a permanência de pessoas trans na universidadeesse texto fala sobre o acesso e a permanência de pessoas trans na universidade"
);

const textoUmEstudoEtnografico = new Texto(
	"Um estudo Etnográfico da Prostituição Masculina e locais fechados",
	scote,
	2021,
	"dissertação",
	"trans",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa",
	"esse texto fala da Prostituição masculina e seus desafios. esse texto fala da Prostituição masculina e seus desafios"
);

const textoAInvencaoDaHomossexualidade = new Texto(
	"A invenção da Homossexualidade",
	ceccarelli,
	2015,
	"artigo",
	"homossexuais",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa",
	"nesse texto Ceccarelli discorre sobre a história da homossexualidade. nesse texto Ceccarelli discorre sobre a história da homossexualidade.nesse texto Ceccarelli discorre sobre a história da homossexualidade."
);

const textoUmProblemaDeGenero = new Texto(
	"Um problema de gênero",
	"butler",
	2021,
	"livro",
	"trans",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa",
	"um texto clássico de judith Butler. um texto clássico de judith Butler.um texto clássico de judith Butler.um texto clássico de judith Butler.um texto clássico de judith Butler.um texto clássico de judith Butler."
);

const textoAExperienciaDaCidade = new Texto(
	"A experiencia da cidade para pessoas LGBTQIA",
	moira,
	2000,
	"materia",
	"LGBTQIA+",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa",
	"esse texto fala sobre a experiência da cidade para pessoas trans. esse texto fala sobre a experiência da cidade para pessoas trans"
);

const textoAProstituicaoComo = new Texto(
	"A prostituição como trincheira trans",
	moira,
	2001,
	"materia",
	"trans",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa",
	"discorrendo sobre as dificuldades enfrentadas pelas pessoas trans, a autora destaca a prostituição como alternativa..."
);

const textoAutobiografiasTrans = new Texto(
	"Autobiografias trans",
	moira,
	2001,
	"materia",
	"trans",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa",
	"esse texto trans várias referências sobre pessoas trans, a exemplo de João Nery"
);

const textoTransSexualidade = new Texto(
	"Trans Sexualidade",
	vergueiro,
	2015,
	"artigo",
	"trans",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa",
	"tudo que você precisa saber sobre transexualidade. tudo que você precisa saber sobre transexualidade. tudo que você precisa saber sobre transexualidade"
);

const textoTransfeminismo = new Texto(
	"Transfeminismo",
	vieira,
	2014,
	"artigo",
	"trans",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa",
	"transfeminismo, um tema necessário dentro dos estudos de gênero. transfeminismo, um tema necessário dentro dos estudos de gênero. transfeminismo, um tema necessário dentro dos estudos de gênero"
);


let textDataBase = [];
// adicionando os textos criados dentro do array
textDataBase.push(
	textoTransformandoAUniversidade,
	textoSeraQueTemosDireito,
	textoUmEstudoEtnografico,
	textoAInvencaoDaHomossexualidade,
	textoUmProblemaDeGenero,
	textoAExperienciaDaCidade,
	textoAProstituicaoComo,
	textoAutobiografiasTrans,
	textoTransSexualidade,
	textoTransfeminismo
);


/* TentativaDaFuncao ------------------------------------------------------------------------------------------- */


function searchByTitle(a, searchTerm) {
	let newArray = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i].titulo.toLowerCase().includes(searchTerm.toLowerCase())) {
			newArray.push(a[i]);
		}
	}
	return newArray;
}

let resultado = searchByTitle(textDataBase, "trans");
//console.log(searchByTitle(resultado, "trans "));


// barra de busca: --------------------------------------------
//tentar fazer em inglês

// fazer a lista aparecer na tela com o array textdatabase

// pra criar os elementos
//document.createElement("div");

// posso fazer uma função que percorrer o array textdataBase e vai adicionando os títulos lá no html. aí eu comento o que já tem e crio de novo.
// coloca a div, a tag h3, a tag a href, e o p pra descrição
// ou adicionar manualmente..

function showText(array) {
	// tentativa de verificar se existe div dentro do aside, se tiver ele apaga enquanto existir. se não tiver ele executa o código da função que mostra o texto

	// atualizar a tela quando pesquisar e chamar a função que adiciona os títulos filtrados.
	if (document.querySelector("aside.bloco").querySelector("div")) {
		while (document.querySelector("aside.bloco").querySelector("div")) {
			document
				.querySelector("aside.bloco")
				.removeChild(
					document.querySelector("aside.bloco").querySelector("div")
				);
		}
	}

	for (let index = 0; index < array.length; index++) {
		let text = array[index];

		const html = `
			<h3><a class="title" href="./texto/texto.html">${text.titulo}</a> <p class="icon">4.5</p></h3>
			<p class="description">${text.descricao}</p> <br> <br>
		`;

		const aside = document.querySelector("aside.bloco");

		const textDiv = document.createElement("div");

		textDiv.innerHTML = html;

		aside.appendChild(textDiv);
	}
}

showText(textDataBase);


// filtrar os textos no campo de busca

// usar  a função searchByTitle;

// pegar a barra de busca 



	var $ = document.querySelector.bind(document);

const searchButton = $('button.button'); // botão

// ao clicar enter rodar a função searchByTitle (opcional por enquanto)
searchButton.addEventListener("click", function (e) {
	e.preventDefault(); // para não enviar o formulário

	//console.log("funcionou");
	// declarar mais uma variável pra guardar os textos filtrados
	var inputSearch = $("input.barraDeBusca").value; // input de busca (esse é o meu termo buscado)
	console.log(inputSearch);

	const resultOfSearch = searchByTitle(textDataBase, inputSearch);
	//console.log(resultOfSearch);
	//console.log(showText(resultOfSearch))
	showText(resultOfSearch);
	console.log(showText(resultOfSearch));

	/*	setTimeout(function () {
		window.location.reload(1);
	}, 10000);*/
});


//2ª parte
// criar uma nova versão do site com React.

//module.exports = index;


// pensar no filtro (filtrar por categoria e descrição)
// na busca pela descrição
// aprimorar o HTML e CSS
// fazer a pagina index se conectar com a página repos.html
// quando fizer a busca colocar o termo buscado com uma query na URL
