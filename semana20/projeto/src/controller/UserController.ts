import User, { SignupInputDTO, LoginInputDTO } from "../model/User";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";

export default class UserControler {
  authenticator = new Authenticator();
  hashManger = new HashManager();
  idGenarator = new IdGenerator();

  constructor() {
    this.authenticator = new Authenticator();
    this.hashManger = new HashManager();
    this.idGenarator = new IdGenerator();
  }

  signUp(input: SignupInputDTO) {
    const { name, email, password, role } = input;
    const id = this.idGenarator.generateId;

    const user = new User(name, email, password, role);
  }
}
