export function searchByTitle(a, searchTerm) {
	let newArray = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i].titulo.toLowerCase().includes(searchTerm.toLowerCase())) {
			newArray.push(a[i]);
		}
	}
	return newArray;
}

// criar a classe
// pegar as checkbox selecionadas
// adicionar na classe essas checkbox
// adicionar as funções como métodos da classe
// criar um baco de textos
// (fazer ao contrário)

// fazer 3 exercícios do hacker rank 

// pensar no filtro (filtrar por categoria e descrição)
// na busca pela descrição

export function searchByDescription(a, searchTerm) {
	let newArray = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i].descricao.toLowerCase().includes(searchTerm.toLowerCase())) {
			newArray.push(a[i]);
		}
	}
	return newArray;
}

export function searchByCategory(a, searchTerm) {
	let newArray = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i].categoria.toLowerCase().includes(searchTerm.toLowerCase())) {
			newArray.push(a[i]);
		}
	}
	return newArray;
}