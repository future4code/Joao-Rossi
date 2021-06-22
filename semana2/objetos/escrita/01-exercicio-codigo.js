const pessoa = {
    nome: 'João Filippe', 
    apelidos: ['Johnny', 'Jão', 'Tranks']
 }
 
function apresentacao() {
    console.log (`Olá, tudo bem? Eu sou o ${pessoa.nome[1]}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}!!`)
}


apresentacao()

pessoa.apelidos = ['Apelido 1', 'Apelido 2', 'Apelido 3']

apresentacao()

