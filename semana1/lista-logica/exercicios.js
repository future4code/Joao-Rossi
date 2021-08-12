// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const numero1 = Number(prompt('Insira um número:'))
  const numero2 = Number(prompt('Insira outro número:'))
  const areaRetangulo = numero1 * numero2

  console.log(areaRetangulo)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoNascimento = Number(prompt('Insira o ano que você nasceu:'))
  const anoAtual = Number(prompt('Em qual ano estamos hoje?'))
  const idade = anoAtual - anoNascimento

  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso/(altura ** 2)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Insira o seu nome aqui:')
  const idadeUsuario = prompt('Insira a sua idade aqui:')
  const email = prompt('Insira o seu email aqui:')

  console.log(`Meu nome é ${nome}, tenho ${idadeUsuario} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('Insira uma das suas três cores favoritas:')
  const cor2 = prompt('Insira mais uma das suas três cores favoritas:')
  const cor3 = prompt('Insira a sua última das três cores favoritas:')

  const grupoDeCores = [cor1, cor2, cor3]

  console.log(grupoDeCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let comparacao = string1.length === string2.length

  return comparacao
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiro = retornaPrimeiroElemento(array)
  const ultimo = retornaUltimoElemento(array)

  array[0] = ultimo
  array[array.length - 1] = primeiro

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let comparacaoString = string1.toUpperCase() === string2.toUpperCase()

  return comparacaoString

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Em que ano estamos?'))
  const anoNascimento = Number(prompt('Em que ano você nasceu?'))
  const anoRG = Number(prompt('Em que ano você tirou seu RG?'))

  const idade = anoAtual - anoNascimento
  const tempoRG = anoAtual - anoRG

  const verificadorMenos20 = idade <= 20 && tempoRG >= 5
  const verificadorMenos50 = idade <= 50 && tempoRG >= 10
  const verificador50 = idade > 50 && tempoRG >= 15

  console.log(verificadorMenos20 || verificadorMenos50 || verificador50)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  let condicao1 = ano % 400 === 0
  let condicao2 = ano % 4 === 0 && !(ano % 100 === 0 && ano !== 400)

  return condicao1 || condicao2


}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maioridade = prompt('Você é tem mais de 18 anos?')
  const escolaridade = prompt('Você já concluiu o Ensino Médio?')
  const disponibilidade = prompt('Você tem disponibilidade para se dedicar ao curso?')

  console.log(maioridade === 'sim' && escolaridade === 'sim' && disponibilidade === 'sim')
}