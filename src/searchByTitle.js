export function searchByTitle(a, searchTerm) {
	let newArray = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i].titulo.toLowerCase().includes(searchTerm.toLowerCase())) {
			newArray.push(a[i]);
		}
	}
	return newArray;
}


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