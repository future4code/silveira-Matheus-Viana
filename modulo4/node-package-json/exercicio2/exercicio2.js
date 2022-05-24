/* Cores para o console em unicode */

const red = "\u001b[31m";
const blue = "\u001b[34m";
const green = "\u001b[32m";
const reset = "\u001b[0m";

/* Exercício inicia aqui */

const operacao = process.argv[2];
const num1 = process.argv[3];
const num2 = process.argv[4];

if (operacao === undefined && num1 === undefined && num2 === undefined) {
  console.error(red + "Esperava receber três parâmetros!");
} else if (
  (num1 === undefined && num2 === undefined) ||
  (num1 === undefined || num2 === undefined)
) {
  console.error(red + "Esperava receber três parâmetros!");
}else{
  switch (operacao) {
    case "add":
      console.log(green + Number(num1) + Number(num2));
      break;
    case "sub":
      console.log(green + Number(num1) - Number(num2));
      break;
    case "mult":
      console.log(green + Number(num1) * Number(num2));
      break;
    case "div":
      console.log(green + Number(num1) / Number(num2));
      break;
  }
} 

