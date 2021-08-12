const objeto1 = {
    nome: 'João',
    idade: 28,
    profissão: 'advogado'
 }


 const objeto2 = {
    nome: 'Filippe', 
    idade: 28, 
    profissão: 'programador'
 }

 function retorno(objeto) {
    array = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissão]
    return array
 }

 console.log(retorno(objeto1))
 console.log(retorno(objeto2))


