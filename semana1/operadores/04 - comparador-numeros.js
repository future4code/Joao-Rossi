// Colhendo o número:
const primeiroNumero = Number(prompt('Olá, tudo bem? Insira aqui um número, por favor:'))
const segundoNumero = Number(prompt('Insira outro número, por favor:'))

// Criando variáveis para imprimir o resultado das comparações:
const primeiraComparacao = primeiroNumero > segundoNumero
const segundaComparacao = primeiroNumero === segundoNumero
const terceiraComparacao = (primeiroNumero % segundoNumero) === 0
const quartaComparacao = (segundoNumero % primeiroNumero) === 0


// Imprimindo os resultados:
console.log('O primeiro número é maior que o segundo?', primeiraComparacao)
console.log('O primeiro número é igual ao segundo?', segundaComparacao)
console.log('O primeiro número é divisível pelo segundo?', terceiraComparacao)
console.log('O segundo número é divisível pelo primeiro?', quartaComparacao)