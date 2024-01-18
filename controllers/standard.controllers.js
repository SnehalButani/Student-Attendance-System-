const mongoose = require('mongoose');
const _ = require('lodash');
const { standard, validationStandard } = require('../models/standard.model');
const { sendError, sendResponse } = require('../utils/response');


// add standard
exports.addStandard = async (req, res) => {
    try {
        const { error } = validationStandard(req.body);
        if (error) return res.status(400).json(sendError(res, 400, error.message));

        const standardData = new standard({ ...req.body });

        await standardData.save();

        sendResponse(res, 200, 'Standard added successfully', standardData);
    } catch (error) {
        res.status(400).json(sendError(res, 400, error.message))
    }
}

// edit standard
exports.editStandard = async (req, res) => {
    try {
        const editStandard = await standard.findByIdAndUpdate(req.body.Id, { ...req.body }, { new: true });

        sendResponse(res, 200, ' Standard edit successfully', editStandard);
    } catch (error) {
        sendError(res, 400, error.message)
    }
}

// standard list
exports.standardList = async (req, res) => {
    try {
        const standardData = await standard.find();

        sendResponse(res, 200, ' Standard list', standardData);
    } catch (error) {
        sendError(res, 400, error.message)
    }
}


//  standard Object on id
exports.standardOneData = async (req, res) => {
    try {
        const standardData = await standard.findById(req.body.Id);

        sendResponse(res, 200, ' Standard list', standardData);
    } catch (error) {
        sendError(res, 400, error.message)
    }
}

//  standard delete
exports.standardDelete = async (req, res) => {
    try {
        const standardData = await standard.findByIdAndDelete(req.body.Id);

        sendResponse(res, 200, 'Standard Delete');
    } catch (error) {
        sendError(res, 400, error.message)
    }
}
