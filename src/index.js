
//import { Autor } from "./Autor.js";
//import { Texto } from "./Texto.js";
//import { adicionaPublicacoesNoAutor } from "./adicionaPublicacoesAutor.js";
import { textDataBase } from "./textDataBase.js"
import { searchByTitle } from "./searchByTitle.js"
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