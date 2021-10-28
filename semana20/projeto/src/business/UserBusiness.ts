import User from "../model/User";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";
import { UserRepository } from "./UserRepository";

export interface SignupInputDTO {
  name: string;
  email: string;
  password: string;
}

export interface LoginInputDTO {
  email: string;
  password: string;
}

export default class UserBusiness {
  private idGenerator: IdGenerator;
  private authenticator: Authenticator;
  private hashManager: HashManager;
  // Aqui eu falo que esse cara tem os métodos definidos, mas ainda não sei qual a implementação deles
  private userData: UserRepository;

  // No argumento do construtor eu vou passar a classe que eu quero usar que implementa a interface
  constructor(userDatabaseImp: UserRepository) {
    (this.idGenerator = new IdGenerator()),
      (this.authenticator = new Authenticator()),
      (this.hashManager = new HashManager()),
      (this.userData = userDatabaseImp);
  }

  signup = async (input: SignupInputDTO) => {
    const { name, email, password } = input;

    if (!email || !name || !password) {
      throw new Error("Campos inválidos ao cadastrar usuário");
    }

    const registeredUser = await this.userData.findByEmail(email);
    if (registeredUser) {
      throw new Error("E-mail já cadastrado");
    }

    const id = this.idGenerator.execute();

    const hashedPassword = await this.hashManager.hash(password);

    const user = new User(id, name, email, hashedPassword);

    await this.userData.create(user);

    const token = this.authenticator.generateToken({ id });

    return token;
  };

  login(input: LoginInputDTO) {
    const { email, password } = input;

    // const registeredUser: Promise<User | null> =
    //   this.userData.findByEmail(email);
        console.log(input);
        return input as User
  }
}
