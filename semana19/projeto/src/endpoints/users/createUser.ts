import { User } from "../../entities/Users";
import { Request, Response } from "express";
import { generateId } from "../../services/generateId";
import {UserDataBase} from "../../data/Users/UserDataBase";

export async function createUser(
    req: Request,
    res: Response
) {
    let codeError = 400

    try {
        const { username, email, password } = req.body;
        const database = new UserDataBase();
        const id: string = generateId();
        const user: User = new User(id, username, email, password);


        if (!username || !email) {
            codeError = 400;
            throw new Error('Por favor, verifique os campos "name" e "email.')
        }

        if (!email.includes('@')) {
            codeError = 400;
            throw new Error('Por favor, insira um email válido.')
        }

        if (password.length < 6) {
            throw new Error('Please, enter a password with six or more characters')
        }
        await database.insertUser(user)

        res.status(201).send({ message: 'User created successfully', user })

    } catch (error: any) {
        res.status(codeError).send(error.message);
    }

}