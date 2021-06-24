// Adivinhe o número que estou pensando;

// Adicionar o número pelo jogador 1:

const numeroSecreto = Number(prompt(`[1º JOGADOR] Escolha um número:`));

let numeroJogador2 = Number(
  prompt(`VAMOS JOGAR!!!
Tente adivinhar o número inserido pelo primeiro jogador. 
    
Insira um número aqui`)
);

const jogo = (numero1, numero2) => {
  let listaNumerosJogador2 = [];    
  while (numero2 !== numero1) {
    numero2 = Number(
      prompt(`Que pena, o número escolhido não é o inserido pelo 1º Jogador.
Por favor, escolha outro número:`)
    );
    listaNumerosJogador2.push(numeroJogador2);  
  }
  if (numero2 === numero1) {
      let numeroTentativas = listaNumerosJogador2.length
    console.log(`Parabéns!!! Você acertou!!
O número "${numeroSecreto}" é o número inserido pelo Jogador 1!

Você acertou na ${numeroTentativas + 1}ª tentativa.`);
  }
};

jogo(numeroSecreto, numeroJogador2);
