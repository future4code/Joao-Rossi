import {Request, Response} from "express";
import insertUser from "../data/insertUser"

export default async function createUser (
    req: Request,
    res: Response
) {
    try {
        //* validar entradas da requisição:
        if (
            !req.body.name ||
            !req.body.username ||
            !req.body.email)
            {
                res
                .status(400)
                .send('Por favor, preencha os campos "name", "nickname" e "email".')
            }


        //* consultar o banco de dados:
        // Preciso criar um "id":
        const id : string = (Date.now() + Math.random()).toString()


        await insertUser (
            // É uma função que conversa com o banco de dados → por isso ela está na pasta "data":
            id,
            req.body.name,
            req.body.username,
            req.body.email
        )

        //* responder a requisição:
        res
                .status(200)
                .send('Usuário criado com sucesso!')
        
    } catch (error: any | undefined) {
        res.status(400).send({message: error.message || error.sqlMessage});
    }
}