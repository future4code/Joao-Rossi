//* Importando as bibliotecas:
import express, { Request, Response } from "express";
import cors from "cors"; // *! Essa biblioteca é importante para você conseguir acessar a sua API no próprio computador

import { countries } from "./data"; // * Importando os países;

const app = express(); // * Criando o método;

app.use(express.json()); // * Definindo que o express irá voltar em JSON;
app.use(cors()); // * Chamando o CORS para evitar que a máquina quebre

// *Definindo a porta 3003
app.listen(3003, () => {
  console.log("Bem-vindo! O servidor está rodando na porta: https://localhost:3003. Good Hacking! :)");
});

// * Exercício 1 * GET – Requisição de todos os países
app.get("/countries", (req: Request, res: Response) => {
  res.status(200).send(countries);
});

// * Exercício 2 * GET - Requisição de um país específico via :id
app.get("/countries/:id", (req: Request, res: Response) => {
  // * Verificação se o parâmetro passado é válido → verificando se é um NÚMERO entre 0 e 196

  if (
    !Number(
      req.params.id &&
        ((Number(req.params.id) < 197) && 
        Number(req.params.id) > 0)
    )
  ) {
    res.status(404).send("Por favor, insira um número de 0 a 196");
  } else {
    // * Encontrar o país com o id enviado:
    const result = countries.find(
      (country) => country.id === Number(req.params.id)
    );

    // * 2º verificar se existe um result:
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send("Por favor, insira um número de 0 a 196");
    }
  }
});

// * Exercício 3 * GET - Requisição de um país por filtros

app.get("/countries/:id", (req: Request, res: Response) => {
  // * Verificação se o parâmetro passado é válido → verificando se é um NÚMERO entre 0 e 196

  if (
    !Number(
      req.params.id &&
        ((Number(req.params.id) < 197) && 
        Number(req.params.id) > 0)
    )
  ) {
    res.status(404).send("Por favor, insira um número de 0 a 196");
  } else {
    // * Encontrar o país com o id enviado:
    const result = countries.find(
      (country) => country.id === Number(req.params.id)
    );

    // * 2º verificar se existe um result:
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send("Por favor, insira um número de 0 a 196");
    }
  }
