import { Request, Response } from "express";
import User from "../../classes/User"
import insertUser from "../../data/users/insertUser";
import idGenerator from "../../services/idGenerator";

export default async function createUser(
    req: Request,
    res: Response
) {
    let codeError: number = 400;
    const { name, email, age } = req.body;
    try {

        if (!name || !email) {
            codeError = 400;
            throw new Error('Por favor, verifique os campos "name" e "email.')
        }

        if (!email.includes('@')){
            codeError = 400;
            throw new Error('Por favor, insira um email válido.')
        }

        const id : string = new idGenerator().toString()
        const user = new User(id, name, email, age)
        await insertUser(user)
        res.status(200).send({ message: "Deu certo!! 🤓", user })

    } catch (error: any) {
        res.status(codeError).send(error.message)
    }

}
