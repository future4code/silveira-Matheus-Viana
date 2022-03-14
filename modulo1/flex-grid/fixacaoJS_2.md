```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
 let indices = [];
 let indiceEscolhido = arrayDeNumeros.indexOf(numeroEscolhido);

  while(indiceEscolhido != -1){
    indices.push(indiceEscolhido);
    indiceEscolhido = arrayDeNumeros.indexOf(numeroEscolhido, indiceEscolhido + 1);
  }
  
  if(indices.length >= 1){
    return `O número ${numeroEscolhido} aparece ${indices.length}x`
  }else{
    return `Número não encontrado`
    
  }
  
}
```