import Post from "../../model/Posts/Post";
import { createPostDTO } from "../../model/Posts/PostData";
import BaseDatabase from "../BaseDatabase";

export default class PostDatabase extends BaseDatabase {
  tableName: string = "20_projeto_users";

  async insert(input: Post) {
    try {

      const post: createPostDTO = {
        id: input.getId(),
        photo: input.getPhoto(),
        description: input.getDescription(),
        created_at: input.getCreatedAt(),
        type: input.getTypeAsString(),
        author: input.getAuthorId(),
      };
     

      await this.connection.insert(post).into(this.tableName);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async selectById(id: string): Promise<Post> {
    try {
    
      const result = await this.connection(this.tableName)
        .select("*")
        .where({ id });
      return result[0] && Post.toPost(result[0]);
    } catch (error: any) {
      throw new Error("Erro ao buscar usuário");
    }
  }
}
