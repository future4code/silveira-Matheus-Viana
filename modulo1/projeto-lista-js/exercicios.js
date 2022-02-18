// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')
  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("Digite a altura de um retângulo: ");
  const largura  = prompt("Digite a largura  de um retângulo: ");
  const area = altura * largura;
  console.log(area);
}


// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("Digite o ano atual: ");
  const anoNascimento = prompt("Digite o ano de seu nascimento: ");
  const idade = anoAtual - anoNascimento;
  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Digite o seu nome: ");
  const idade = prompt("Digite a sua idade: ");
  const email = prompt("Digite o seu e-mail: ");
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite a sua cor favorita: ");
  const cor2 = prompt("Digite outra cor favorita: ");
  const cor3 = prompt("Digite mais uma cor favorita: ");
  let coresFavoritas = [];
  coresFavoritas.push(cor1);
  coresFavoritas.push(cor2);
  coresFavoritas.push(cor3);
  console.log(coresFavoritas);
}


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1];

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  arrayTemp = array[0];
  arrayPrimeiro = array[0];
  arrayUltimo = array[array.length - 1];
  arrayPrimeiro = arrayUltimo
  arrayUltimo = arrayTemp;
  array.unshift(arrayPrimeiro);
  array.splice(1, 1);
  array.splice(array.length - 1, 1);
  array.push(arrayUltimo);
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const varString1 = string1.toUpperCase();
  const varString2 = string2.toUpperCase();
  return varString1 === varString2;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = prompt("Digite o ano atual: ");
  const anoNascimento = prompt("Digite o ano de nascimento da pessoa: ");
  const anoCarteiraEmitida = prompt("Digite o ano em que o RG da pessoa foi emitido: ");
  const idade = anoAtual - anoNascimento;
  const renovacao =  anoAtual - anoCarteiraEmitida;
  console.log(idade + ' | ' + renovacao);
  console.log(idade <= 20 && renovacao >= 5 || ((idade > 20 && idade <= 50) && renovacao >= 10) || idade > 50 && renovacao >= 15);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  return (ano % 400 == 0 || (ano % 4 == 0 && !(ano % 100 == 0)));
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maiorIdade = prompt("Você tem mais de 18 anos? ");
  const ensinoMedio = prompt("Você possui ensino médio completo? ");
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso? ");
  console.log(maiorIdade === "sim" && ensinoMedio === "sim" && disponibilidade === "sim");
}