import { Request, Response } from "express";
import PostBusiness from "../../business/Posts/PostBusiness";
import Post from "../../model/Posts/Post";
import { CreatePostDTO, PostRequestDTO } from "../../model/Posts/PostObject";

export default class PostController {
  async create(req: Request, res: Response) {
    const postBusiness = new PostBusiness();
    let errorCode = 400;
    try {
      let message = "sucess";
      const token: string = req.headers.authorization as string;

      const input: CreatePostDTO = {
        photo: req.body.photo,
        description: req.body.description,
        type: req.body.type,
        token,
      };
      const response = await postBusiness.create(input);
      if (response) {
        res.status(200).send(`Sucesso! Aqui está o id do post: ${response}`);
      }
    } catch (error: any) {
      res.status(400).send(error.sqlMessage || error.message);
    }
  }

  async get(req: Request, res: Response) {
    try {
      const postBusiness = new PostBusiness();

      const token = req.headers.authorization as string;
      const idPost = req.params.id as string;

      const request: PostRequestDTO = { idPost, token };

      const result: Post = await postBusiness.selectById(request);

      if (result) {
        res.status(200).send({ message: "Sucesso!", Post: result });
      }
    } catch (error: any) {
      res.status(401).send(error.sqlMessage || error.message);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const postBusiness = new PostBusiness();

      const token = req.headers.authorization as string

      const result = await postBusiness.getAll(token);

      res.status(200).send(result);
    } catch (error: any) {
      res.status(400).send(error.sqlMessage || error.message);
    }
  }
}
