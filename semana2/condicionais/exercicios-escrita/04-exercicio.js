// Ingresso < 15
// Filme: fantasia

const generoDoFilme = prompt(`O filme escolhido é do gênero "fantasia"?
Responda com "Sim" ou "Não":`).toLowerCase()

const valorDoIngresso = Number(prompt(`Qual o valor do ingresso?`))

const resultado = (genero, valor) => {
    if (genero === "sim" && valor < 15) {
        console.log (`Bom filme!`)
    } else {
        console.log (`Escolha outro filme :(`)
    }
}

resultado(generoDoFilme, valorDoIngresso)