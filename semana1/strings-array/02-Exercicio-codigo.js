// Criando o array com as minhas comidas preferidas:

const comidasPreferidasJoao = ['Strogonoff', 'Yakissoba', 'Macarrão', 'Gnocchi', 'Tilápia com legumes']


// Iniciando o desafio:

const sugestaoUsuario = prompt(`Olá, tudo bem?.

Eu vou fazer um jantar com as minhas comidas preferidas. Eu montei o seguinte cardápio:

1. ${comidasPreferidasJoao[0]};
2. ${comidasPreferidasJoao[1]};
3. ${comidasPreferidasJoao[2]};
4. ${comidasPreferidasJoao[3]};
5. ${comidasPreferidasJoao[4]};

Porém, o buffet informou que o Yakissoba está em falta.

Você teria alguma sugestão?`)


// Criando a nova lista:

comidasPreferidasJoao.splice(1,1, sugestaoUsuario)

const cardapioNovo = comidasPreferidasJoao


// Imprimindo o novo cardápio:

console.log(`Adorei a sua sugestão!!!

Veja como ficou o cardápio:

1. ${cardapioNovo[0]};
2. ${cardapioNovo[1]};
3. ${cardapioNovo[2]};
4. ${cardapioNovo[3]};
5. ${cardapioNovo[4]};

Ficou bom, né? Obrigado por sua ajuda.

Te aguardo no jantar!`)