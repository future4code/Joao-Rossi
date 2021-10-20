idadeUsuario = Number(prompt('Qual a sua idade?'))
const verificadorIdade = (idade) => {
    if (idade >= 18) {
        console.log(`Parabéns, você pode dirigir!`)
    } else {
        console.log (`Sinto muito. Porém, você ainda não tem idade para dirigir.`)
    }
}

verificadorIdade(idadeUsuario)