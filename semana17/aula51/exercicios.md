# Aula 46
## Exercício 1
**a)** 
Irá excluir a coluna "salário" da tabela "Actor". 

**b)** 
Na tabela "Actor", irá alterar a descrição da coluna "gender" para "sex".

**c)** 
Na tabela "Actor", irá alterar o tipo de dados da coluna "gender" de VARCHAR(6) — ou seja, string com até 6 caracteres — para VARCHAR(225) — ou seja, string com até 225 caracteres.

**d)**
 ALTER TABLE Actor CHANGE gender gender VARCHAR(100).

## Exercício 2
**a)** 
UPDATE Actor SET birth_date = "1930-11-19" WHERE id = "003".

**b)** 
UPDATE Actor SET name = "JULIANA PAES" WHERE id = "005";
UPDATE 
Actor SET name = "Juliana Paes" WHERE id = "005".

**c)** 
UPDATE Actor SET name = "NOVO NAME" salary= XXXX.XX birth_date = AAAA-MM-DD gender="NOVO GENDER" WHERE id = "005".

**d)** 
EXECUTE SUCCESS:  
  UPDATE Actor SET name= "Rodrigo Pandolfo" WHERE id = "006".


## Exercício 3
**a)** 
DELETE FROM Actor WHERE name = "Fernanda Montenegro".

**b)** 
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000.

## Exercício 4
**a)** 
SELECT MAX(salary) FROM Actor;

**b)** 
SELECT MIN(salary) FROM Actor WHERE gender = "female";

**c)** 
SELECT COUNT(*) FROM Actor WHERE gender = "female";

**d)** 
SELECT SUM(salary) FROM Actor;

## Exercício 5

**a)** 
A query requisita do banco de dados que ele quantifique a quantidiade de valores admitidos para a coluna "gender" da tabela Atores, agrupando os resultados por gênero.

**b)** 
SELECT id, name FROM Actor
ORDER BY name DESC;

**c)** 
SELECT * FROM Actor
ORDER BY salary;

**d)** 
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

**e)** 
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

## Exercício 6

**a)** 
ALTER TABLE Movie ADD playing_limit_date DATE;

**b)** 
ALTER TABLE Movie CHANGE rating rating FLOAT;

**c)**
UPDATE Movie
SET	playing_limit_date = "2021-10-10"
WHERE id = "001"

UPDATE Movie
SET `playing_limit_date` = '2021-09-28' 
WHERE (`id` = '004');

**d)**
Resposta:
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0;

Isso deve ter ocorrido porque a query foi válida, porém como não houve nada a ser alterado, não houve alteração efetiva na tabela.



## Exercício 6

**a)** 

**b)** 

**c)**

**d)** 

**e)** 


## Exercício 6

**a)** 

**b)** 

**c)**

**d)** 

**e)** 
