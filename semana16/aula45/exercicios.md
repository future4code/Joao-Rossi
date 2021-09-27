# Exercícios
### 2 b)
Erro encontrado:
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
Código de Erro: 1062. Entrada duplicada '002' para a chave primária.

### c)
Error Code: 1136. Column count doesn't match value count at row 1
Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1.

### d)
Error Code: 1364. Field 'name' doesn't have a default value
Código de erro . O campo "name" não tem um valor padrão.

### e)
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

## 3.  
### c) 
Ela retorna um valor nulo. Isso acontece porque não existe nenhuma linha com gênero inválido.

### e)
Error Code: 1054. Unknown column 'nome' in 'field list'

## 4
### a) 
O indicador **" * "** indica para buscar todos os campos em que a linha contenha um nome que comece com A (LIKE %A) ou J (LIKE %J). Essas condições estão entre parênteses porque a query se satisfaz em começar com A ou começar com J. Por outro lado, cumprida uma dessas condições, deve-se cumprir OBRIGATORIAMENTE o salário ser maior que R$3.000,00.