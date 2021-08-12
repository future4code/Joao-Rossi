// Colhendo as idades:
const idade = Number(prompt('Olá, tudo bem? Digite aqui a sua idade: '))
const idadeMelhorAmigx = Number(prompt('Digite a idade do seu melhor amigo ou de sua melhor amiga: '))

// Criando uma variável para a comparação das idades:
const comparacaoIdade = idade > idadeMelhorAmigx

// Criando uma variável para armazenar a diferença das idades:
const diferencaIdade = idade - idadeMelhorAmigx

// Imprimindo os resultados:
console.log('Sua idade é maior do que a do seu melhor amigo? ', comparacaoIdade)
console.log('A diferença das idades é ', diferencaIdade)