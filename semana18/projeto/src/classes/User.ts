export default class User {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly email: string,
        readonly age: string,
    ) {
        if (typeof id !== 'string') throw new Error('Please, type an id as a string')
        if (typeof name !== 'string') throw new Error('Please, type a name as a string')
        if (typeof email !== 'string') throw new Error('Please, type an email as a string')
        if (typeof age !== 'string') throw new Error('Please, type an age as a string')
    }
}