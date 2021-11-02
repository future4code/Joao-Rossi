import User from "../../model/Users/User"
import {  SignupInputDTO,  ResultUserBusiness,
  LoginInputDTO,
} from "../../model/Users/UserObject";
import IdGenerator from "../../services/idGenerator";
import HashManager from "../../services/HashManager";
import Authenticator from '../../services/Authenticator'
import UserDatabase from "../../data/Users/UserDatabase";

export default class UserBusiness {
  hashManger = new HashManager();
  idGenerator = new IdGenerator();
  authenticator = new Authenticator();
  userDatabase = new UserDatabase();

  async signup(input: SignupInputDTO): Promise<ResultUserBusiness> {
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
      const cyberPassword = await this.hashManger.hash(password);

      const user = new User(id, name, email, cyberPassword, role);

      const token = await this.userDatabase.insert(user);
      return { statusCode: 200, resultMessage: token };
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async login(input: LoginInputDTO): Promise<string|null> {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new Error("'email' e 'senha' são obrigatórios");
      }

      const user: User = await this.userDatabase.selectByEmail(email);

      if (!user) {
        throw new Error("Usuário não encontrado ou senha incorreta");
      }

      const passwordCheck: boolean = await this.hashManger.compare(password, user.getPassword());
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
