// Armazena as cartas de cada jogador
let usuarioCartas = [];
let computadorCartas = [];

if(confirm("Boas vindas ao jogo de Blackjack! \nQuer iniciar uma nova rodada?")){

  // Dá as cartas para o usuário e o computador
  usuarioCartas.push(comprarCarta());
  usuarioCartas.push(comprarCarta());
  computadorCartas.push(comprarCarta());
  computadorCartas.push(comprarCarta());

  // Caso as duas cartas de algum jogador forem o A, as cartas serão dadas novamente
  while((usuarioCartas[0].valor === 11 && usuarioCartas[1].valor === 11) || computadorCartas[0].valor === 11 && computadorCartas[1].valor === 11){
    usuarioCartas.push(comprarCarta());
    usuarioCartas.push(comprarCarta());
    computadorCartas.push(comprarCarta());
    computadorCartas.push(comprarCarta());
  }

  // Verifica se o usuário deseja comprar mais uma carta
  let comprar = true

  while(comprar){
    let usuarioCartasCompradasTexto = ""
    let pontos = 0
    for (let carta of usuarioCartas){
        usuarioCartasCompradasTexto += carta.texto + " "
        pontos += carta.valor
    }

    if (pontos > 21){
        comprar = false
    } else {
        let confirmCompra = confirm(
          `Suas cartas são ${usuarioCartasCompradasTexto}. A carta revelada do computador é ${computadorCartas[0].texto}.` +
          "\n"+ 
          "Deseja comprar mais uma carta?"
        )
    
        if (confirmCompra){
          usuarioCartas.push(comprarCarta())
        } else {
          comprar = false
        }
    }
  }
  
  // Cálculo da pontuação geral
  let computadorPontos = 0
  let usuarioPontos = 0
  let computadorCartasTexto = ""
  let usuarioCartasTexto = ""

  for (let carta of computadorCartas){
    computadorPontos += carta.valor
    computadorCartasTexto += carta.texto + " "
  }
  for (let carta of usuarioCartas){
    usuarioPontos += carta.valor
    usuarioCartasTexto += carta.texto + " "
  }

  // Compra de cartas do computador
  if (usuarioPontos <= 21){
    while (computadorPontos < usuarioPontos && computadorPontos <= 21){
        computadorCartas.push(comprarCarta())
        computadorPontos = 0
        computadorCartasTexto = ""
        for (let carta of computadorCartas){
          computadorPontos += carta.valor
          computadorCartasTexto += carta.texto + " "
        }
    }
  }

  let resultado = ""
  // Verifica quem ganhou
  if (usuarioPontos > computadorPontos && usuarioPontos <= 21){
    resultado = "O usuário ganhou!"
  } else if (computadorPontos > usuarioPontos && computadorPontos <= 21){
    resultado = "O computador ganhou!"
  } else if (computadorPontos > 21 && usuarioPontos <= 21){
    resultado = "O usuário ganhou!"
  } else if (usuarioPontos > 21 && computadorPontos <= 21){
    resultado = "O computador ganhou!"
  } else {
    resultado = "Empate!"
  }

  // Imprime cartas, pontuações e resultados
  alert(
    `Usuario - Cartas: ${usuarioCartasTexto} - Pontuação: ${usuarioPontos} \nComputador - Cartas: ${computadorCartasTexto} - Pontuação: ${computadorPontos} \n${resultado}`
  )
  
} else {
  alert("O jogo acabou.")
}