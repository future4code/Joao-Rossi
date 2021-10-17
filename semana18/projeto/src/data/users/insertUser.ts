import BaseDatabase from '../BaseDatabase'
import User from '../../classes/User'

export default async function insertUser(
   user : User
) {
    await BaseDatabase.connection.insert(user).into('18_projeto_users_labenusystem')
}
