export class User {
    constructor(
       readonly id: string,
       readonly name: string,
       readonly email: string,
       readonly password: string
    ) {
        if (typeof id !== "string") {throw new Error('An "id" is required. Please, check the body of the response.')}
        if (typeof name !== "string") {throw new Error('A "name" is required. Please, check the body of the response.')}
        if (typeof email !== "string") {throw new Error('An "email" is required. Please, check the body of the response.')}
        if (typeof password !== "string") {throw new Error('An "password" is required. Please, check the body of the response.')}    }
}