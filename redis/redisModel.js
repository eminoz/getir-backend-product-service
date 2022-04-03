class ProductModel {
    constructor(name, description, type, unit, price, available, supplier) {

        this.name = name
        this.description = description
        this.type = type
        this.unit = unit
        this.price = price
        this.available = available
        this.supplier = supplier
    }
    Product() {
        const productData = {
            name: this.name,
            description: this.description,
            type: this.type,
            unit: this.unit,
            price: this.price,
            available: this.available,
            supplier: this.supplier
        }
        return productData
    }
}

module.exports = ProductModel