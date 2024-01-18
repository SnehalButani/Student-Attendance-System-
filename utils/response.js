exports.sendResponse = (res, status, message, data = null) => {
    res.json({
        status: status,
        message: message,
        data: data
    })
};

exports.sendError = (res, status, errorMessage) => {
    res.json({
        status: status,
        error: errorMessage
    })
}