/* -----------------------------------
Parte A do Exercício
----------------------------------- */

// Criando a função:

function somarOsNumeros(numero1, numero2) {
    let resultadoDaSoma = numero1 + numero2
    return resultadoDaSoma
}


// Pedindo os parâmetros:

var numero1 = Number(prompt(`Insira um número:`))
       
var numero2 = Number(prompt(`Insira outro número:`))


// Imprimindo o resultado:

console.log(`O resultado da soma dos números é: ${somarOsNumeros(numero1, numero2)}`)




/* -----------------------------------
Parte B do Exercício
----------------------------------- */

// Criando a função:

function compararOsNumeros(numero1, numero2) {
    let comparacaoDosNumeros = numero1 > numero2
    return comparacaoDosNumeros
}


// Pedindo os parâmetros:

var numero1 = Number(prompt(`Insira um número:`))
       
var numero2 = Number(prompt(`Insira outro número:`))


// Imprimindo o resultado da função:

console.log(`O primeiro número é maior que o segundo: ${compararOsNumeros(numero1, numero2)}`)




/* -----------------------------------
Parte C do Exercício
----------------------------------- */

// Criando a função:

function verificarNumeroParOuNao(numero) {
    let numeroParOuNao = numero % 2 === 0
    return numeroParOuNao
}


// Pedindo os parâmetros:

var numero = Number(prompt(`Insira um número:`))


// Imprimindo o resultado da função:

console.log(`O número inserido é par: ${verificarNumeroParOuNao(numero)}`)




/* -----------------------------------
Parte D do Exercício
----------------------------------- */

// Criando a função:

function tamanhoEMensagemCapsLock() {
    console.log(mensagem.length, mensagem.toUpperCase())
}


// Pedindo o parâmetro:

let mensagem = prompt(`Escreva uma mensagem: `)


// Chamando a função e imprimindo

tamanhoEMensagemCapsLock()