const mongoose = require('mongoose');
const _ = require('lodash');
const { coures, validationCoures } = require('../models/coures.model');
const { sendError, sendResponse } = require('../utils/response');

// add coures or edit coures
exports.addCoures = async (req, res) => {
    try {
        if (req.body._id) {
            const editCoures = await coures.findByIdAndUpdate(req.body.Id, { ...req.body }, { new: true });

            sendResponse(res, 1, 'Coures edit successfully', editCoures);
        } else {
            const { error } = validationCoures(req.body);
            if (error) return res.json(sendError(res, 0, error.message));

            const couresData = new coures({ ...req.body });

            await couresData.save();

            sendResponse(res, 1, 'Coures added successfully', couresData);
        }
    } catch (error) {
        sendError(res, 0, error.message)
    }
}

// coures list
exports.couresList = async (req, res) => {
    try {
        const couresData = await coures.find();

        sendResponse(res, 1, ' coures list', couresData);
    } catch (error) {
        sendError(res, 0, error.message)
    }
}

//  coures Object on id
exports.couresOneData = async (req, res) => {
    try {
        const couresData = await coures.findById(req.body.Id);

        sendResponse(res, 1, 'coures list', couresData);
    } catch (error) {
        sendError(res, 0, error.message)
    }
}

//  coures delete
exports.couresDelete = async (req, res) => {
    try {
        const couresData = await coures.findByIdAndDelete(req.body.Id);

        sendResponse(res, 1, 'coures Delete');
    } catch (error) {
        sendError(res, 0, error.message)
    }
}
