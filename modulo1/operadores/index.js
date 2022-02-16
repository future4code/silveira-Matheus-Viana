// ************* Exercícios de interpretação de código *************

/*

1) 
a. false
b. false
c. true
d. boolean


2) 
Aparecem os dois números digitados lado a lado, por exemplo: 5 e 5 aparece 55. Pois o retorno do prompt é string.


3) 
Para a soma funcionar corretamente, é necessário converter o retorno para número, pode-se utilizar Number() antes do prompt ou o sinal de +.


*/


// ************* Exercícios de escrita  de código *************

// 1)

let idadeUsuario = Number(prompt("Qual é a sua idade?"));
let idadeAmigo = Number(prompt("Qual é a idade do seu melhor amigo ou da sua melhor amiga?"));

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeUsuario > idadeAmigo);
console.log("A diferença de idade entre o você e o seu amigo(a) é de: ", idadeUsuario - idadeAmigo);



// 2)

let numeroPar = Number(prompt("Insira um número par: "));
console.log(numeroPar % 2);

// O resto da divisão de qualquer número par por 2 será sempre 0.

// O resto da divisão de qualquer número ímpar por 2 será sempre 1.



// 3)

let idadeEmAnos = Number(prompt("Qual é a sua idade em anos?"));
console.log("A idade do usuário em meses", idadeEmAnos * 12);
console.log("A idade do usuário em dias", idadeEmAnos * 365);
console.log("A idade do usuário em horas", idadeEmAnos * 365 * 24);



// 4)

let primeiroNumero = Number(prompt("Digite um número: "));
let segundoNumero = Number(prompt("Digite outro número: "));

console.log("O primeiro numero é maior que o segundo?", primeiroNumero > segundoNumero);
console.log("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero);
console.log("O primeiro numero é divisível pelo segundo?", primeiroNumero % segundoNumero === 0);
console.log("O segundo numero é divisível pelo primeiro?", segundoNumero % primeiroNumero === 0);



// ************* Desafios *************

// 1)

// a)
let F = 77;
let FParaK = (F - 32) * (5/9) + 273.15;
console.log(F,"ºF = ",FParaK,"ºK");

// b)
let C = 80;
let CParaF = C * (9/5) + 32;
console.log(C,"ºC = ",CParaF,"ºF");

// C)
let C2 = 30;
let F2 = C2 * (9/5) + 32;
let K2 = (F2 - 32) * (5/9) + 273.15;
console.log(C2,"ºC = ",F2,"ºF = ",K2, "ºK");

// D)
let C3 = Number(prompt("Digite a temperatura em graus Celsius que deseja converter: "));
let F3 = C3 * (9/5) + 32;
let K3 = (F3 - 32) * (5/9) + 273.15;
console.log(C3,"ºC = ",F3,"ºF = ",K3, "ºK");



// 2)

const precoKwh = 0.05;

let quantidadeKwh = Number(prompt("Informe a quantidade de quilowatts consumida pela residência: R$"));

// a)
console.log("O valor total é de : R$",quantidadeKwh * precoKwh);

// b)

let descontoKwh = Number(prompt("Informe o percentual de desconto: "));
console.log("O valor com desonto de 15% é de : R$", quantidadeKwh * precoKwh * (1-(descontoKwh/100)));



// 3)

// a)
const lb = 20;
let lbParaKg = lb * 0.453592;
console.log(lb,"lb equivalem a",lbParaKg,"Kg");

// b)
const oz = 10.5;
let ozParaKg = oz * 0.0283495;
console.log(oz,"oz equivalem a",ozParaKg,"Kg");

// c)
const mi = 100;
let miParaM = mi * 1609.34;
console.log(mi,"mi equivalem a",miParaM,"m");

// d)
const ft = 50;
let ftParaM = ft / 3.281;
console.log(ft,"ft equivalem a",ftParaM,"m");

// e)
const gal = 103.56;
let galParaL = gal / 0.26417;
console.log(gal,"gal equivalem a",galParaL,"l");

// f)
const xic = 450;
let xicParaL = xic * 0.240;
console.log(xic,"xic equivalem a",xicParaL,"l");

// g)
const xic2 = Number(prompt("Digite o valor em xícaras que deseja converter para litros: "));
let xicParaL2 = xic2 * 0.240;
console.log(xic2,"xic equivalem a",xicParaL2,"l");



