import { createUser } from "../../model/Users/UserData";
import BaseDatabase from "../BaseDatabase";
import User from "../../model/Users/User";
import Authenticator from "../../services/Authenticator";

export default class UserDatabase extends BaseDatabase {
  tableName: string = "20_projeto_users";

  async insert(input: User) {
    try {
      const authenticator = new Authenticator();

      const user: createUser = {
        id: input.getId(),
        name: input.getName(),
        email: input.getEmail(),
        password: input.getPassword(),
        role: input.getRoleAsString(),
      };

      const token = authenticator.generateToken({
        id: user.id,
        role: user.role,
      });

      await this.connection.insert(user).into(this.tableName);
      return token;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async selectByEmail(email: string): Promise<User> {
    try {
      const user = await this.connection(this.tableName)
        .select("*")
        .where({ email });
      return user[0] && User.toUser(user[0]);
    } catch (error: any) {
      throw new Error("Erro ao buscar usuário");
    }
  }

  async selectAll(email: string): Promise<User> {
    try {
      const user = await this.connection(this.tableName)
        .select("*")
        .where({ email });
      return user[0] && User.toUser(user[0]);
    } catch (error: any) {
      throw new Error("Erro ao buscar usuário");
    }
  }
}
