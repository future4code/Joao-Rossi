import { connection } from "../connection";
import { User } from "../entities/classes/User";

export async function insertUser(
   user: User
){

   console.log({
      id: user.getId(),
         name: user.getName(),
         password: user.getPassword(),
         email: user.getEmail(),
         role: user.getRole()
   })
   // await connection
   //    .insert({
   //       id: user.getId(),
   //       name: user.getName(),
   //       password: user.getPassword(),
   //       email: user.getEmail(),
   //       role: user.getRole()
   //    })
   //    .into('20_58_Users')
}