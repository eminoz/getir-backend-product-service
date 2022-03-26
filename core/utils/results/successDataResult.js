const { DataResult } = require("./result")

class SuccessDataResult extends DataResult {
    constructor(message, data) {
        super(true, message, data)
    }
    dataResult() {
        return {
            success: this.success,
            message: this.message,
            data: this.data
        }
    }
}
module.exports = { SuccessDataResult }