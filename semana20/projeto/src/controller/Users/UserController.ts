import { Request, Response } from "express";
import UserBusiness from "../../business/Users/UserBusiness";
import User from "../../model/Users/User" 
import { LoginInputDTO, ResultUserBusiness, SignupInputDTO } from "../../model/Users/UserObject";

export default class UserController {
  
  async signUp(req: Request, res: Response) {
    let errorCode = 400;
    try {
      const userBusiness = new UserBusiness()
      const { name, email, password, role } = req.body;
      const input: SignupInputDTO = { name, email, password, role };

      const result: ResultUserBusiness = await userBusiness.signup(input);

      const { statusCode, resultMessage } = result;

      if (statusCode === 200) {
        const token = resultMessage;
        res
          .status(statusCode)
          .send({ message: "Usuário criado com sucesso", token });
      } else {
        const message = resultMessage;
        res.status(statusCode).send(message);
      }
    } catch (error: any) {
      res.status(errorCode).send(error.sqlMessage || error.message);
    }
  }

  async login(req: Request, res: Response) {
    try {
      const userBusiness = new UserBusiness()
      const { email, password } = req.body;
      const data: LoginInputDTO = { email , password}
      const result = await userBusiness.login(data);
      res.status(200).send(result);
    } catch (error: any) {
      res.status(401).send(error.sqlMessage || error.message);
    }
  }
}
