import { UserRepository } from "../business/UserRepository";
import User from "../model/User";
import BaseDatabase from "./BaseDatabase";

type FindByEmailResponse = {
    id: string
    name: string
    email: string
    password: string
}[]

export default class UserData extends BaseDatabase implements UserRepository {

    protected TABLE_NAME = "20_projeto_users"

    create = async (user: User) => {
        try {
            await BaseDatabase
                .connection(this.TABLE_NAME)
                .insert(user)

            return user
        } catch (error) {
            throw new Error("Erro ao criar usuário no banco de dados")
        }
    }

    findByEmail = async (email: string) => {
        const queryResult: FindByEmailResponse = await BaseDatabase
            .connection(this.TABLE_NAME)
            .select()
            .where({ email })

        return queryResult.length ? new User(
            queryResult[0].id,
            queryResult[0].name,
            queryResult[0].email,
            queryResult[0].password,
        ) : null
    }
}