class Result {
    constructor(success, message) {
        this.success = success
        this.message = message
    }
}

class DataResult extends Result {
    constructor(success, message, data) {
        super(success, message)
        this.data = data
    }
}

module.exports = { DataResult, Result }
