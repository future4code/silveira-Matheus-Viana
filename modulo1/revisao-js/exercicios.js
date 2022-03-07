// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b)=> a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter(num => num % 2 == 0);
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  return array.filter(num => num % 2 == 0).map((num => num ** 2)); 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max(...array);
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero;
  let menorNumero;
  let maiorDivisivelPorMenor;

  if(num1 > num2){
    maiorNumero = num1;
    menorNumero = num2;  
  }else{
    maiorNumero = num2;  
    menorNumero = num1;  
  }

  if(maiorNumero % menorNumero == 0){
    maiorDivisivelPorMenor = true;
  }else{
    maiorDivisivelPorMenor = false;
  }

  let diferenca = maiorNumero - menorNumero;

  const infoNumeros = {
    "maiorNumero": maiorNumero,
    "maiorDivisivelPorMenor": maiorDivisivelPorMenor,
    "diferenca": diferenca
  }

  return infoNumeros;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if(ladoA === ladoB && ladoB === ladoC){
    return `Equilátero`;
  }else if(ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC){
    return `Escaleno`;
  }else{
    return `Isósceles`;
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let arrayOrdenado = array.sort((a, b)=> a - b);
  return [arrayOrdenado[array.length - 2], arrayOrdenado[1]];

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let pessoaAnonima = {...pessoa};
   pessoaAnonima.nome = 'ANÔNIMO';
   return pessoaAnonima;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let pessoasAutorizadas = [];

  pessoas.map(pessoa => {
    if(pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60){
      pessoasAutorizadas.push(pessoa);
    }
  });  

  return pessoasAutorizadas;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}