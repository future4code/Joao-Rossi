import { connection } from "../connection";
import {Request, Response} from 'express'

export const getActors(app : Express)  = app.get ("/actor", async (req: Request, res: Response) => {
    try {
      const actors = await connection("Movie")
      res.status(200).send(actors)
    } catch (error) {
      res.status(400).send('Tente de novo')
    }
  })