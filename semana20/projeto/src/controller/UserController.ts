import { Request, Response } from "express";
import UserBusiness, { LoginInputDTO } from "../business/UserBusiness";
import { SignupInputDTO } from "../business/UserBusiness";
import UserData from "../data/UserData";

export default class UserController {
  async signup(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const input: SignupInputDTO = {
      email,
      name,
      password,
    };

    try {
      const token = await this.userBusiness.signup(input);

      res
        .status(200)
        .send({ message: "Usuário cadastrado com sucesso", token });
    } catch (error: any) {
      if (error.message) return res.status(400).send(error.message);
      res.status(400).send("Erro no signup");
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const input: LoginInputDTO = {
      email,
      password,
    };
    try {
      const respostaBusiness = await this.userBusiness.login(input);
      res.status(200).send({ message: "Deu certo", input, respostaBusiness });
    } catch (error: any) {
        res.status(400).send(error)
    }
  }
}
