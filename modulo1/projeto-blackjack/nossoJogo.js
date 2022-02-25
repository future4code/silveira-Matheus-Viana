/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

  console.log("Boas vindas ao jogo de Blackjack!");

  if(confirm("Quer iniciar uma nova rodada?")) {

    // Variaveis
    const usuarioCarta = [];
    let usuarioTotal = 0;
    const computadorCarta = [];
    let computadorTotal = 0;

    // Dá 2 cartas para cada jogador
    usuarioCarta.push(comprarCarta());
    usuarioCarta.push(comprarCarta());
    computadorCarta.push(comprarCarta());
    computadorCarta.push(comprarCarta());

    // Faz o somatório das cartas de cada jogador
    for(let carta of usuarioCarta){
      usuarioTotal += carta.valor;
    }

    for(let carta of computadorCarta){
      computadorTotal += carta.valor;
    }

    // Imprime na tela as informações de cada jogador
    console.log(`Usuário - cartas: ${usuarioCarta[0].texto} ${usuarioCarta[1].texto} - ${usuarioTotal}`);

    console.log(`Computador - cartas: ${computadorCarta[0].texto} ${computadorCarta[1].texto} - ${computadorTotal}`);

    // Mostra a mensagem ao vencedor
    if(usuarioTotal > computadorTotal){
      console.log("O usuário ganhou!");
    }else if(usuarioTotal < computadorTotal){
      console.log("O computador ganhou!");
    }else if(usuarioTotal === computadorTotal){
      console.log("Empate!");
    }    
  }else{
    console.log("O jogo acabou");
  }