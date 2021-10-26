import { Request, Response } from "express";
import { SignupBussiness } from "../business/SignupBussiness";


export const signup = async (
   req: Request,
   res: Response
) => {
   try {
      const signupBussiness = new SignupBussiness();
      const { name, email, password, role } = req.body

      if (
         !name ||
         !email ||
         !password ||
         !role
      ) {
         throw new Error('Preencha os campos "name", "email" e "password"')
      }
     
      const token: string = await signupBussiness.signup(name, email, password, role)
      

      res
         .status(201)
         .send({
            message: "Usuário criado!",
            token
         })

   } catch (error: any) {
      res.status(400).send(error.message)
   }
}