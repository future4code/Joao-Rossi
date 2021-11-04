import Post from "../../model/Posts/Post";
import { createPostDTO } from "../../model/Posts/PostData";
import BaseDatabase from "../BaseDatabase";

export default class PostDatabase extends BaseDatabase {
  tableName: string = "20_projeto_posts";

  async insert(input: Post): Promise<string> {
    try {
      const post: createPostDTO = {
        id: input.getId(),
        photo: input.getPhoto(),
        description: input.getDescription(),
        created_at: input.getCreatedAt(),
        type: input.getTypeAsString(),
        author_id: input.getAuthorId(),
      };

      await this.connection.insert(post).into(this.tableName);
     
      return post.id
      
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async selectById(id: string): Promise<Post> {
    try {
      const result = await this.connection(this.tableName)
        .select("*")
        .where({ id });
      return Post.toPost(result[0]);
    } catch (error: any) {
      throw new Error("Erro ao buscar post");
    }
  }
}
