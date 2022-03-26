const express = require("express")
const cors = require('cors');
const { products } = require("./api");

module.exports = async (app) => {
    app.use(express.json({ limit: "1mb" }))

    app.use(express.urlencoded({ extended: true, limit: '1mb' }));

    app.use(cors())
    products(app)

}