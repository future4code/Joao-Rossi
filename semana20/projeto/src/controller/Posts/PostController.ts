import { Request, Response } from "express";
import PostBusiness from "../../business/Posts/PostBusiness";
import { CreatePostDTO } from "../../model/Posts/PostObject";
 

export default class PostController {

  
  
  async create(req: Request, res: Response) {
    const postBusiness = new PostBusiness()
    let errorCode = 400;
    try {
      
      let message = 'sucess'
      const token: string = req.headers.authorization as string

      const input: CreatePostDTO = {
        photo: req.body.photo,
        description: req.body.description,
        type: req.body.type, 
        token
      }
      console.log(input, token)
      const response = await postBusiness.create(input)

      res.status(200).send(response)

    } catch (error: any) {
      console.log('postController', error)
      res.status(errorCode).send(error.sqlMessage || error.message);
    }
  }

 /*  async login(req: Request, res: Response) {
    try {
      const userBusiness = new UserBusiness()
      const { email, password } = req.body;
      const data: LoginInputDTO = { email , password}
      const result = await userBusiness.login(data);
      res.status(200).send(result);
    } catch (error: any) {
      res.status(401).send(error.sqlMessage || error.message);
    }
  } */
}
