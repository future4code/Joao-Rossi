/* 

2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia 
elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. 
Faça um programa que receba a quantidade de quilowatts consumida por uma residência.

*/

// a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora

const consumoEnergia = 280

const contaEnergia = consumoEnergia * 0.05

console.log(`O valor da conta de energia é: R$${contaEnergia}`)


// b) Altere o programa para receber mais um valor: a porcentagem de desconto. 
// Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto

const consumoEnergia2 = Number(prompt('Insira a quantidade de kw/h consumido no mês:'))

const contaEnergia2 = consumoEnergia2 * 0.05

console.log(`O valor da conta de energia é: R$${contaEnergia2}`)
