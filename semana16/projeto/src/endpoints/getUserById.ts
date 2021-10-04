import {Request, Response} from "express"
import selectUserById from "../data/selectUserById";

export default async function getUserById (
    req: Request,
    res: Response
) {
    try {
        // validar entradas da requisição → só será recebido um id por PathParams – não é necessário

        //* consultar o banco de dados:

        const user = await selectUserById(req.params.id)

        if (!user) {
            res
            .status(404)
            .send({
                message: 'Usuário não encontrado.'
            })
        }

        //* validar as saídas do banco:

        
            res
            .status(200)
            .send({
                message: 'Sucesso. Usuário encontrado!',
                id: user.id,
                username: user.username,
            })
        

        //* responder a requisição
        
    } catch (error: any | undefined) {
        res.status(400).send({message: error.message || error.sqlMessage});
    }
}