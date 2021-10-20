console.log('Hello World')

// - Para passar argumentos utilizamos o comando "process.argv[x]" 
// com x sendo um número maior ou igual a 2. Isso porque com x=0, 
// retornará "node, e com x=1, retornará o arquivo.

// Exercício 1
console.log('Exercício 1\n')
console.log(`b)\nOlá, ${process.argv[2]}! Você tem ${process.argv[3]} anos.\n`)

const idade = Number(process.argv[3])

const idadeSete= idade + 7

console.log(`c)\nOlá, ${process.argv[2]}. Você tem ${process.argv[3]}. Em sete anos você terá ${idadeSete}.\n\n`)


//Exercício 20
console.log('Exercício 2\n')

const add = (x,y) => {
    return (x+y) 
}
