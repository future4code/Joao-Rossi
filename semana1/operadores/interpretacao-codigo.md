EXERCÍCIO 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

RESULTADO:
a. False
b. False
c. True
d. boolean

-----------------------------------

EXERCÍCIO 2

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

RESPOSTA:
    O comando prompt retorna um string. Supondo que o primeiroNumero seja "12" e o segundoNumero seja "560", o console irá imprimir 12560.
Caso queira que retorne 12+560 (ou seja, 572), o programa deverá ser escrito da seguinte forma:

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)