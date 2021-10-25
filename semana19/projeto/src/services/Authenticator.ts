import * as jwt from "jsonwebtoken";
import { USER_ROLES } from "../entities/Users";

export type AuthenticationData = {
  id: string;
  role: string;
}

export class Authenticator {
  public generate(input: AuthenticationData): string {
    const token = jwt.sign(input, process.env.JWT_KEY as string, {
      expiresIn: process.env.ACESS_TOKEN_EXPERIES_IN,
    });
    return token;
  }

  public getTokenData(token: string): AuthenticationData {
      const data = jwt.verify(token, process.env.JWT_KEY as string)
      return data as AuthenticationData
    }
}
