const mongoose = require('mongoose');
const _ = require('lodash');
const { event, validationEvent } = require('../models/event.model');
const { sendError, sendResponse } = require('../utils/response');

// add event
exports.addEvent = async (req, res) => {
    try {
        const { error } = validationEvent(req.body);
        if (error) return sendError(res, 400, error.message);

        const imagesPath = [];

        for (let i = 0; i < req.files.length; i++) {
            const element = req.files[i];
            imagesPath.push(element)
        }


        console.log(imagesPath)
    } catch (error) {
        sendError(res, 400, error.message)
    }
}