export type ROLE_USERS = {
  NORMAL: "NORMAL";
  ADMIN: "ADMIN";
};

export interface SignupInputDTO {
  name: string;
  email: string;
  password: string;
  role: ROLE_USERS;
}
export interface LoginInputDTO {
  email: string;
  password: string;
}

export interface authenticationData {
  id: string;
  role: string;
}

export default class User {
  private name: string;
  private email: string;
  private password: string;
  private role: ROLE_USERS;

  constructor(name: string, email: string, password: string, role: ROLE_USERS) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
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
