import { Express, Request, Response } from "express";
import User from "../classes/User"
import insertUser from "../data/insertUser";

export default async function createUser(
    req: Request,
    res: Response
) {
    // let codeError: number = 400;
    // try {
    //     const id: string = (Date.now() + Math.random()).toString()

    //     if (!req.body.name ||
    //         !req.body.email) {
    //         codeError = 400;
    //         throw new Error('Por favor verifique se os dados foram passados corretamente.')
    //     }

    //     console.log(req)


    // } catch (error: any) {
    //     res.status(codeError).send({ message: error.message })
    // }
    console.log(req.body)
    const {name, email} = req.body
    const id: string = (Date.now() + Math.random()).toString()
    console.log(id)
    console.log (name)
    console.log (email)
    const user = new User (id, name, email);
    console.log (user)
    insertUser(user)
    res.status(200).send({ id : id, message :'sucesso', user: user})
}