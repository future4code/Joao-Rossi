let lista = [20, 11, 288, 145, 288, 1909]
let tamanhoLista = lista.length 

const funcaoImprimir = (array, arrayLength) => {
    for (let i = 0; i < arrayLength; i++) {
        console.log(array[i])
    }
}

funcaoImprimir(lista, tamanhoLista)

const funcaoListar = (array, arrayLength) => {
    for (let i = 0; i < arrayLength; i++) {
        console.log(`O elemento do index ${i+1} é: ${array[i]};`)
    }
}

funcaoListar(lista, tamanhoLista)

const retornarMaiorNumero = (array, arrayLength) => {
    let maiorNumero = -Infinity    
    for (let i = 0; i < arrayLength; i++){
        let numeroAtual = array[i]    
        if (array[i] > maiorNumero) {
            maiorNumero = numeroAtual
        }
    }

    return maiorNumero
}


console.log(retornarMaiorNumero(lista, tamanhoLista))
