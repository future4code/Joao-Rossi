function calculaNota(ex, p1, p2) {
  
  
  const media = (ex + 2*p1 + 3*p2)/6
  let conceito
  
  if (media >= 9) {
    conceito = "A"
  }else if (media >= 7.5 && media <9){
    conceito = "B"
  }else if (media >= 6.5 && media < 7.5){
    conceito ="C"
  }else if (media <6.5){
    conceito = "D"
  }
  return conceito;
  

}