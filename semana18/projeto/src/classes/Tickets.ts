import Product from './Product'

export default class Tickets extends Product {
    constructor(
        id: string,
        name: string,
        description: string,
        price: number,
        readonly origin: string,
        readonly destination: string
    ) {
        super(id, name, description, price)
        if (typeof origin !== 'string') throw new Error('Please, type an origin as a string')
        if (typeof destination !== 'string') throw new Error('Please, type an destination as a string')
    }
}