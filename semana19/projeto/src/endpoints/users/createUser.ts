import { User } from "../../entities/Users";
import { Request, Response } from "express";
import { generateId } from "../../services/generateId";
import UserData from "../../data/Users/UserData";

export async function createUser(req: Request, res: Response) {
    let codeError = 400

    try {
        const database = new UserData();
        const { name, email, password } = req.body;
        const id: string = generateId()
        const user: User = new User(id, name, email, password);

        if (password.length() < 6) {
            throw new Error('Please, enter a password with six or more characters')
        }

        
        await database.insertUser(user);
        
        res.status(201).send({ message: 'User created successfully', user })

    } catch (error: any) {
        res.status(codeError).send(error);
    }

}