import { Request, Response } from "express";
import User from "../../classes/User"
import UserDataBase from "../../data/users/UserDataBase";
import idGenerator from "../../services/idGenerator";

export default async function createUser(
    req: Request,
    res: Response
) {
    
    let codeError: number = 400;

    try {
        const { name, email, age } = req.body;
        const database = new UserDataBase()
        const id = idGenerator();
        const user = new User(id, name, email, age)

        if (!name || !email) {
            codeError = 400;
            throw new Error('Por favor, verifique os campos "name" e "email.')
        }

        if (!email.includes('@')) {
            codeError = 400;
            throw new Error('Por favor, insira um email válido.')
        }

        
        await database.insertUser(user)

        res.status(201).send({ message: "Deu certo!! 🤓 Aqui está o seu novo usuário:", user })

    } catch (error: any) {
        res.status(codeError).send(error.message)
    }

}
