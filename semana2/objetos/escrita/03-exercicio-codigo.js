let carrinho = []

const fruta1 = {
    nome : 'Maçã',
    disponibilidade : true
}

const fruta2 = {
    nome : 'Banana',
    disponibilidade : true
}

const fruta3 = {
    nome : 'Banana',
    disponibilidade : true
}

function adicionarFruta(item, fruta) {
    carrinho[Number(item) - 1] = fruta.nome
    return carrinho
}

adicionarFruta(1, fruta1)
adicionarFruta(2, fruta2)
adicionarFruta(3, fruta3)

console.log(carrinho)

