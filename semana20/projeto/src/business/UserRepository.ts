import User from "../model/User";

export interface UserRepository {
    create(user: User): Promise<User>
    findByEmail(email: string): Promise<User| null>
}