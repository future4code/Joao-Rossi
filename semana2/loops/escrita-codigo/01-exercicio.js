const numeroPets = Number(
  prompt(`Olá, tudo bem?
Quantos animaizinhos de estimação você tem?`)
);

const mensagem = (numero) => {
  if (numero === 0) {
    return "Que pena! Você precisa adotar um pet!";
  } else {
    let ListaPet = [];
    for (let i = 0; i < numero; i++) {
      nomePet = prompt(`Digite aqui o nome de seu pet:`);
      ListaPet.push(nomePet);
    }
    return ListaPet;
  }
};

console.log(mensagem(numeroPets));
