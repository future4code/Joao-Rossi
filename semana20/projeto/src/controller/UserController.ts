import { Request, Response } from "express";
import UserBusiness from "../business/User.business";
import { SignupInputDTO } from "../business/User.business"
import { FirestoreUserDatabase } from "../data/FirestoreUserDatabase";
import UserData from "../data/User.data";

export default class UserController {
    private userBusiness: UserBusiness

    constructor() {
        this.userBusiness = new UserBusiness(new UserData())
    }

    signup = async (req: Request, res: Response) => {
        const { name, email, password } = req.body

        const input: SignupInputDTO = {
            email,
            name,
            password
        }

        try {

            const token = await this.userBusiness.signup(input)

            res.status(200).send({ message: "Usuário cadastrado com sucesso", token })

        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro no signup")
        }
    }


}