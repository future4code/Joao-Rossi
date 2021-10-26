import * as jwt from "jsonwebtoken"
import { authenticationData } from "../entities/types/authenticationData"
import dotenv from 'dotenv'

dotenv.config()

export const generateToken = (
   payload: authenticationData
): string => {
   console.log(process.env.JWT_KEY)
   return jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      {
         expiresIn: "24min"
      }
   )
}

export const getTokenData = (
   token: string
): authenticationData => {
   console.log(process.env.JWT_KEY)
   return jwt.verify(
      token,
      process.env.JWT_KEY as string
   ) as authenticationData
}