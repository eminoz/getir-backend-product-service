const { ProductModel } = require("../model");
class ProductRepository {
    async CreateProduct(product) {
        return await product.save();
    }
    async GelAllProduct() {
        return ProductModel.find()
    }
}
module.exports = ProductRepository;
