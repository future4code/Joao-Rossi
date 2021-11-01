import User, {
  SignupInputDTO,
  resultUserBusiness,
  loginInputDTO,
} from "../model/User";
import IdGenerator from "../services/IdGenerator";
import HashManager from "../services/HashManager";
import Authenticator from '../services/Authenticator'
import UserDatabase from "../data/UserDatabase";

export default class UserBusiness {
  hashManger = new HashManager();
  idGenerator = new IdGenerator();
  authenticator = new Authenticator();
  userDatabase = new UserDatabase();

  async signup(input: SignupInputDTO): Promise<resultUserBusiness> {
    let statusCode = 400;
    try {
      const { name, email, password, role } = input;

      if (!name || !email || !password || !role) {
        statusCode = 406;
        throw new Error(
          'Preencha os campos "name", "email", "role" e "password"'
        );
      }

      const emailCheck = await this.userDatabase.selectByEmail(email);

      if (emailCheck) {
        statusCode = 409;
        return {
          statusCode,
          resultMessage: "Já existe um usuário com este e-mail.",
        };
      }
      const id: string = this.idGenerator.generateId();
      const cyberPassword = await this.hashManger.hash(id);

      const user = new User(id, name, email, cyberPassword, role);

      const token = await this.userDatabase.insert(user);
      return { statusCode: 200, resultMessage: token };
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async login(input: loginInputDTO): Promise<string|null> {
    try {
      console.log(input)
      const { email, password } = input;

      if (!email || !password) {
        throw new Error("'email' e 'senha' são obrigatórios");
      }

      const user: User = await this.userDatabase.selectByEmail(email);
      console.log('user', user)

      if (!user) {
        throw new Error("Usuário não encontrado ou senha incorreta");
      }

      const passwordCheck: boolean = await this.hashManger.compare(password, user.getPassword());
      console.log(`${user.getPassword()}, ${password}, ${passwordCheck}`)
      if (!passwordCheck) {
        throw new Error("Usuário não encontrado ou senha incorreta");
      }

      const token: string = this.authenticator.generateToken({
        id: user.getId(),
        role: user.getRoleAsString(),
      });

      return token;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message || error.code);
    }
  }
}
