/**
 * Sends a success response to the client.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {string} [message] - The message to send in the response body.
 * @param {number} [status=200] - The HTTP status code to send.
 */
exports.success = function (req , res, message, status) {
    const statusCode = status || 200;
    const statusMessage = message || '';
    res.status(statusCode).send({
        error : false,
        status : statusCode,
        body : statusMessage
    });
}

/**
 * Sends an error response to the client.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {string} [message] - The error message to send in the response body.
 * @param {number} [status=500] - The HTTP status code to send.
 * @param {string} [details] - Additional details about the error.
 */
exports.error = function (req , res, message, status, details) {
    const statusCode = status || 500;
    const statusMessage = message || 'Internal Server Error';
    const statusDetails = details || '';
    res.status(statusCode).send({
        error : false,
        status : statusCode,
        body : statusMessage,
        details : statusDetails
    });
}