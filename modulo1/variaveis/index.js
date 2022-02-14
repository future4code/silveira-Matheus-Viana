// ****** Exercícios de interpretação de código ******

/*

1) Será executado 10 e depois 10 5;

2) 10 10 10;

3) A variável "p" seria "horasTrabalhadasPorDia";
   A varíavel "t" seria "salarioPorDia"

*/


// ****** Exercícios de escrita de código ******

// 1)

let nome, idade;

console.log(typeof nome, typeof idade);

// Foi impresso tipo undefined, pois a variável existe, mas não foi definido nenhum valor para ela.

nome = prompt("Qual é o seu nome?");

idade = prompt("Qual é a sua idade?");


console.log(typeof nome, typeof idade);

// Foi impresso tipo string, pois o prompt sempre retorna um texto.

console.log("Olá", nome,", você tem", idade, "anos.");



// 2)


let respostaRoupa = prompt("Você está usando roupa preta hoje?");
let respostaOculos = prompt("Você usa óculos de grau?");
let respostaMusica = prompt("Você está ouvindo música?");

console.log("Você está usando roupa preta hoje? - ",respostaRoupa);
console.log("Você usa óculos de grau? - ",respostaOculos);
console.log("Você está ouvindo música? - ",respostaMusica);


// 3)

let a = 10;
let b = 25;
let c = a;

// Aqui faremos uma lógica para trocar os valores
a = b;
b = c;


// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a); // O novo valor de a é 25
console.log("O novo valor de b é", b); // O novo valor de b é 10


// ****** Desafios ******

let numero1 = Number(prompt("Digite um número: "));
let numero2 = Number(prompt("Digite outro número: "));

console.log("O primeiro número somado ao segundo número resulta em:", numero1+numero2,'.');
console.log("O primeiro número multiplicado pelo segundo número resulta em:", numero1*numero2,'.');



























