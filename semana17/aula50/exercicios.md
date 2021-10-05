## Exercício 1
**a)** O comando "CREATE TABLE" é usado para criar a tabela, logo após ele deve vir o nome. Entre os parênteses devemos ter os nomes das colunas com seus tipos e condições. O tipo "VARCHAR" é usado para strings e deve-se colocar entre parênteses o número máximo de caracteres permitidos. O convencional é que seja 225.
Ao indicar determinada coluna com "PRIMARY KEY", tal coluna torna-se a padrão da tabela e será por meio dela que as linhas serão organizadas. Tal coluna costuma ser o "id" da linha e seu valor pode ser numérico ou mesmo uma string.
Também podemos ter colunas do tipo "DATE", que deve ser no formato "YYYY-MM-DD".
A restrição "NOT NULL" impede que seja passada um valor vazio para a tabela.

**b)** O comando "SHOW DATABASES" retornou "information_schema" e "lovelace-2147863-joao-rodrigues". Isso aconteceu porque trouxe as bases de dados de propriedade de determinado usuário. O comando "SHOW TABLES" retorna o nome da base de dados principal. Por

**c)** O comando "DESCRIBE" nos retorna os nomes das colunas e também seus tipos e condições/restrições.


## Exercício 2

**a)** 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

**b)** Duplicate entry '002' for key 'PRIMARY'
Tradução: Entrada duplicada "002" para uma chave "PRIMARY".

**c)**
Error Code: 1136. Column count doesn't match value count at row 1
Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1.

**d)**
Error Code: 1364. Field 'name' doesn't have a default value
Código de erro . O campo "name" não tem um valor padrão.

**e)**
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

## Exercício 3
**a)**
SELECT * from Actor WHERE gender = "female";

**b)**
SELECT salary from Actor WHERE name = "Tony Ramos"

**c)** 
Ela retorna um valor nulo. Isso acontece porque não existe nenhuma linha com gênero inválido.

**e)**
Error Code: 1054. Unknown column 'nome' in 'field list'. Não há uma coluna "nome" na tabela.

## Exercício 4
**a)** 
O indicador **" * "** indica para buscar todos os campos em que a linha contenha um nome que comece com A (LIKE %A) ou J (LIKE %J). Essas condições estão entre parênteses porque a query se satisfaz em começar com A ou começar com J. Por outro lado, cumprida uma dessas condições, deve-se cumprir OBRIGATORIAMENTE o salário ser maior que R$3.000,00.

**b)**
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

**c)**
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

**d)** 
SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;


  ## Exercício 5
  **a)**
  CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
)

**b)**
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-06-01",
    7
)

**c)**
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
    "Doce de Mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
)

**d)**
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"003",
    "Dona Flor e seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
)

**e)**
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Minha Mãe é uma Peça",
    "Um dia, após descobrir que eles consideram ela uma chata, resolve sair de casa sem avisar para ninguém, deixando todos, de alguma forma, preocupados com o que teria acontecido..",
    "2013-06-21",
    10
)


## Exercício 6

**a)**
SELECT id, title, rating FROM Movie WHERE id = "002";

**b)**
SELECT * FROM Movie WHERE name = "Minha Mãe é uma Peça";

**c)**
SELECT id, title, synopsis FROM Movie WHERE rating > 9;


## Exercício 7

**a)**
SELECT * FROM Movie
WHERE title LIKE "%vida%";

**b)**
SELECT * FROM Movie
WHERE title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%";

**c)**
SELECT * FROM MOVIE
WHERE release_date < "2021-10-05";

**d)**
SELECT * FROM MOVIE
WHERE release_date < "2021-10-05" AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;