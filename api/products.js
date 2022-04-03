const ProductService = require("../services/products");

const { SuccessResponse } = require("clean-response")

const service = new ProductService();
module.exports.createNewProduct = async (req, res, next) => {
  try {

    const productResult = await service.CreateProduct({ req });
    const result = new SuccessResponse(201, productResult).dataResult()

    return res.json(result)

  } catch (error) {
    throw error;
  }
}