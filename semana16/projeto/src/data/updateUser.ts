import { connection } from '../index'

export default async function updateUser(
    id: string,
    name?: string,
    username?: string,
    email?: string
) {
    await connection('to_do_users')
    .update({
        name,
        username,
        email
    })
    .where({id})
}