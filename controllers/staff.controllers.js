const mongoose = require('mongoose');
const _ = require('lodash');
const { staff, validationStaff } = require('../models/staff.model');
const { sendError, sendResponse } = require('../utils/response');


// add staff
exports.addStaff = async (req, res) => {
    try {
        const { error } = validationStaff(req.body);
        if (error) return res.status(0).json(sendError(res, 0, error.message));

        req.body.image = req.file.path;
    
        const staffData = new staff({ ...req.body });

        await staffData.save();

        sendResponse(res, 1, 'Staff added successfully', staffData);
    } catch (error) {
        sendError(res, 0, error.message)
    }
}


// edit staff
exports.editStaff = async (req, res) => {
    try {
        let editSatff;

        if (req.file) {
            editSatff = await staff.findByIdAndUpdate(req.body.Id, { image: req.file.path, ...req.body }, { new: true })
        } else {
            editSatff = await staff.findByIdAndUpdate(req.body.Id, { ...req.body }, { new: true })
        }

        sendResponse(res, 1, 'Staff edit successfully', editSatff);
    } catch (error) {
        sendError(res, 0, error.message)
    }
}

// staff list
exports.staffList = async (req, res) => {
    try {
        const staffData = await staff.find();

        sendResponse(res, 1, 'Satff list', staffData);
    } catch (error) {
        sendError(res, 0, error.message)
    }
}


// staff Object on id
exports.staffOneData = async (req, res) => {
    try {
        const staffData = await staff.findById(req.body.Id);

        sendResponse(res, 1, 'Staff list', staffData);
    } catch (error) {
        sendError(res, 0, error.message)
    }
}

// staff delete
exports.staffDelete = async (req, res) => {
    try {
        console.log(req.body.Id)
        const staffData = await staff.findByIdAndDelete(req.body.Id);

        sendResponse(res, 1, 'Staff Delete');
    } catch (error) {
        sendError(res, 0, error.message)
    }
}