import { Request, Response } from "express";
import Product from "../../classes/Product"
import ProductDataBase from "../../data/products/ProductDataBase";
import idGenerator from "../../services/idGenerator";

export default async function createProduct(
    req: Request,
    res: Response
) {
    
    let codeError: number = 400;

    try {
        const { name, description, price} = req.body;
        const database = new ProductDataBase()
        const id = idGenerator();
        const product = new Product(id, name, description, price)

        
        await database.insertProduct(product)

        res.status(201).send({ message: "Deu certo!! 🤓 Aqui está o seu novo produto:", product })

    } catch (error: any) {
        res.status(codeError).send(error.message)
    }

}
