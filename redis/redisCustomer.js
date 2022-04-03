const redis = require("../database/redisConnection");
const redisModel = require("./redisModel")
class RedisCustomer {
    constructor() {
        this.redisCient = redis
    }
    async CreateProduct({ productResult, product }) {
        const productData = new redisModel(
            product.name,
            product.description,
            product.type,
            product.unit,
            product.price,
            product.avaiblable,
            product.supplier
        )
        const productId = `Product:${productResult._id.toString()}`
        await this.redisCient.hset(productId, productData.Product());

    }
    async GetAllProduct() {
        const fetchProduct = async (product) => {
            const productList = []
            for (let index = 0; index < product.length; index++) {
                const products = await this.redisCient.hgetall(product[index])
                productList.push(products)
            }
            return productList
        }
        const product = await this.redisCient.keys(`Product*`)
        const result = fetchProduct(product).then(product => { return product })
        return result
    }
}
module.exports = RedisCustomer