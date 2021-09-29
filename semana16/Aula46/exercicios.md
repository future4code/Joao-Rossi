# Aula 46
## Exercício 1
**a)** Irá excluir a coluna "salário" da tabela "Actor". 
**b)** Na tabela "Actor", irá alterar a descrição da coluna "gender" para "sex".
**c)** Na tabela "Actor", irá alterar o tipo de dados da coluna "gender" de VARCHAR(6) — ou seja, string com até 6 caracteres — para VARCHAR(225) — ou seja, string com até 225 caracteres.
**d)** ALTER TABLE Actor CHANGE gender gender VARCHAR(100).

## Exercício 2
**a)** UPDATE Actor SET birth_date = "1930-11-19" WHERE id = "003".
**b)** UPDATE Actor SET name = "JULIANA PAES" WHERE id = "005";
UPDATE Actor SET name = "Juliana Paes" WHERE id = "005".
**c)** UPDATE Actor SET name = "NOVO NAME" salary= XXXX.XX birth_date = AAAA-MM-DD gender="NOVO GENDER" WHERE id = "005".
**d)** EXECUTE SUCCESS:  
  UPDATE Actor SET name= "Rodrigo Pandolfo" WHERE id = "006".
  
## Exercício 3
**a)** DELETE FROM Actor WHERE name = "Fernanda Montenegro".
**b)** DELETE FROM Actor WHERE gender = "male" AND salary > 1000000.