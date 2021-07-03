function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let valorCompra
  if (quantidade >11){
    valorCompra = quantidade
  } else {
    valorCompra = 1.3 * quantidade
  }
  
  return valorCompra
}