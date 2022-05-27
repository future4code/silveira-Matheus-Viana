enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type filme = {
  nome:string,
  anoLancamento:number,
  genero:GENERO,
  pontuacao?:number
}

const catalogoFilme = (nome:string, anoLancamento:number, genero:GENERO, pontuacao?:number):filme => {
  if (typeof pontuacao !== 'undefined') {
  return {nome, anoLancamento, genero, pontuacao}
    }
  return {nome, anoLancamento, genero }
}

console.log(catalogoFilme("Duna", 2021, GENERO.ACAO, 74))
console.log(catalogoFilme("Duna", 2021, GENERO.ACAO))