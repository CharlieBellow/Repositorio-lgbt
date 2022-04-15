

/*export class Research {
	constructor() {
		// erro ao tentar construir
	}

	// se quiser pesquisar por título, chama a função de pesquisar por título
	searchByTitle(a, searchTerm) {
		let newArray = [];
		for (let i = 0; i < a.length; i++) {
			if (a[i].titulo.toLowerCase().includes(searchTerm.toLowerCase())) {
				newArray.push(a[i]);
			}
		}
		return newArray;
	}

	// se quiser pesquisar por descricao, chama a função de pesquisar por descricao
	searchByDescription(a, searchTerm) {
		let newArray = [];
		for (let i = 0; i < a.length; i++) {
			if (a[i].descricao.toLowerCase().includes(searchTerm.toLowerCase())) {
				newArray.push(a[i]);
			}
		}
		return newArray;
	}

	searchByCategory(a, searchTerm) {
		let newArray = [];
		for (let i = 0; i < a.length; i++) {
			if (a[i].categoria.toLowerCase().includes(searchTerm.toLowerCase())) {
				newArray.push(a[i]);
			}
		}
		return newArray;
	}
}
*/
export function searchByTitle(a, searchTerm) {
	let newArray = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i].titulo.toLowerCase().includes(searchTerm.toLowerCase())) {
			newArray.push(a[i]);
		}
	}
	return newArray;
}

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

// ainda não tá pronta
export function searchByCheckbox(a, checkbox) {
	let newArray = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i].categoria.toLowerCase().includes(checkbox.toLowerCase())) {
			newArray.push(a[i]);
		}
	}
	return newArray;
}