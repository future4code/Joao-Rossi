import moment from "moment";

import PostDatabase from "../../data/Posts/PostDatabase";
import {
  CreatePostDTO,
  ResultPostBusiness,
  LoginInputDTO
} from "../../model/Posts/PostObject";
import IdGenerator from "../../services/IdGenerator";
import Post from "../../model/Posts/Post";
import {AuthenticationData} from "../../model/Users/User"
import Authenticator from "../../services/Authenticator";

export default class PostBusiness {
  postDatabase = new PostDatabase();
  idGenerator = new IdGenerator();
  tokenManager = new Authenticator();

  async create(input: CreatePostDTO): Promise<string> {
    try {
      const id = this.idGenerator.generateId();
      const createdAt: string = moment().format("YYYY-MM-DD");
      const tokenData: AuthenticationData = this.tokenManager.getTokenData(input.token)

      const post = new Post(
        id,input.photo,
        input.description,
        createdAt,
        tokenData.id,
        input.type
      );

      const result: string = await this.postDatabase.insert(post);
     
      return result

    } catch (error: any) {
      console.log('postBusiness', error)
      throw new Error(error.sqlMessage || error.message);
    }
  }

  // async selectById(input: LoginInputDTO): Promise<string | null> {
  //   try {
  //     const { email, password } = input;

  //     if (!email || !password) {
  //       throw new Error("'email' e 'senha' são obrigatórios");
  //     }

  //     const post: Post = await this.postDatabase.selectByEmail(email);

  //     if (!post) {
  //       throw new Error("Usuário não encontrado ou senha incorreta");
  //     }

      
  //   } catch (error: any) {
  //     throw new Error(error.sqlMessage || error.message || error.code);
  //   }
  // }
}
