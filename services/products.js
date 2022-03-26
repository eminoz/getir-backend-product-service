const { ProductRepository } = require("../repository")

const { ProductModel } = require("../model")
class ProductService {
    constructor() {
        this.repository = new ProductRepository()
    }
    async CreateProduct({ req }) {
        const { name, desc, type, unit, price, available, suplier, banner } = req.body;
        try {
            const product = await ProductModel({
                name, desc, type, unit, price, available, suplier, banner
            })
            const productResult = await this.repository.CreateProduct(product)
            return productResult
        } catch (error) {
            throw error
        }
    }
}
module.exports = ProductService