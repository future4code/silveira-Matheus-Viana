// Exercício 1

/* function checaTriangulo(a:number, b:number, c:number) {
  if (a !== b && b !== c) {
    return "Escaleno";
  } else if (a === b && b === c) {
    return "Equilátero";
  } else {
    return "Isósceles";
  }
} */

// ***********************
// Exercício 2

/* function imprimeTresCoresFavoritas(cor1:string, cor2:string, cor3:string) {
  console.log([cor1, cor2, cor3])
}

imprimeTresCoresFavoritas('amarelo', 'verde', 'azul'); */


// ***********************
// Exercício 3

/* function checaAnoBissexto(ano:number) {
  const cond1 = ano % 400 === 0
  const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
  return cond1 || cond2
} */


// ***********************
// Exercício 4

/* function comparaDoisNumeros(num1:number, num2:number) {
  let maiorNumero:number;
  let menorNumero:number;

  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  const diferenca:number = maiorNumero - menorNumero;

  return diferenca 
} */


// ***********************
// Exercício 5

/* function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number) {
  const idade:number = anoAtual - anoNascimento
  const tempoCarteira:number = anoAtual - anoEmissao

  const cond1:boolean = idade <= 20 && tempoCarteira >= 5
  const cond2:boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10
  const cond3:boolean = idade > 50 && tempoCarteira >= 15

  return (cond1 || cond2 || cond3)
} */


