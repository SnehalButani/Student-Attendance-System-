exports.sendResponse = (res, status, message, data = null) => {
    res.status(200).json({
        status: status,
        message: message,
        data: data
    })
};

exports.sendError = (res, status, errorMessage) => {
    res.status(400).json({
        status: status,
        error: errorMessage
    })
}