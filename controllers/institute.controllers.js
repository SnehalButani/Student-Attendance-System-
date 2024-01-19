const mongoose = require('mongoose');
const _ = require('lodash');
const { institute, validationInstitute } = require('../models/institute.model');
const { sendError, sendResponse } = require('../utils/response');

// add institute
exports.addInstitute = async (req, res) => {
    try {
        const { error } = validationInstitute(req.body);
        if (error) return res.status(0).json(sendError(res, 0, error.message));

        const instituteData = new institute({ ...req.body });
      
        await instituteData.save();

        sendResponse(res, 1, 'Institute added successfully', instituteData);
    } catch (error) {
        sendError(res, 0, error.message)
    }
}


// edit institute
exports.editInstitute = async (req,res) => {
    try {
        const editInstitute = await institute.findByIdAndUpdate(req.body.Id,{...req.body},{new:true});

        sendResponse(res, 1, 'Institute edit successfully', editInstitute);
    } catch (error) {
        sendError(res, 0, error.message)
    }
}

// institute list
exports.instituteList = async (req,res) => {
    try {
        const instituteData = await institute.find();

        sendResponse(res, 1, 'Institute list', instituteData);
    } catch (error) {
        sendError(res, 0, error.message)
    }
}


// institute Object on id
exports.instituteOneData = async (req,res) => {
    try {
        const instituteData = await institute.findById(req.body.Id);

        sendResponse(res, 1, 'Institute list', instituteData);
    } catch (error) {
        sendError(res, 0, error.message)
    }
}

// institute delete
exports.instituteDelete = async (req,res) => {
    try {
        const instituteData = await institute.findByIdAndDelete(req.body.Id);

        sendResponse(res, 1, 'Institute Delete');
    } catch (error) {
        sendError(res, 0, error.message)
    }
}