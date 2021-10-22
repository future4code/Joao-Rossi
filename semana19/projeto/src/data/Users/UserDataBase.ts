import { User } from "../../entities/Users";
import { BaseDatabase } from "../BaseDataBase";

export class UserDataBase extends BaseDatabase {

    private static tableName: string = '19_projeto_users'

    insertUser = (user: User) =>
        BaseDatabase
            .connection(UserDataBase.tableName)
            .insert(user)

}