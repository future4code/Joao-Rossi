// INÍCIO DO JOGO:

console.log("Boas vindas ao jogo de Blackjack!");

const inicioJogo = () => {
  if (confirm("Quer iniciar uma nova rodada?")) {
    // Distribuindo as cartas:
    let carta1Jogador = comprarCarta();
    let carta2Jogador = comprarCarta();
    let carta1Computador = comprarCarta();
    let carta2Computador = comprarCarta();

    // Somando os pontos:
    let maoJogador = carta1Jogador.valor + carta2Jogador.valor;
    let maoComputador = carta1Computador.valor + carta2Computador.valor;

   //  Imprimindo as mensagens no console:
    console.log(`As cartas tiradas pelo Jogador são: ${carta1Jogador.texto} e ${carta2Jogador.texto}.
O total de pontos é: ${maoJogador}`);

    console.log(`As cartas tiradas pelo Computador são: ${carta1Computador.texto} e ${carta2Computador.texto}.
O total de pontos é: ${maoComputador}`);

   // Contando os pontos e declarando o vencedor:
    if (maoJogador > maoComputador) {
      console.log(`O Jogador ganhou o Jogo!`);
    } else if (maoJogador === maoComputador) {
      console.log(`Tivemos um empate!`);
    } else if (maoJogador < maoComputador) {
      console.log(`O Computador ganhou!`);
    }
  } else {
    console.log("O jogo acabou!");
  }
};


// Chamando a função:
inicioJogo();
