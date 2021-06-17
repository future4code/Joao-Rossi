// Array vazio

let listaDeTarefas = []


// Perguntando as tarefas do usuário:

let tarefa1 = prompt(`Olá, tudo bem? Você deve estar bastante ocupado, né? 
Vou te ajudar a se organizar criando uma lista com 3 tarefas programadas para o dia de hoje.

Digite aqui uma tarefa que você tem para hoje:`)


let tarefa2 = prompt(`Ótimo!

Agora digite a segunda tarefa do dia de hoje:`)


let tarefa3 = prompt(`Perfeito!

Agora digite mais uma:`)


// Criando a lista com as tarefas

listaDeTarefas.push(tarefa1.trim(), tarefa2.trim(), tarefa3.trim())


// Imprimindo o array novo

console.log(`Perfeito. Essa é a lista de tarefas que criei para você:
1. ${listaDeTarefas[0]};
2. ${listaDeTarefas[1]};
3. ${listaDeTarefas[2]};`)


// Perguntando se realizou alguma dessa tarefas

numeroDaTarefa = prompt(`Lista de tarefas:

1. ${listaDeTarefas[0]};
2. ${listaDeTarefas[1]};
3. ${listaDeTarefas[2]};

Você realizou alguma dessas tarefas? 
Se sim, digite o número da tarefa na lista acima:`)


// Correspondendo a tarefa ao índice na lista:

let numeroNaLista = numeroDaTarefa - 1


// Criando a nova lista:

listaDeTarefas.splice(numeroNaLista, 1)

novaLista = listaDeTarefas


// Imprimindo a nova lista

console.log(`Perfeito!

Ainda restam essas tarefas para você cumprir:

1. ${listaDeTarefas[0]};
2. ${listaDeTarefas[1]};

Força, Foco e Fé!`)