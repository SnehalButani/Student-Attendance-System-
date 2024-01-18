exports.errorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = 'Internal Server Error';

    if (err.status) {
        statusCode = err.status;
        message = err.message;
    }

    res.status(statusCode).json({
        status: statusCode,
        error: message
    })
}