//import { Autor } from "./Autor.js";
//autor = require("./Autor");
//import { Texto } from "./Texto.js";
//texto = require("./Texto");
//
//import { index } from "./index.js"
//index = require("./index.js");
//


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
	"qualqer coisa"
);

const textoSeraQueTemosDireito = new Texto(
	"SERÁ QUE TEMOS MESMO O DIREITO A UNIVERSIDADE ? O DESAFIO DO ACESSO E PERMANÊNCIA DE PESSOAS TRANSEXUAIS NO ENSINO SUPERIOR",
	scote,
	2012,
	"artigo",
	"trans",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa"
);

const textoUmEstudoEtnografico = new Texto(
	"Um estudo Etnográfico da Prostituição Masculina e locais fechados",
	scote,
	2021,
	"dissertação",
	"trans",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa"
);

const textoAInvencaoDaHomossexualidade = new Texto(
	"A invenção da Homossexualidade",
	ceccarelli,
	2015,
	"artigo",
	"homossexuais",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa"
);

const textoUmProblemaDeGenero = new Texto(
	"Um problema de gênero",
	"butler",
	2021,
	"livro",
	"trans",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa"
);

const textoAExperienciaDaCidade = new Texto(
	"A experiencia da cidade para pessoas LGBTQIA",
	moira,
	2000,
	"materia",
	"LGBTQIA+",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa"
);

const textoAProstituicaoComo = new Texto(
	"A prostituição como trincheira trans",
	moira,
	2001,
	"materia",
	"trans",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa"
);

const textoAutobiografiasTrans = new Texto(
	"Autobiografias trans",
	moira,
	2001,
	"materia",
	"trans",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa"
);

const textoTransSexualidade = new Texto(
	"Trans Sexualidade",
	vergueiro,
	2015,
	"artigo",
	"trans",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa"
);

const textoTransfeminismo = new Texto(
	"Transfeminismo",
	vieira,
	2014,
	"artigo",
	"trans",
	"qualqer coisa",
	"qualqer coisa",
	"qualqer coisa"
);




/* 
		Crie um array "textDatabase" com 10 Textos com diferentes títulos. Depois crie uma função "searchByTitle" que recebe como argumentos um array "a", e uma string "searchTerm", e retorna um novo array, contendo somente os Textos cujo título COMEÇA COM o "searchTerm" */
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

function searchByTitle(a, searchTerm) {
	let newArray = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i].titulo.toLowerCase().includes(searchTerm.toLowerCase())) {
			newArray.push(a[i]);
		}
	}
	return newArray;
}


let resultado = searchByTitle(textDataBase, "trans")

console.log(searchByTitle(resultado, "trans "));



// barra de busca:

//tentar fazer em inglês

//ver se  título contem alguma palavra.
//.includes()

// colocar com o case sensive (não se importar com a capitalização)[

// colocar o termo buscado em tolowercase e comparar com o texto em to lowerCase


// fazer a lista aparecer na tela com o array textdatabase


//module.exports = tentativaDaFuncao;





