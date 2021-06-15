// Colhendo a idade
const idade = Number(prompt('Olá, tudo bem? Digite aqui a sua idade: '))

// Criando as variáveis que irão armazenar os resultados da conversão:
const idadeEmMeses = idade * 12
const idadeEmDias = idade * 365
const idadeEmHoras = idadeEmDias * 24

// Imprimindo os resultados:
console.log('A sua idade em meses é:', idadeEmMeses)
console.log('A sua idade em dias é:', idadeEmDias)
console.log('A sua idade em horas é:', idadeEmHoras)