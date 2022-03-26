const { DataResult } = require("./result")

class ErrorDataResult extends DataResult {
    constructor(message, data) {
        super(false, message, data)
    }
    dataResult() {
        return {
            success: this.success,
            message: this.message,
            data: this.data
        }
    }
}
module.exports = { ErrorDataResult }