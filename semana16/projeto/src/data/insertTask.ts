import { connection } from '../index'

export default async function insertTask(
    id: string,
    name: string,
    username: string,
    email: string
) {
    //* Como ela não retorna nada além de um código de sucesso, não há a necessidade de uma variável
    await connection.insert({
        id,
        name,
        username,
        email
    }).into('to_do_users')
}