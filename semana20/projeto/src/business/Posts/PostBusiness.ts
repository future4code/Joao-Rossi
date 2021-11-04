import moment from "moment";

import PostDatabase from "../../data/Posts/PostDatabase";
import {
  CreatePostDTO,
  PostRequestDTO,
} from "../../model/Posts/PostObject";
import IdGenerator from "../../services/IdGenerator";
import Post from "../../model/Posts/Post";
import { AuthenticationData } from "../../model/Users/User";
import Authenticator from "../../services/Authenticator";

export default class PostBusiness {
  postDatabase = new PostDatabase();
  idGenerator = new IdGenerator();
  tokenManager = new Authenticator();

  async create(input: CreatePostDTO): Promise<string> {
    try {
      const id = this.idGenerator.generateId();
      const createdAt: string = moment().format("YYYY-MM-DD");
      const tokenData: AuthenticationData = this.tokenManager.getTokenData(
        input.token
      );

      const post = new Post(
        id,
        input.photo,
        input.description,
        createdAt,
        tokenData.id,
        input.type
      );

      const result = await this.postDatabase.insert(post);
    
      return result
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async selectById(input: PostRequestDTO): Promise<Post> {
    try {
      const { idPost, token } = input;

      if (!token) {
        throw new Error("The user must be authenticated");
      }

      const post: Post = await this.postDatabase.selectById(idPost);

      if (!post) {
        throw new Error("Post not found.");
      }

      const result = post
      
      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message || error.code);
    }
  }
}
