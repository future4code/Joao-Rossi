import { Request, Response } from "express";
import { UserDataBase } from "../../data/Users/UserDataBase";
import { User } from "../../entities/Users";
import { Authenticator } from "../../services/Authenticator";
import { generateId } from "../../services/generateId";
import { HashManager } from "../../services/HashManager";

export async function createUser(req: Request, res: Response) {
  let codeError = 400;

  try {
    const userDataBase = new UserDataBase();
    const hashManager = new HashManager();
    const authenticator = new Authenticator();

    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      codeError = 422;
      throw new Error(
        'Please, insert correctly the fields "name", "email" and "password".'
      );
    }

    if (!email.includes("@")) {
      codeError = 422;
      throw new Error("Please, insert an valid email address");
    }

    if (password.length < 6) {
      codeError = 422;
      throw new Error("Please, enter a password with six or more characters");
    }

    
    const id = generateId();

    const passwordToken: string = (await hashManager.hash(password)).toString();

    const user = new User(id, name, email, passwordToken, role);

    console.log(user);

    await userDataBase.insertUser(user);

    // const token = authenticator.generate({id, role});

    res.status(201).send({
      message: "User created successfully",
      // token,
      user,
    });
  } catch (error: any) {
    res.status(codeError).send(error.message);
  }
}
