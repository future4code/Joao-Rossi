import { connection } from "../connection"

const userTableName = '19_User'

export const insertUser = async (id: string, email: string, password: string) => {
    await connection
        .insert({
            id,
            email,
            password,
        })
        .into(userTableName);
};