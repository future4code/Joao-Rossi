import express, { Express, Request, Response } from "express";
import cors from "cors";

import { accounts } from "./accounts";
import { verifyAge } from "./functions";

const app: Express = express();

app.use(express.json());
app.use(cors());

import { AddressInfo } from "net";

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

// * EndPoint para criar usuários:
app.post("/users/newAccount", (req: Request, res: Response) => {
  try {
    // consultar ou alterar base de dados → receber os dados do usuário
    const { name, CPF, dateOfBirthAsString } = req.body; // dateOfBirth virá na forma de string, no formato DD/MM/YYY, porém, precisamos transformá-lo para o formato do JS
    const [day, month, year] = dateOfBirthAsString.split("/"); // Uma string pode ser considerada como um array e, por isso, podemos desestruturá-la como um array
    // O método split seleciona um caracter como o "ponto"
    const dateOfBirth: Date = new Date(`${year}-${month}-${day}`);

    if (verifyAge(dateOfBirthAsString) < 18 ) {
        res.statusCode = 406
        throw new Error ('O usuário deve ser maior de idade.')
    }
    
    accounts.push({
      name,
      CPF,
      dateOfBirth,
      balance: 0,
      statement: [],
    });

    res.status(200).send({ message: "Conta criada com sucesso" });

  } catch (error: any) {
    console.log(error);
    res.send(error.message);
  }
});

// * Endpoint para visualizar os usuários:

app.get("/users", (req: Request, res: Response) => {
  try {
    res.status(200).send(accounts);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});
