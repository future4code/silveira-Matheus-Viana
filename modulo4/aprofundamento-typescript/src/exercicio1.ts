//a)
let minhaString:string = 'Matheus'
/* minhaString = 9; */

/* Dá erro 'o tipo number não pode ser atribuido a um tipo string' */


//b)
let meuNumero:number | string = 13;
meuNumero = 'Matheus';
/* Para setar mais de um tipo para a variável utilzamos o operador OU que no typescript é apenas um pipeline, diferente do JavaScriipt */


//c)

enum coresArcoIris {
  VERMELHO = 'Vermelho',
  LARANJA = 'Laranja',
  AMARELO = 'Amarelo',
  VERDE = 'Verde',
  AZUL = 'Azul',
  ANIL = 'Anil',
  VIOLETA = 'Violeta'
}

type person = {
  nome:string,
  idade:number,
  corFavorita:coresArcoIris
}

const murilo:person = {
  nome: 'Murilo',
  idade: 15,
  corFavorita: coresArcoIris.AZUL
}

const jana:person = {
  nome: 'Janaylla',
  idade: 18,
  corFavorita: coresArcoIris.VERMELHO
}

const gabii:person = {
  nome: 'Gabii',
  idade: 22,
  corFavorita: coresArcoIris.VIOLETA
}

console.log({murilo, jana, gabii})

//d)












