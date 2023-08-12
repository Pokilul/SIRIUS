exports.success = function (req , res, message, status) {
    const statusCode = status || 200;
    const statusMessage = message || '';
    res.status(statusCode).send({
        error : false,
        status : statusCode,
        body : statusMessage
    });
}

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