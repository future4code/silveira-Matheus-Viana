// ********** Exercícios de interpretação de código **********

/*

1)

a) 
10
50

b)
Não apareceria nada no console, pois a função não imprime nenhum valor, ela apenas retorna um valor de acordo com os argumentos que receber.



2)

a)
A função outraFuncao recebe um texto como argumento, converte todos seus caracteres para letras minúsculas e verifica se existe no texto a palavra "cenoura", retornando um boolean.

b)
i. true
ii. true
iii. false

*/



// ********** Exercícios de escrita de código **********

// 1)

// a)

const infoSemParametros = () => console.log("Eu sou Matheus, tenho 29 anos, moro em Santa Luzia e sou estudante.");

infoSemParametros();

// b)
const infoComParametros = (nome, idade, cidade, profissao) => console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`);

infoComParametros('Matheus', 29, "Santa Luzia", "estudante");



// 2)

// a)
const soma = (a, b) => a + b;
console.log(soma(4,8));

// b)
const ehMaiorIgual = (a, b) => a >= b;
console.log(ehMaiorIgual(8,4));

// c)
const ehPar = (a) => a % 2 == 0;
console.log(ehPar(8));

// d)
const mensagemMaiuscula = function(mensagem){
  mensagem = mensagem.toUpperCase();  
  return mensagem.length + ' | ' + mensagem ;
}
console.log(mensagemMaiuscula("Olá, meu nome é Matheus."));



// 3)

const somar = (a, b) => a + b;

const subtrair = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => a / b;


const a = Number(prompt("Informe um número: "));
const b = Number(prompt("Informe outro número: "));


console.log(`Números inseridos ${a} e ${b}`);
console.log(`Soma: ${somar(a,b)}`);
console.log(`Diferença: ${subtrair(a,b)}`);
console.log(`Multiplicação: ${multiplicar(a,b)}`);
console.log(`Divisão: ${dividir(a,b)}`);



// ********** Desafios **********

// 1) 

// a)
const imprimir = (a) => console.log(a);
//imprimir("O Rato Roeu a Roupa do Rei de Roma.");

// b)
const semRetorno = (a, b) => {
  let soma = a + b;
  return imprimir(soma);
};
semRetorno(5,3);



// 2)
const pitagoras = (a, b) => {
  let hip = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  return hip;
};

console.log(pitagoras(3,4))



