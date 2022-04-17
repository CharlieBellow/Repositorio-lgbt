
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


// pegar as checkbox selecionadas

var checkboxes = document.getElementsByClassName("checkbox");

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

// CHECKBOXES -----------------------------------------------
// pegando o valor do checkbox

/*
function getValues() {
  var pacote = document.querySelectorAll('[name=Pacote]:checked');
  var values = [];
  for (var i = 0; i < pacote.length; i++) {
    // utilize o valor aqui, adicionei ao array para exemplo
    values.push(pacote[i].value);
  }
  alert(values);
}

// adicionar ação ao clique no checkbox
var checkboxes = document.querySelectorAll('[name=Pacote]');
for (var i = 0; i < checkboxes.length; i++) {
  // somente nome da função, sem executar com ()
  checkboxes[i].addEventListener('click', getValues, false);
}
<input type="checkbox" id="Pacote_i" name="Pacote" value="Pacote i"/>
<input type="checkbox" id="Pacote_ii" name="Pacote" value="Pacote ii"/>
<input type="checkbox" id="Pacote_iii" name="Pacote" value="Pacote iii"/>

*/


//var checked = document.querySelector("[name=lesbica]:checked");

//function getValues() {
//	if (checked) {
//		alert('pegou');
//	}
////
//}

	//checkboxes.addEventListener("click", getValues(), false);


// adicionar na classe essas checkbox

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
		const filtro = document.querySelector("btn");
		const classActive = filtro.classList;

		filtro.addEventListener("submit", function () {
			const result = classActive.toggle("active");

<<<<<<< HEAD
/*function openModal() {
	// abrir modal
	// adicionar a classe active ao modal
	const filtro = document.querySelector("btn")
	const classActive = filtro.classList
			
	filtro.addEventListener("submit", function () {
		const result = classActive.toggle("active")

		if (result) {
			classActive.add("active");
				
		} else {
			//classActive.remove("active");

		}
	})
}*/
=======
			if (result) {
				classActive.add("active");
			} else {
				//classActive.remove("active");
			}
		});
	}
>>>>>>> b134f53 (responsivo ok)

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

