// Estabelecendo as funções:

function somar(numero1, numero2){
    let soma = numero1 + numero2

    return soma
}


function subtrair(numero1, numero2){
    let subtracao = numero1 - numero2

    return subtracao
}


function multiplicar(numero1, numero2){
    let multiplicacao = numero1 * numero2

    return multiplicacao
}


function dividir(numero1, numero2){
    let divisao = numero1 / numero2

    return divisao
}


// Pedindo os parâmetros:

let numero1 = Number(prompt('Insira um número: '))

let numero2 = Number(prompt('Insira outro número: '))


// Imprimindo os resultados

console.log(`O resultado da soma é: ${somar(numero1, numero2)};
O resultado da subtração é: ${subtrair(numero1, numero2)};
O resultado da multiplicação é: ${multiplicar(numero1, numero2)};
O resultado da divisão é: ${dividir(numero1, numero2)};`)