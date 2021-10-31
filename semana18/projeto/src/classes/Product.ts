export default class Product {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly description: string,
        readonly price: Number,
    ) {
        if (typeof id !== 'string') throw new Error('Please, type an id as a string')
        if (typeof name !== 'string') throw new Error('Please, type an name as a string')
        if (typeof description !== 'string') throw new Error('Please, type an description as a string')
        if (typeof price !== 'number') throw new Error('Please, type an price as a number')
    }
}
