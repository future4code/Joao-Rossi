export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}

export class User {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly email: string,
    private readonly password: string,
    private readonly role: USER_ROLES
  ) {
    if (typeof id !== "string") {
      throw new Error(
        'An "id" is required. Please, check the body of the response.'
      );
    }
    if (typeof name !== "string") {
      throw new Error(
        'A "name" is required. Please, check the body of the response.'
      );
    }
    if (typeof email !== "string") {
      throw new Error(
        'An "email" is required. Please, check the body of the response.'
      );
    }
    if (typeof password !== "string") {
      throw new Error(
        'An "password" is required. Please, check the body of the response.'
      );
    }
  }

  static toUser(data: any): User {
    return new User(data.id, data.name, data.email, data.password, data.role);
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getPassword() {
    return this.password;
  }

  getRole() {
    return this.role;
  }
}
