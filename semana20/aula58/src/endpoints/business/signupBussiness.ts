import { insertUser } from "../../data/insertUser";
import { generateToken } from "../../services/authenticator";
import { hash } from "../../services/hashManager";
import { generateId } from "../../services/idGenerator";
import { User, USER_ROLES } from "../../entities/classes/User";

export class SignupBussiness {

  async signup(
    name: string,
    password: string,
    email: string,
    role: USER_ROLES
  ): Promise<string> {
    const id: string = generateId();
    const cypherPassword = await hash(password);
    const user = new User(id, name, email, cypherPassword, role);
    const token = generateToken({id, role: role});
    await insertUser(user);
    return token as string
  }

}