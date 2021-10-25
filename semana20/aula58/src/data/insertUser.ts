import { connection } from "../connection";
import { User } from "../entities/classes/User.";

export async function insertUser(
   user: User
){
   await connection
      .insert(user)
      .into('20_58_Users')
}