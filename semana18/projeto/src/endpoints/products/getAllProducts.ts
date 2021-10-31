import { Request, Response } from "express";
import ProductDataBase from "../../data/products/ProductDataBase";

export default async function createUser(
    req: Request,
    res: Response
) {
    let codeError: number = 400;
    try {
        const database = new ProductDataBase();
        const products = await database.selectAllProducts()
        res.status(200).send({ message: "Deu certo!! 🤓", products })

    } catch (error: any) {
        res.status(codeError).send(error.message)
    }

}
