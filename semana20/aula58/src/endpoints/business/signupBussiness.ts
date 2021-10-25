import { insertUser } from "../../data/insertUser";
import { generateToken } from "../../services/authenticator";
import { hash } from "../../services/hashManager";
import { generateId } from "../../services/idGenerator";

const id: string = generateId()

      const cypherPassword = await hash(password);

      await insertUser({
         id,
         name,
         nickname,
         email,
         password: cypherPassword,
         role
      })

      const token: string = generateToken({
         id,
         role: role
      })