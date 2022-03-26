const { ProductModel } = require("../model");
class ProductRepository {
    async CreateProduct(product) {
        return await product.save();
    }
}
module.exports = ProductRepository;
