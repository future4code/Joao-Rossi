import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../model/Users/User"

export default class Authenticator {
   generateToken = (
      payload: AuthenticationData
   ): string => {
      return jwt.sign(
         payload,
         process.env.JWT_KEY as string,
         {
            expiresIn: "24min"
         }
      )
   }

   getTokenData = (
      token: string
   ): AuthenticationData => {
      return jwt.verify(
         token,
         process.env.JWT_KEY as string
      ) as AuthenticationData
   }
}