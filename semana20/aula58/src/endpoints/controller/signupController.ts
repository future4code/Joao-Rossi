import { Request, Response } from "express";


export const signup = async (
   req: Request,
   res: Response
) => {
   try {
      const { name, nickname, email, password, role } = req.body

      if (
         !name ||
         !nickname ||
         !email ||
         !password ||
         !role
      ) {
         throw new Error('Preencha os campos "name","nickname", "email" e "password"')
      }

      

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