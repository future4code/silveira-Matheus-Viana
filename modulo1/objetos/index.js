// ********** Exercícios de interpretação de código **********

// 1)

// a)
/*
"Matheus Nachtergaele"
"Virginia Cavendish"
{
  canal: "Globo", 
  horario: "14h"
}
*/



// 2)

// a)
/*
{
  "nome": "juca",
  "idade": 3,
  "raca": "SRD"
}
{
  "nome": "juba",
  "idade": 3,
  "raca": "SRD"
}
{
  "nome": "jubo",
  "idade": 3,
  "raca": "SRD"
}
*/


// b)
/*
Cria uma cópia do objeto
*/



// 3)

// a)
/*
false
undefined
*/


// b)
/*
O valor undefined, aparece no console, pois não existe atributo altura para o objeto pessoa.
*/



// ********** Exercícios de escrita de código **********

// 1)

// a)
const pessoa = {
   nome: "Matheus", 
   apelidos: ["Matheusinho", "Teus", "Irmão"]
}

const informarPessoa = function(objeto){
  return `"Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}"`;
}
console.log(informarPessoa(pessoa));

// b)

const pessoa2 = {...pessoa};
pessoa2.apelidos = ["Teteusinho","Teteu","Rimão"]

console.log(informarPessoa(pessoa2));




// 2)

// a)
const joao = {
  "nome": "João",
  "idade": 24,
  "profissao": "Arquiteto"
}

const maria = {
  "nome": "Maria",
  "idade": 28,
  "profissao": "Professora"
}
console.log(joao, maria)

// b)
const infoPessoa = function(pessoa){
  return [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length];
}
console.log(infoPessoa(joao));
console.log(infoPessoa(maria));




// 3)

// a)
const carrinho = [];

// b)
const morango = {
  "nome": "Morango",
  "disponibilidade": true 
}

const banana = {
  "nome": "Banana",
  "disponibilidade": true 
}

const laranja = {
  "nome": "Laranja",
  "disponibilidade": true 
}

// c)
const colocarNoCarrinho = function(fruta){
  return carrinho.push(fruta);
}
colocarNoCarrinho(morango);
colocarNoCarrinho(banana);
colocarNoCarrinho(laranja);

// d)
console.log(carrinho);





// ********** Desafios **********

// 1)

const informeDados = function(){
  const nome = prompt("Informe seu nome: ");
  const idade = prompt("Informe sua idade: ");
  const profissao = prompt("Informe sua profissão: ");
  return {nome, idade, profissao};
}

console.log(informeDados());




// 2)

const filme1 = {
  "ano_lancamento": 2005,
  "nome": "Madagascar"
}

const filme2 = {
  "ano_lancamento": 2018,
  "nome": "Jumanji"
}

const infoFilmes = function(filme1, filme2){
  return `O primeiro filme foi lançado antes do segundo? ${filme1.ano_lancamento < filme2.ano_lancamento}\nO primeiro filme foi lançado no mesmo ano do segundo? ${filme1.ano_lancamento == filme2.ano_lancamento}`
}
console.log(infoFilmes(filme1, filme2));




// 3)

const alterarDisponibilidade = function(fruta){
  let frutaTemp = {...fruta};
  fruta.disponibilidade = !frutaTemp.disponibilidade
  return fruta;
}

console.log(alterarDisponibilidade(banana));






