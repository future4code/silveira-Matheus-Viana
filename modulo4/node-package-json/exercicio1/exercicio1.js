/* Cores para o console em unicode */

const red = "\u001b[31m";
const blue = "\u001b[34m";
const green = "\u001b[32m";
const reset = "\u001b[0m";

/* Exercício inicia aqui */

// a) Usando o process.argv

// b)
const nome = process.argv[2];
const idade = process.argv[3];
let idadeMaisSete = Number(idade) + 7;

if (nome === undefined && idade === undefined) {
  console.log(red + "Esperava receber dois parâmetros!");
} else if (nome === undefined || idade === undefined) {
  console.log(red + "Esperava receber dois parâmetros, mas recebi só um!");
} else {
  console.log(green + `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeMaisSete}.`
  );
}

