export type AuthenticationData = {
  id: string,
  role: string
}

export type USER_ROLES = {
  NORMAL: "NORMAL";
  ADMIN: "ADMIN";
};

export default class User {
  private id: string;
  private name: string;
  private email: string;
  private password: string;
  private role: USER_ROLES;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  getId(): string{
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }

  getRole(): USER_ROLES {
    return this.role;
  }

  getRoleAsString(): string {
    return (this.role).toString();
  }

  static toUser(input: any | null) : User {
    const {id, name, email, password, role} = input; 

    const user = new User(id, name, email, password, role)

    return user || null
  }
}
