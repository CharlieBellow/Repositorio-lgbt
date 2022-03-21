export class Texto {
	constructor(titulo, autor, ano, tipo, categoria, link, citacao, avaliacao, descricao) {
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
}

/*tipo: dcumentário, artigo, ...
  categoria: lesbicas, gays, trans
  link: download
  titulo: nome
  citação: citação
  autor: autor
  avaliação: */