// Pedindo nome e e-mail:

nome = prompt(`Olá, tudo bem? Digite o seu nome completo aqui:`)

email = prompt(`Ótimo!! Agora precisamos do seu e-mail:`)


// Arrumando o nome e o e-mail:

nomeDoUsuario = nome.trim()

emailDoUsuario = email.trim()


// Imprimindo a mensagem:

console.log(`O e-mail "${emailDoUsuario}" foi cadastrado com sucesso. Seja bem-vindo(a) ${nomeDoUsuario}!`)