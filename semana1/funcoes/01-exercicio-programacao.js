// Pedindo os dados:

nome = prompt(`Olá, tudo bem?

Nós vamos pedir alguns dados para você. Primeiro, insira o seu primeiro nome aqui:`)


idade = prompt(`Obrigado!

Agora, nós precisamos saber a sua idade.
Insira ela aqui, por favor:`)]


ocupacao = prompt(`Por fim, insira aqui qual o seu emprego:`)


function mensagemApresentacao() {
    console.log(`Eu sou ${nome}, tenho ${idade} e sou ${ocupacao}`)
}