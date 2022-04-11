
//import { Autor } from "./Autor.js";
//import { Texto } from "./Texto.js";
//import { adicionaPublicacoesNoAutor } from "./adicionaPublicacoesAutor.js";
import { textDataBase } from "./textDataBase.js"
import { searchByTitle } from "./searchByTitle.js";

//import { Research } from "./searchByTitle.js"
import { showText } from "./showText.js";


// exercicio: buscar por um termo e mostrar na tela: -----------------------------------------------------

let resultado = searchByTitle(textDataBase, "trans");

showText(textDataBase);

var $ = document.querySelector.bind(document);

const searchButton = $("input.search__button"); // botão

// ao clicar enter rodar a função searchByTitle (opcional por enquanto)
searchButton.addEventListener("click", function (e) {
	e.preventDefault(); // para não enviar o formulário

	//console.log("funcionou");
	// declarar mais uma variável pra guardar os textos filtrados
	var inputSearch = $("input.search__searchBar").value; // input de busca (esse é o meu termo buscado)
	console.log(inputSearch);

	const resultOfSearch = searchByTitle(textDataBase, inputSearch);
	//console.log(resultOfSearch);
	//console.log(showText(resultOfSearch))
	showText(resultOfSearch);
	console.log(showText(resultOfSearch));

});

//2ª parte
// criar uma nova versão do site com React.



// exercício: fazer a função do filtro: -----------------------------------------------------
// - ok? - pensar no filtro (filtrar por categoria e descrição)
// - ok? - na busca pela descrição

// - para adicionar o evento de click:
// usar o js pra adicionar a classe active no html e usa ela no css pra fazer a mudança do filtro. 
// pedir ajuda no CSS e HTML


// - ok +/- - aprimorar o HTML e CSS (utilizar o BEM para criação de classes)

// - não entendi o que é (é a query string?) - quando fizer a busca colocar o termo buscado com uma query na URL
// fazer a pagina index se conectar com a página search.html


// - ok - organizar os arquivos em cada .js 



//exercicios 2  --------------



// criar a classe
// criada no arquivo searchbytitle, mas não foi importada

// adicionar as funções como métodos da classe
// adicionado mas não foi importado, não funciona

// pegar as checkbox selecionadas

var checkboxs = document.getElementsByClassName("checkbox");

var checkboxLesbica = document.getElementsByName("lesbica");
var checkboxGay = document.getElementsByName('gay')
var checkboxBissexualidade = document.getElementsByName("bissexualidade");
var checkboxTravestis = document.getElementsByName("travestis");
var checkboxTransexuais = document.getElementsByName("transexuais");
var checkboxPessoasTrans = document.getElementsByName("pessoasTrans");
var checkboxPansexualidade = document.getElementsByName("pansexualidade");
var checkboxArtigos = document.getElementsByName('artigos')
var checkboxDissertacoes = document.getElementsByName("dissertacoes");
var checkboxEscritosPorTrans = document.getElementsByName("escritosPorTrans");

var checkboxEscritoPorLGBT = document.getElementsByName("escritoPorLGBT");

var checkboxAssexualidade = document.getElementsByName("assexualidade");

var checkboxDiversidade = document.getElementsByName("diversidade");

var checkboxLgbtfobia = document.getElementsByName("lgbtfobia");
// adicionar na classe essas checkbox

// criar um banco de textos ? um array com os textos?
// (fazer ao contrário)

// - ok - fazer 3 exercícios do hacker rank

// pensar no filtro (filtrar por categoria e descrição)
// na busca pela descrição


// adicionando a classe active -----------------
/*var btn = document.querySelector(".fa");
btn.addEventListener(
	"click",
	function addActive() {
		document.querySelector(".fa").createElement(".active");
		console.log('clicou');
	},
	false
);*/


//function addActive() {
	//console.log("clicou");
	//document.querySelector(".fa").classList.add(".active");
	//var isso = this;
	//element.createElement(".active")
	
	//document.querySelector("float__btn").addEventListener(click);
	//document.createElement(".active")
//}

//active();


// modal


function openModal() {
	// abrir modal
	// adicionar a classe active ao modal
	const filtro = document.querySelector("filter__ret--purple")
	const classActive = filtro.classList
			
	filtro.addEventListener("click", function () {
		const result = classActive.toggle("active")

		if (result) {
			classActive.add("active");
				
		} else {
			//classActive.remove("active");

		}
	})
}

	/*close() {
		// fechar Modal
		// remover a classe active no modal
		document.querySelector("filter__ret--purple").classList.remove("active");
	},*/
	// desafio: transformar essas duas funções em uma só com o toogle() no lugar do .add e .remove


/*const span = document.querySelector("span");
const classes = span.classList;

span.addEventListener("click", function () {
	const result = classes.toggle("c");

	if (result) {
		span.textContent = `'c' added; classList is now "${classes}".`;
	} else {
		span.textContent = `'c' removed; classList is now "${classes}".`;
	}
});*/