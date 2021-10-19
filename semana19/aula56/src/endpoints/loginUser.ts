import {Request, Response} from 'express';
import {selectUserByEmail} from '../data/selectUserByEmail'
import { generateToken } from '../services/generateToken';

export const loginUser = async (req: Request, res: Response) => {
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