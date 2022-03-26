const ProductService = require("../services/products");

const { SuccessResponse } = require("clean-response")
module.exports = (app) => {
  const service = new ProductService();
  app.post("/product/create", async (req, res, next) => {
    try {

      const productResult = await service.CreateProduct({ req });
      const result = new SuccessResponse(201, productResult).dataResult()

      return res.json(result)

    } catch (error) {
      throw error;
    }
  });
};