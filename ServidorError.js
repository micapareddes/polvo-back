class ServidorError extends Error {
    constructor({errorCode, message, statusCode}) {
        super(message)
        this.errorCode = errorCode
        this.statusCode = statusCode
    }
}

export default ServidorError