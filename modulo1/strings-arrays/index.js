// ********** Exercícios de interpretação de código **********

/*

1)
a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9

2)
SUBI NUM ÔNIBUS EM MIRROCOS 27

*/

// ********** Exercícios de escrita de código **********

// 1)
const nome = prompt("Digite o seu nome: ");
const email = prompt("Digite o seu e-mail: ");
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)



// 2)

// a)
let comidas = ["Strogonoff","Fricassê","Salpiçao","Macarronada","Pizza"];
console.log(comidas);

// b)
console.log("Essas são as minhas comidas preferidas: ");
console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
console.log(comidas[3]);
console.log(comidas[4]);

// c)

const comidaPreferida = prompt("Digite uma comida preferida");
comidas[1] = comidaPreferida;
console.log(comidas);



// 3)

// a)
const listaDeTarefas = [];

// b)
const tarefa1 = prompt("Digite uma tarefa que precisa realizar hoje: ");
listaDeTarefas.push(tarefa1);
const tarefa2 = prompt("Digite outra tarefa que precisa realizar hoje: ");
listaDeTarefas.push(tarefa2);
const tarefa3 = prompt("Digite mais uma tarefa que precisa realizar hoje: ");
listaDeTarefas.push(tarefa3);

// c)
console.log(listaDeTarefas);

// d)
const indice = prompt("Digite o índice de uma tarefa que você já realizou (0, 1 ou 2): ");

// e)
listaDeTarefas.splice(indice, 1);

// f)
console.log(listaDeTarefas);



// ********** Desafios **********

// 1)
const frase = prompt("Digite uma frase: ");
console.log(frase.split(" "));



// 2)
const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
console.log(frutas.indexOf("Abacaxi"), frutas.length);



