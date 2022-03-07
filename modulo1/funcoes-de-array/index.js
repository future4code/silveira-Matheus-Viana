// ********** Exercícios de interpretação de código **********

/*
// 1)
// a)
{ nome: "Amanda Rangel", apelido: "Mandi" }
0
[
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

{ nome: "Laís Petra", apelido: "Laura" }
1
[
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

{ nome: "Letícia Chijo", apelido: "Chijo" }
2
[
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]



// 2)
// a)
["Amanda Rangel","Laís Petra","Letícia Chijo"]



// 3)
// a)
[
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" }
]


*/



// ********** Exercícios de escrita de código **********

// 1)

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

// a)
const nomePets = pets.map((pet, index, array) => pet.nome);
console.log(nomePets);

// b)
const salsichas = pets.filter((pet, index, array) => pet.raca === 'Salsicha');
console.log(salsichas);


// c)
const descontoPoodle = pets.filter((pet) => pet.raca === 'Poodle').map((pet) => `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`);
console.log(descontoPoodle);



// 2)

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a)
const nomeProdutos = produtos.map((produto) => produto.nome);
console.log(nomeProdutos);

// b)
const nomePreco = produtos.map((produto) => {
  delete produto.categoria;
  produto.preco *= 0.95;
  return produto;
});
console.log(nomePreco);

// c)
const bebidas = produtos.filter((produto) => produto.categoria === 'Bebidas');
console.log(bebidas);

// d)
const nomesComYpe = produtos.filter((produto) => produto.nome.includes('Ypê'));
console.log(nomesComYpe);

//e)
const frasseNomesComYpe = produtos.filter((produto) => produto.nome.includes('Ypê')).map((produto) => `Compre ${produto.nome} por ${produto.preco}`);
console.log(frasseNomesComYpe);





// ********** Desafios **********

// 1)

const pokemons = [
   { nome: "Bulbasaur", tipo: "grama" },
   { nome: "Bellsprout", tipo: "grama" },
   { nome: "Charmander", tipo: "fogo" },
   { nome: "Vulpix", tipo: "fogo" },
   { nome: "Squirtle", tipo: "água" },
   { nome: "Psyduck", tipo: "água" },
]

// a)
const nomesOrdemAlfabetica = pokemons.sort((a, b) => {
    if (a.nome < b.nome) {return -1;}
    if (a.nome > b.nome) {return 1;}
    return 0;
  });
console.log(nomesOrdemAlfabetica);


// b)
const tiposOrdemAlfabetica = pokemons.sort((a, b) => {
    if (a.tipo < b.tipo) {return -1;}
    if (a.tipo > b.tipo) {return 1;}
    return 0;
  });

const tiposSemRepeticao = tiposOrdemAlfabetica.map((pokemon)=>{
  let tipos = pokemon.tipo;
  return tipos;
});

console.log([...new Set(tiposSemRepeticao)]);