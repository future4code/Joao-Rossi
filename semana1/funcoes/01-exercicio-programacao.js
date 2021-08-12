/*Parte A do Exercício*/


function minhaMensagemApresentacao() {
    console.log('Eu sou o João Filippe, tenho 28 anos e sou advogado.')
}

minhaMensagemApresentacao()



/* ------------------ Fim da Parte A do Exercício ------------------ */


/* Parte B do Exercício */

// Criando a função

function mensagemApresentacao() {
    console.log(`Eu sou ${nome.trim()}, tenho ${idade.trim()} anos e sou ${ocupacao.trim().toLowerCase()}.`)
}


// Pedindo os dados:

let nome = prompt(`Olá, tudo bem?

Nós vamos pedir alguns dados para você. Primeiro, insira o seu primeiro nome aqui:`)


let idade = prompt(`Obrigado!

Agora, nós precisamos saber a sua idade.
Insira ela aqui, por favor:`)


let ocupacao = prompt(`Por fim, insira aqui qual o seu emprego:`)


// Imprimindo a resposta

mensagemApresentacao()