import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import createUser from "./endpoints/createUser"
import getUserById  from "./endpoints/getUserById"
import changeUser from "./endpoints/changeUser"
import createTask  from "./endpoints/createTask"

dotenv.config();

//* Configurando o knex (para conectar ao MySQL – Banco de Dados)
export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

//* Configurando o Express (para configurar a comunicação entre o Front e o Back)
const app: Express = express();
   //* Para usar o JSON como forma de se comunicar;
app.use(express.json());

//* Para o computador não "achar estranho" estarmos requisitando uma informação para ele próprio:
app.use(cors());


//* Endpoint para a criação de usuário:
app.post ('/user', createUser)

//* Endpoint para buscar um usuário pelo id:
app.get ('/user/:id', getUserById)

//* Endpoint para editar um usuário pelo id:
app.put ('/user/edit/:id', changeUser)


//* Endpoint para criar uma tarefa:
app.post('/task', createTask)

//* Reservando a porta para o localhost:
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});


