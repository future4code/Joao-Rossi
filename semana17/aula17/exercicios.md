## Exercício 1
**a)** O comando "CREATE TABLE" é usado para criar a tabela, logo após ele deve vir o nome. Entre os parênteses devemos ter os nomes
das colunas com seus tipos e condições. O tipo "VARCHAR" é usado para strings e deve-se colocar entre parênteses o número máximo de
caracteres permitidos. O convencional é que seja 225.
Ao indicar determinada coluna com "PRIMARY KEY", tal coluna torna-se a padrão da tabela e será por meio dela que as linhas serão
organizadas. Tal coluna costuma ser o "id" da linha e seu valor pode ser numérico ou mesmo uma string.
Também podemos ter colunas do tipo "DATE", que deve ser no formato "YYYY-MM-DD".
A restrição "NOT NULL" impede que seja passada um valor vazio para a tabela.

**b)** O comando "SHOW DATABASES" retornou "information_schema" e "lovelace-2147863-joao-rodrigues". Isso aconteceu porque trouxe as
bases de dados de propriedade de determinado usuário. O comando "SHOW TABLES" retorna o nome da base de dados principal. Por

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
