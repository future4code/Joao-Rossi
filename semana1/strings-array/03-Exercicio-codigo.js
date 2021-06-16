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

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)


// Imprimindo o array novo

console.log(`Perfeito. Essa é a lista de tarefas que criei para você:
1. ${listaDeTarefas(0)};
2. ${listaDeTarefas(1)};
3. ${listaDeTarefas(3)};`)


// Perguntando se realizou alguma dessa tarefas

numeroDaTarefa = prompt(`Lista de tarefas:

1. ${listaDeTarefas(0)};
2. ${listaDeTarefas(1)};
3. ${listaDeTarefas(3)};

Você realizou alguma dessas tarefas? 
Se sim, digite o número da tarefa na lista acima:`)


// Correspondendo a tarefa ao índice na lista:

numeroNaLista = numeroDaTarefa - 1


// Imprimindo a nova lista  