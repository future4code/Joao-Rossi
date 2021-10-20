import {Request, Response} from "express";
import updateUser from "../data/updateUser";

export default async function createUser (
    req: Request,
    res: Response
) {
    try {
       
        await updateUser (
            req.params.id,
            req.body.name,
            req.body.username,
            req.body.email
        )

        //* responder a requisição:
        res
                .status(200)
                .send('Usuário atualizado com sucesso!')
        
    } catch (error: any | undefined) {
        res.status(400).send({message: error.message || error.sqlMessage});
    }
}