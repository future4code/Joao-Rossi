const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

const nomeProduto = produtos.map((produto) => {
    return produto.nome
})

console.log(nomeProduto)

// Array com 5% de desconto:
const descontoProduto = produtos.map((produtoDesconsto) => {
    return `Produto: ${produtoDesconsto.nome} → Preço: R$ ${(produtoDesconsto.preco * 0.95).toFixed(2)}.`
})

console.log(descontoProduto)


// Array com apenas bebidas:
const bebidas = produtos.filter((bebida) => {
    return bebida.categoria === "Bebidas"
})

console.log(bebidas)


// Array com palavra Ypê:

const produtosYpe = produtos.filter((produtoYpe) => {
    return produtoYpe.nome.includes("Ypê")
})


console.log(produtosYpe)


// Anúncio

const anuncioYpe = produtosYpe.map((compreProduto) => {
    return `Compre ${compreProduto.nome} por R$ ${(compreProduto.preco).toFixed(2)}`
})

console.log(anuncioYpe)

