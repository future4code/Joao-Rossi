import { Request, Response } from "express";
import UserDataBase from "../../data/users/UserDataBase";

export default async function createUser(
    req: Request,
    res: Response
) {
    let codeError: number = 400;
    try {
        const database = new UserDataBase();
        const users = await database.selectAllUsers()
        res.status(200).send({ message: "Deu certo!! 🤓", users })

    } catch (error: any) {
        res.status(codeError).send(error.message)
    }

}
