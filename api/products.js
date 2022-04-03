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
module.exports.getAllProducts = async (req, res, next) => {
  const productResult = await service.GelAllProduct()
  const result = new SuccessResponse(200, productResult)
  return res.json(result.dataResult())

}