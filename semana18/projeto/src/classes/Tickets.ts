import Product from './Product'

export default class Tickets extends Product {
    private id: string;
    private productName: string;
    private description: string;
    private price: string;
    private destination: string;

    constructor (id: string, productName: string, description: string, price: string) {
        super(id, productName, description, price);
    }
}