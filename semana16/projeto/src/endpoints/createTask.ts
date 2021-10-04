import {Request, Response} from "express"

export default async function createTask (
    req: Request,
    res: Response
) {
    try {
        //* validar entradas da requisição:

        //* consultar o banco de dados:

        //* validar as saídas do banco:

        //* responder a requisição
        
    } catch (error: any | undefined) {
        send.status(400).send({message: error.message || error.sqlMessage});
    }
}