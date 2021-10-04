import { Request, Response } from "express";
import moment from "moment";
import insertTask from "../data/insertTask";

export default async function createTask(
    req: Request,
    res: Response
) {
    try {
        //* validar entradas da requisição:
        if (
            !req.body.title ||
            !req.body.description ||
            !req.body.deadline ||
            !req.body.userId
        ) {
            res.status(400).send({
                message: `Os campos "title", "description", "deadline e "userId" são obrigatório.`
            })

            return
        }

        const dateDiff: number = moment(req.body.deadline, 'DD/MM/YYYY').unix() - moment().unix()
        if (dateDiff <= 0) {
            res.status(400).send({ message: `A "deadline" deve ser maior que a data atual.` })
        }

        const id: string = (Date.now() + Math.random()).toString()
        //* consultar o banco de dados:

        await insertTask(
            id,
            req.body.title,
            req.body.description,
            moment(req.body.deadline, "DD/MM/YYYY").format('YYYY-MM-DD'),
            req.body.userId
        )

        //* responder a requisição

        res.status(200).send({
            message: `Tarefa criada com sucesso`,
            id
        })

    } catch (error: any | undefined) {
        res.status(400).send({ message: error.message || error.sqlMessage });
    }
}