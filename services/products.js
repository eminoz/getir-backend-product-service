const { ProductRepository } = require("../repository")

const { ProductModel } = require("../model")
const RedisCustomer = require("../redis/redisCustomer")
class ProductService {
    constructor() {
        this.repository = new ProductRepository()
        this.redis = new RedisCustomer()
    }

    async CreateProduct({ req }) {
        const { name, description, type, unit, price, available, supplier } = req.body;
        try {
            const product = await ProductModel({
                name, description, type, unit, price, available, supplier
            })
            const productResult = await this.repository.CreateProduct(product)
            this.redis.CreateProduct({ productResult, product })
            return productResult
        } catch (error) {
            throw error
        }
    }
    async GelAllProduct() {
        try {
            const allProduct = await this.redis.GetAllProduct()

            if (allProduct.length == 0) {
                console.log("returned mongo")
                const products = await this.repository.GelAllProduct()
                return products
            }
            console.log("returned redis")
            return allProduct

        } catch (error) {
            throw error
        }
    }
}
module.exports = ProductService