const { ProductRepository } = require("../repository")

const { ProductModel } = require("../model")
class ProductService {
    constructor() {
        this.repository = new ProductRepository()
    }

    async CreateProduct({ req }) {
        const { name, description, type, unit, price, available, supplier } = req.body;
        try {
            const product = await ProductModel({
                name, description, type, unit, price, available, supplier
            })
            const productResult = await this.repository.CreateProduct(product)
            return productResult
        } catch (error) {
            throw error
        }
    }
    async GelAllProduct() {
        try {
            const products = await this.repository.GelAllProduct()
            return products
        } catch (error) {
            throw error
        }
    }
}
module.exports = ProductService