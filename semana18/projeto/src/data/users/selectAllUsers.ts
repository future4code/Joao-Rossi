import { connection } from '../BaseDatabase'
import User from '../../classes/User'

export default async function insertUser() {
    const users : User[] = await connection.select().from('18_projeto_users_labenusystem')
    return users
}
