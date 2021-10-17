import { Request, Response } from "express";
import User from "../classes/User"
import selectAllUsers from "../data/selectAllUsers";

export default async function createUser(
    req: Request,
    res: Response
) {
    let codeError: number = 400;
    try {

        const users : User[] = await selectAllUsers()
        res.status(200).send({ message: "Deu certo!! 🤓", users })

    } catch (error: any) {
        res.status(codeError).send(error.message)
    }

}
