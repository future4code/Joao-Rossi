import { connection } from '../index'

export default async function insertTask(
    id: string,
    title: string,
    description: string,
    deadline: string,
    userId: string
) {
    //* Como ela não retorna nada além de um código de sucesso, não há a necessidade de uma variável
    await connection('to_do_tasks').insert({
        id,
        title,
        description,
        deadline,
        user_id: userId
    })
}