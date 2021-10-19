## Exercício 1
**a)** Ao se usar strings, há uma maior gama de caracteres para poder compor o token. Assim, há uma garantia maior para que o token gerado seja único e, portanto, evite duplicidade de ids nos bancos de dados.

## Exercício 2
**a)** Esse código é responsável por estabelecer a conexão com o banco de dados (na função connection) e também por criar a funcionalidade de inserir um usuário na tabela.

**b)**
 CREATE TABLE 19_aula55_users(  
    id VARCHAR(255) NOT NULL primary key,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL
);

ALTER TABLE 19_aula55_users
    CHANGE email email VARCHAR(255) UNIQUE NOT NULL


## Exercício 3
**a)**
O "as string" é uma instrução para o compilador ler o retorno do método como um string.


