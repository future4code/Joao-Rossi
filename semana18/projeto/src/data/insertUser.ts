import { connection } from '../index'
import User from '../classes/User'

export default async function insertUser(
   user : User
) {
    // await connection.insert(user.id, user.name, user.email).into('18_projeto_users_labenusystem')
    await console.log({id: user.id, name: user.name, email: user.email})
}