// ********** Exercícios de interpretação de código **********

/*
// 1)
O código imprime no console a soma de todos os números entre 0 e 4, que é 10.

// 2)

// a)
19,21,23,25,27,30

// b)
Sim, pois o for... of... percorre cada elemento do array e para acessar o índice de cada um é necessário o indexOf desta maneira: lista.indexOf(numero);


// 3)
O resultado seria um asterísco representando cada número de linha, sendo a primeira linha com 1, a segunda com 2 e a terceira com 3.
*
**
***
****


*/



// ********** Exercícios de escrita de código **********

// 1)

const bichosEstimacao = Number(prompt("Quantos bichos de estimação você tem?"));
// a) b) c)

if(bichosEstimacao > 0){
  let nomes = [];
  for (let i = 0; i < bichosEstimacao; i++) {
    let nome = prompt(`Digite o nome do ${i+1}º pet: `);
    nomes.push(nome);
  }
    console.log(nomes);
}else{
  console.log("Que pena! Você pode adotar um pet!");
}



// 2)

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// a)
for (const item of array) {
  console.log(item);
}

// b)
for (const item of array) {
  console.log(item/10);
}

// c)
let novoArray = [];
for (const item of array) {
  if(item % 2 === 0){
    novoArray.push(item);
  }
}
console.log(novoArray);

// d)
let novoArray2 = [];
for (const item of array) {
  novoArray2.push(`O elemento do índex ${array.indexOf(item)} é: ${item}`);  
}
console.log(novoArray2);

// e)
let valorMinimo = 1000000;
let valorMaximo = 0;
for (const num of array) {
  if(num > valorMaximo){
    valorMaximo = num;
  }else if(num < valorMinimo){
    valorMinimo = num;
  }
}
console.log(`"O maior número é ${valorMaximo} e o menor é ${valorMinimo}."`);

// Da forma abaixo eu sei que funciona, mas queria testar uma solução somente com o que foi ensinado em sala.
/* 
let valorMinimo = Math.min(...array);
let valorMaximo = Math.max(...array);
console.log(`"O maior número é ${valorMaximo} e o menor é ${valorMinimo}."`);
 */



// ********** Desafios **********

// 1)

// a)
const numero = Number(prompt("Escolha um número para o oponente adivinhar: "));
console.log("Vamos jogar!");

// b);
let chute = 0;
let qteChutes = 0;
while (chute !== numero) {
  chute = Number(prompt("Escolha um número para chutar: "));
  console.log(`O número chutado foi: ${chute}`);
  if(chute > numero){
    console.log("Você errou! O número escolhido é maior");
  }else if(chute < numero){
    console.log("Você errou! O número escolhido é menor");
  }
  qteChutes++;
}

// c)
  console.log("Você acertou!!");
  console.log(`O número de tentativas foi : ${qteChutes}`);



// 2)

const numeroEscolhido = Math.floor(Math.random() * (100 - 1)) + 1;
console.log("Vamos jogar!");

let chute = 0;
let qteChutes = 0;
while (chute !== numeroEscolhido) {
  chute = Number(prompt("Escolha um número para chutar: "));
  console.log(`O número chutado foi: ${chute}`);
  if(chute > numeroEscolhido){
    console.log("Você errou! O número escolhido é maior");
  }else if(chute < numeroEscolhido){
    console.log("Você errou! O número escolhido é menor");
  }
  qteChutes++;
}

console.log("Você acertou!!");
console.log(`O número de tentativas foi : ${qteChutes}`);

// Como eu já tenho certa prática em utilizar a documentação do javascript, pra mim foi bem tranquilo realizar esta alteração.




