// Exercício 1:

// Por algum motivo eu não conseguia pedir a inserção do nome e da idade sem deixar os itens a) a d) em comentário.
// Desse modo, até o pedido da inserção dos valores das variáveis, eu deixarei em comentário. Espero que dê para entender. 


// Criando as variáveis:

// let nome
// let idade


// Imprimindo os tipos das variaveis:

// console.log(typeof nome, idade)


// O console retornou "undefined". Acredito que retornou isso porque o valor necessita de posterior definição.
// Não seria um valor nulo porque nulo é um valor definido, porém vazio.
// Quando o valor não é definido, sequer o tipo da variável pode ser retornado. 


// -------------- Fim da primeira parte do Exercício 1 -----------------------


// Pedindo  a "nome":
let nome = prompt('Qual o seu nome?')


// Definindo a variável "idade"
let idade = prompt('Qual a sua idade?')


// Imprimindo o tipo das variáveis
console.log(typeof nome, typeof idade)
// Retornou: "string string". 
// Justificativa: Como os valores foram definidos, tanto o conteúdo quanto o tipo da variável puderam ser definidos.


// Imprimindo a mensagem:
console.log('Olá, ' + nome + '. Você tem ' + idade + ' anos.')
// Retornou: 'Olá João Filippe. Você tem 28 anos'.


// ---------------- FIM DO EXERCÍCIO 1 -----------------------




//Exercício 2:

// Variável com o número de gatos que a pessoa tem:
let numeroGatos = prompt('Quantos gatos você tem?')
// Impressão:
console.log('Quantos gatos você tem? ', numeroGatos)
// Retornou: 


// Variável de quantos ovos come por dia:
let ovosComidosDia = prompt('Quantos ovos você come por dia?')
// Impressão:
console.log('Quantos ovos você come por dia? ', ovosComidosDia)


// Variável de quantas vezes pintou o cabelo na vida:
let vezesPintouCabelo = prompt('Quantas vezes você já pintou o cabelo na vida?')
// Impressão:
console.log('Quantas vezes você já pintou o cabelo na vida? ', vezesPintouCabelo)


// -------------- FIM EXERCÍCIO 2 -----------




// Exercício 3

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores:

let c = 10
let d = 25

let a = d
let b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
