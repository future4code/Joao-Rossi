// EXERCÍCIO 01
function inverteArray(array) {

  // Criando o Array Invertido: 
  let arrayInvertido = []

  // Criando o loop:
  for (let i = array.length - 1; i >= 0; i--) {
    arrayInvertido.push(array[i])
  }
  return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {

  // Criando o array que irá armazenar os números
  let arrayNovo = []
  
  // Criando o loop
  for (let i = 0;i < array.length;i++) {
    
    // Criando as condições:
    if (array[i] % 2 === 0) {
      arrayNovo.push(array[i] ** 2)
    }
  }
  return arrayNovo

}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
// Criando o array que irá ser o novo array:
  let arrayPar = []

  // Criando o loop:
  for (i = 0; i < array.length; i ++){
  // Criando as condições:
    if (array[i] % 2 === 0) {
      arrayPar.push(array[i])
    } 
  }

  return arrayPar

}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {

// Criando a variável que irá armazenar o maior número:
let maiorNumero = []

  for (i = 0; i <array.length; i++){
    if (array[i] > maiorNumero) {
      maiorNumero = array[i]
    }
  }
 return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {


// const booleano1 = true
// const booleano2 = false
// const booleano3 = !booleano2 = true
// const booleano4 = !booleano3 = false

// a) `booleano1 && booleano2 && !booleano4` → false

// b) `(booleano1 && booleano2) || !booleano3` → false

// c)  `(booleano2 || booleano3) && (booleano4 || booleano1)` →  true

// d) `!(booleano2 && booleano3) || !(booleano1 && booleano3)` → true

// e) `!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)` → true

return [false, false, true, true, true]

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

  let arrayComPares = []

  for (let i = 0; arrayComPares.length <n; i++){
    if (i % 2 === 0){
      arrayComPares.push(i)
    }
  }
  return arrayComPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'

  if (a === b && b === c && a === c) {
    return 'Equilátero'
  } else if (a !== b && b !== c && a !== c) {
    return 'Escaleno'
  } else {
    return 'Isósceles' 
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
