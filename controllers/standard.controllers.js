const mongoose = require('mongoose');
const _ = require('lodash');
const { standard, validationStandard } = require('../models/standard.model');
const { sendError, sendResponse } = require('../utils/response');


// add standard or edit standard
exports.addStandard = async (req, res) => {
    try {
        if (req.body._id) {
            const editStandard = await standard.findByIdAndUpdate(req.body.Id, { ...req.body }, { new: true });

            sendResponse(res, 1, ' Standard edit successfully', editStandard);
        } else {
            const { error } = validationStandard(req.body);
            if (error) return res.json(sendError(res, 0, error.message));

            const standardData = new standard({ ...req.body });

            await standardData.save();

            sendResponse(res, 1, 'Standard added successfully', standardData);
        }
    } catch (error) {
        sendError(res, 0, error.message)
    }
}

// standard list
exports.standardList = async (req, res) => {
    try {
        const standardData = await standard.find();

        sendResponse(res, 1, ' Standard list', standardData);
    } catch (error) {
        sendError(res, 0, error.message)
    }
}

//  standard Object on id
exports.standardOneData = async (req, res) => {
    try {
        const standardData = await standard.findById(req.body.Id);

        sendResponse(res, 1, ' Standard list', standardData);
    } catch (error) {
        sendError(res, 0, error.message)
    }
}

//  standard delete
exports.standardDelete = async (req, res) => {
    try {
        const standardData = await standard.findByIdAndDelete(req.body.Id);

        sendResponse(res, 1, 'Standard Delete');
    } catch (error) {
        sendError(res, 0, error.message)
    }
}
