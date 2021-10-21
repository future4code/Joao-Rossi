import { User } from "../../entities/Users";
import { BaseDatabase } from "../BaseDataBase";

export default class UserData {
   
    private static tableName: string = '19_projeto_users'

    insertUser (user: User) {
        BaseDatabase
            .connection(UserData.tableName)
            .insert(user)
    }
    
    toUser(user: User) {
        new User(
            user.id,
            user.name,
            user.email,
            user.password
        )
    }

    
}