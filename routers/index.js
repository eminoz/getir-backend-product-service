
var express = require('express')
var router = express.Router()
const { products } = require("../api");

//admin router
router.post("/api/product/create", products.createNewProduct)

//user router
router.get( "/api/product/getallproduct",products.getAllProducts)
module.exports = router