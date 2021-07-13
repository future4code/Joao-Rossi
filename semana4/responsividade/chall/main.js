const string = prompt('Digite uma palavra');

const array = string.split('');

let vogais = [];
let consoantes = []

const verificarVogais = (letra) => {
    
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
        vogais.push(letra)
    }
}

const verificarConsoantes = (letra) => {
    
    if (letra !== 'a' || letra !== 'e' || letra !== 'i' || letra !== 'o' || letra !== 'u'){
        consoantes.push(letra)
    }
}

array.map(verificarVogais(array) => {
    return vogais
})

array.map(verificarConsoantes(array) => {
    return consoantes
})

