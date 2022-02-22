// ********** Exercícios de interpretação de código **********
/*
// 1)

// a)
O código testa se o número é par ou ímpar.

// b)
Para números pares.

// c)
Para números ímpares.

*/


/*
// 2)

// a)
Serve para mostrar ao usuário o preço individual de cada uma das frutas escolhidas.

// b)
"O preço da fruta Maçã é R$ 2.25

// c)
"O preço da fruta Maçã é R$ 5

*/


/*
// 3)

// a)
Solicitando que o usuário preencha um número e convertendo o resultado para Number, pois o padrão do prompt é string.

// b)
Para o número 10 a mensagem seria "Esse número passou no teste".
Para o número -10, não exibiria mensagem pois a condição não tem o else.

// c)
Haverá um erro, pois a mensagem foi definida no escopo do if e portanto não é possível chamamá-la fora dele.
*/



// ********** Exercícios de escrita de código **********

// 1)

// a)
// b)"Você pode dirigir"
const idade = Number(prompt("Qual é a sua idade? "));

// c)
if(idade >= 18){
  console.log("Você pode dirigir");
}else{
  console.log("Você não pode dirigir");
}



// 2)
const turno = prompt("Digite qual turno você estuda: M (matutino), V (Vespertino) ou N (Noturno)").toUpperCase();
if(turno === "M"){
  console.log("Bom Dia!");
}else if(turno === "V"){
  console.log("Boa Tarde!");
}else if(turno === "N"){
  console.log("Boa Noite!");
}



// 3)
const turno = prompt("Digite qual turno você estuda: M (matutino), V (Vespertino) ou N (Noturno)").toUpperCase();

switch (turno) {
  case "M":
    console.log("Bom Dia!");    
    break;
  case "V":
    console.log("Boa Tarde!");    
    break;
  case "N":
    console.log("Boa Noite!");    
    break;
  default:
    break;
}



// 4)
const genero = prompt("Qual é o gênero de filme que vão assistir? ").toLowerCase();
const preco = Number(prompt("Qual é o preço do ingresso? "));

if(genero === 'fantasia' && preco < 15){
  console.log("Bom filme!");
}else{
console.log("Escolha outro filme :(");
}



// ********** Desafios **********

// 1)
const genero = prompt("Qual é o gênero de filme que vão assistir? ").toLowerCase();
const preco = Number(prompt("Qual é o preço do ingresso? "));

if(genero === 'fantasia' && preco < 15){
  const snack = prompt("Qual snack que você quer comprar? ");
  console.log("Bom filme!");
  console.log(`Aproveite o seu ${snack}`);
}else{
console.log("Escolha outro filme :(");
}



// 2)
const nome = prompt("Informe o seu nome completo: ");
const tipoJogo = prompt("Informe o tipo de jogo: IN (internacional) e DO (doméstico) ");
const etapaJogo = prompt("Informe a etapa do jogo: SF (semi-final), DT (decisão de terceiro lugar) e FI (final) ");
const categoria = Number(prompt("Informe a categoria: 1, 2, 3 ou 4 "));
const qteIngressos = Number(prompt("Informe a quantidade de ingressos: "));
let valorIngresso = 0;

console.log("---Dados da compra--- ");

console.log(`Nome do cliente: ${nome}`);

if(tipoJogo === 'IN'){
  console.log(`Tipo do jogo: Internacional`);
}else if(tipoJogo === 'DO'){
  console.log(`Tipo do jogo: Nacional`);
}

switch (etapaJogo) {
  case 'SF':
    console.log(`Etapa do jogo: Semi-final`);    
    break;
  case 'DT':
    console.log(`Etapa do jogo: Decisão de terceiro lugar`);    
    break;
  case 'FI':
    console.log(`Etapa do jogo: Final`);    
    break;
  default:
    break;
}

console.log(`Categoria: ${categoria}`);

console.log(`Quantidade de Ingressos: ${qteIngressos} ingressos`);

console.log("---Valores--- ");

switch (etapaJogo) {
  case 'SF':
    if(categoria === 1){
      valorIngresso = 1320;
      if(tipoJogo === 'DO'){
      console.log(`Valor do ingresso: R$ ${valorIngresso}`);
      }else if(tipoJogo === 'IN'){
        console.log(`Valor do ingresso: U$ ${valorIngresso * 4.10}`);
      }
    }else if(categoria === 2){
      valorIngresso = 880;
      if(tipoJogo === 'DO'){
      console.log(`Valor do ingresso: R$ ${valorIngresso}`);
      }else if(tipoJogo === 'IN'){
        console.log(`Valor do ingresso: U$ ${valorIngresso * 4.10}`);
      }
    }else if(categoria === 3){
      valorIngresso = 550;
      if(tipoJogo === 'DO'){
      console.log(`Valor do ingresso: R$ ${valorIngresso}`);
      }else if(tipoJogo === 'IN'){
        console.log(`Valor do ingresso: U$ ${valorIngresso * 4.10}`);
      }
    }else if(categoria === 4){
      valorIngresso = 220;
      if(tipoJogo === 'DO'){
      console.log(`Valor do ingresso: R$ ${valorIngresso}`);
      }else if(tipoJogo === 'IN'){
        console.log(`Valor do ingresso: U$ ${valorIngresso * 4.10}`);
      }
    }   
    break;
  case 'DT':
    if(categoria === 1){
      valorIngresso = 660;
      if(tipoJogo === 'DO'){
      console.log(`Valor do ingresso: R$ ${valorIngresso}`);
      }else if(tipoJogo === 'IN'){
        console.log(`Valor do ingresso: U$ ${valorIngresso * 4.10}`);
      }
    }else if(categoria === 2){
      valorIngresso = 440;
      if(tipoJogo === 'DO'){
      console.log(`Valor do ingresso: R$ ${valorIngresso}`);
      }else if(tipoJogo === 'IN'){
        console.log(`Valor do ingresso: U$ ${valorIngresso * 4.10}`);
      }
    }else if(categoria === 3){
      valorIngresso = 330;
      if(tipoJogo === 'DO'){
      console.log(`Valor do ingresso: R$ ${valorIngresso}`);
      }else if(tipoJogo === 'IN'){
        console.log(`Valor do ingresso: U$ ${valorIngresso * 4.10}`);
      }
    }else if(categoria === 4){
      valorIngresso = 170;
      if(tipoJogo === 'DO'){
      console.log(`Valor do ingresso: R$ ${valorIngresso}`);
      }else if(tipoJogo === 'IN'){
        console.log(`Valor do ingresso: U$ ${valorIngresso * 4.10}`);
      }
    }   
    break;
  case 'FI':
    if(categoria === 1){
      valorIngresso = 1980;
      if(tipoJogo === 'DO'){
      console.log(`Valor do ingresso: R$ ${valorIngresso}`);
      }else if(tipoJogo === 'IN'){
        console.log(`Valor do ingresso: U$ ${valorIngresso * 4.10}`);
      }
    }else if(categoria === 2){
      valorIngresso = 1320;
      if(tipoJogo === 'DO'){
      console.log(`Valor do ingresso: R$ ${valorIngresso}`);
      }else if(tipoJogo === 'IN'){
        console.log(`Valor do ingresso: U$ ${valorIngresso * 4.10}`);
      }
    }else if(categoria === 3){
      valorIngresso = 880;
      if(tipoJogo === 'DO'){
      console.log(`Valor do ingresso: R$ ${valorIngresso}`);
      }else if(tipoJogo === 'IN'){
        console.log(`Valor do ingresso: U$ ${valorIngresso * 4.10}`);
      }
    }else if(categoria === 4){
      valorIngresso = 330;
      if(tipoJogo === 'DO'){
      console.log(`Valor do ingresso: R$ ${valorIngresso}`);
      }else if(tipoJogo === 'IN'){
        console.log(`Valor do ingresso: U$ ${valorIngresso * 4.10}`);
      }
    }   
    break;
  default:
    break;
}

if(tipoJogo === 'DO'){
  console.log(`Valor total: R$ ${valorIngresso * qteIngressos}`);
}else if(tipoJogo === 'IN'){
  console.log(`Valor total: U$ ${valorIngresso * qteIngressos * 4.10}`);
}





