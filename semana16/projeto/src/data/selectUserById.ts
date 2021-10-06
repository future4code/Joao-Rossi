import {connection} from "../index"

export default async function selectUserById (
    id: string
){
    //* Como essa query retorna um resultado para nós, 
    //* há a necessidade de se criar uma variável para guardar o resultado:
    const result = await connection('to_do_users')
        .select('*')
        .where({id})

    return result[0]
}