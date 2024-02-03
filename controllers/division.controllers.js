const mongoose = require('mongoose');
const _ = require('lodash');
const { division } = require('../models/division.model');
const { standard } = require('../models/standard.model');
const { sendError, sendResponse } = require('../utils/response');


// add division
exports.addDivision = async (req, res) => {
    try {
        if (req.body.Id) {
            const editDivision = await division.findByIdAndUpdate(req.body.Id, { ...req.body }, { new: true });

            sendResponse(res, 1, ' Division edit successfully', editDivision);
        } else {
            const checkStandard = await standard.findById(req.body.standardId)
            if (!checkStandard) return sendError(res, 404, "Standard not found");

            const divisionData = new division({ ...req.body });

            await divisionData.save();

            sendResponse(res, 1, 'Division added successfully', divisionData);
        }
    } catch (error) {
        sendError(res, 0, error.message)
    }
}

// division list
exports.divisionList = async (req, res) => {
    try {
        const divisionData = await division.find();

        sendResponse(res, 1, ' Division list', divisionData);
    } catch (error) {
        sendError(res, 0, error.message)
    }
}


//  division Object on id
exports.divisionOneData = async (req, res) => {
    try {
        const divisionData = await division.findById(req.body.Id);

        sendResponse(res, 1, ' division list', divisionData);
    } catch (error) {
        sendError(res, 0, error.message)
    }
}

//  division delete
exports.divisionDelete = async (req, res) => {
    try {
        const divisionData = await division.findByIdAndDelete(req.body.Id);

        sendResponse(res, 1, 'division Delete');
    } catch (error) {
        sendError(res, 0, error.message)
    }
}
