import { User } from "../../entities/Users";
import { BaseDatabase } from "../BaseDataBase";

export class UserDataBase extends BaseDatabase {
  private static tableName: string = "19_projeto_users";

  async findUserByEmail(email: string): Promise<User> {
    try {
      const user = await BaseDatabase.connection(UserDataBase.tableName)
        .select("*")
        .where({ email: email });
      return User.toUser(user[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async findUserById(id: string): Promise<User> {
    try {
      const user = await BaseDatabase.connection(UserDataBase.tableName)
        .select("*")
        .where({ id: id });
      return User.toUser(user[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async insertUser(user: User) {
    try {
      await BaseDatabase.connection(UserDataBase.tableName).insert(
        {id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole()}
      );
    } catch (error: any | undefined) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
