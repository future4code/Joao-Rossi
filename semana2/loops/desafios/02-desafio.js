// Adivinhe o número que estou pensando;

// Adicionar o número pelo jogador 1:

const numeroSecreto = Math.floor(Math.random()*101)

let numeroJogador = Number(
  prompt(`VAMOS JOGAR!!!
Tente adivinhar o número gerado pelo computador. 
    
Insira um número aqui`)
);

const jogo = (numero1, numero2) => {
  let listaNumerosJogador = [];    
  while (numero2 !== numero1) {
    numero2 = Number(
      prompt(`Que pena, o número escolhido não é o inserido pelo 1º Jogador.
Por favor, escolha outro número:`)
    );
    listaNumerosJogador.push(numeroJogador);  
  }
  if (numero2 === numero1) {
      let numeroTentativas = listaNumerosJogador.length
    console.log(`Parabéns!!! Você acertou!!
O número "${numeroSecreto}" é o número gerado pelo computador!

Você acertou na ${numeroTentativas + 1}ª tentativa.`);
  }
};

jogo(numeroSecreto, numeroJogador);
