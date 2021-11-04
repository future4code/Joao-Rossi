import { app, server } from "./app";
import { userRouter } from "./routes/userRouters";
import { postRouter } from "./routes/postRouters";
import moment from "moment";
import express, { Express, Request, Response } from "express";
import IdGenerator from "./services/IdGenerator";

/* USER */
app.use("/users", userRouter);

/* POST */
app.use("/posts", postRouter);

const createTable = (req: Request, res: Response) => {
  const idGenerator = new IdGenerator();
  const { userId, friendId } = req.body;

  const idFriendship = idGenerator.generateId();

  knex.raw(`
  create table friendship${userId} (
      id VARCHAR(255) NOT NULL PRIMARY KEY,
      user_id VARCHAR(225) NOT NULL,
      friend_id VARCHAR(225) NOT NULL,
      friendship_date DATE NOT NULL,  
    )
  `);
};
