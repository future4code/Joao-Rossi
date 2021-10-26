import {Request, Response} from 'express';
import {selectUserByEmail} from '../data/selectUserByEmail'
import { selectUserById } from '../data/selectUserById';
import { generateToken } from '../services/generateToken';
import { getData } from '../services/getData';

export const loginUserByEmail = async (req: Request, res: Response) => {
    try {
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
  
      const userData = {
        email: req.body.email,
        password: req.body.password,
      };
  
  
      const user = await selectUserByEmail(userData.email);
  
      if (user.password !== userData.password) {
        throw new Error("Invalid password");
      }
  
      
      const token = generateToken({
        id: user.id,
      });
  
      res.status(200).send({
        token,
      });
    } catch (err : any) {
      res.status(400).send({
        message: err.message,
      });
    }
  };

  export const loginUserById= async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
  
     
      const authenticationData = getData(token);
  
      const user = await selectUserById(authenticationData.id);
  
      res.status(200).send({
        id: user.id,
        email: user.email,
      });
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  }