export class Product {
    private id: string;
    private productName: string;
    private description: string;
    private price: string;

    constructor (id: string, productName: string, description: string,  price: string) {
        this.id = id,
        this.productName = productName,
        this.description = description
        this.price = price
    }
}