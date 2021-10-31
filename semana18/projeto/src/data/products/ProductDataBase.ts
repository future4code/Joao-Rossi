import { BaseDatabase } from '../BaseDatabase'
import Product from '../../classes/Product'

export default class ProductDataBase extends BaseDatabase {
    private static tableName: string = '18_projeto_products_labenusystem'

    private toProduct = (input: Product) => new Product(
        input.id,
        input.name,
        input.description,
        input.price
    )

    insertProduct = (product: Product) =>
        BaseDatabase
            .connection(ProductDataBase.tableName)
            .insert(product)

    selectAllProducts = async () => {
        const result = await
            BaseDatabase
                .connection(ProductDataBase.tableName)
        return result.map(this.toProduct)
    }
}
