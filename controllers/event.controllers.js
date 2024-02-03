const mongoose = require('mongoose');
const _ = require('lodash');
const { Event, validationEvent } = require('../models/event.model');
const { sendError, sendResponse } = require('../utils/response');

// add event
exports.addEvent = async (req, res) => {
    try {

        const { error } = validationEvent(req.body);
        if (error) return sendError(res, 0, error.message);

        const images = [];
        for (let a = 0; a < req.files.images.length; a++) {
            images.push(req.files.images[a])
        }

        const imagePath = images.map(file => ({ imagePath: file.path }))
        const eventData = new Event({
            title: req.body.title,
            image: imagePath,
            instituteId: req.body.instituteId
        });

        const result = await eventData.save();

        sendResponse(res, 1, 'Event Add Successfully', result);
    } catch (error) {
        sendError(res, 0, error.message)
    }
}