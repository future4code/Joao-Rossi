import {Request, Response} from 'express';
import { generateId } from '../../services/generateId'

export default function signup (req: Request, res: Response) {
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
          throw new Error("Invalid email");
        }
    
        if (!req.body.password || req.body.password.length < 6) {
          throw new Error("Invalid password");
        }
    
        const userData = {
          email: req.body.email,
          password: req.body.password,
        };
    
        const id = generateId();
    
        insertUser(id, userData.email, userData.password);
    
        const token = generateToken({
          id,
        });
    
        res.status(200).send({
          token,
        });
      } catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
}

function insertUser(id: string, email: any, password: any) {
  throw new Error('Function not implemented.');
}
