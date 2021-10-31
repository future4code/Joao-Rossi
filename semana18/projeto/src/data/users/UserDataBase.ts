import {BaseDatabase} from '../BaseDatabase'
import User from '../../classes/User'

export default class UserDataBase extends BaseDatabase {
    private static tableName: string = '18_projeto_users_labenusystem'
    
    private toUser = (input: User) => new User ( 
        input.id,
        input.name,
        input.email,
        input.age
    )

    insertUser = (user: User) => 
        BaseDatabase
        .connection(UserDataBase.tableName)
        .insert(user)

    selectAllUsers = async() => { 
        const result = await 
        BaseDatabase
        .connection(UserDataBase.tableName)
        return result.map(this.toUser)
    }
}
