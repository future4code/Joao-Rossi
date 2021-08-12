// Criando a função para retornar o nome dos pets

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomeDosPets = pets.map((pets) => {
     return pets.nome
 })


//  Imprimindo a nova array:

 console.log(nomeDosPets)


 // Criando o array com apenas os cachorros salsichas

 const petsSalsichas = pets.filter((pets) => {
     return pets.raca === "Salsicha"
 })

//  Imprimindo a nova array:

console.log(petsSalsichas)

// Mensagem somente para poodles:

const poodles = pets.filter((poodle) => {
    return poodle.raca === 'Poodle'
})

const mensagemPoodles = poodles.map((poodle) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}`
})

console.log(mensagemPoodles)

