const mongoose = require('mongoose');
const _ = require('lodash');
const { division } = require('../models/division.model');
const { standard } = require('../models/standard.model');
const { staff } = require('../models/staff.model');
const { homework, validationHomework } = require('../models/homework.model');
const { notice, validationNotice } = require('../models/notice.model');
const { sendError, sendResponse } = require('../utils/response');


// add homework 
exports.addHomework = async (req, res) => {
    try {
        if (req.body.Id) {
            const editHomework = await homework.findByIdAndUpdate(req.body.Id, { ...req.body }, { new: true });

            sendResponse(res, 1, "Homework edit successfully", editHomework);
        } else {
            const { error } = validationHomework(req.body);
            if (error) return res.status(0).json(sendError(res, 0, error.message));

            const checkStandard = await standard.findById(req.body.standardId)
            if (!checkStandard) return sendError(res, 0, "Standard not found");

            const checkDivision = await division.findById(req.body.divisionId)
            if (!checkDivision) return sendError(res, 0, "Division not found");

            const homeworkData = new homework({ ...req.body });

            await homeworkData.save();

            sendResponse(res, 1, "Homework add successfully", homeworkData);
        }
    } catch (error) {
        sendError(res, 0, error.message)
    }
}

// add notice
exports.addNotice = async (req, res) => {
    try {
        if (req.body.Id) {
            const editNotice = await homework.findByIdAndUpdate(req.body.Id, { ...req.body }, { new: true });

            sendResponse(res, 1, "Notice edit successfully", editNotice);
        } else {
            const { error } = validationNotice(req.body);
            if (error) return res.status(0).json(sendError(res, 0, error.message));

            const checkStandard = await standard.findById(req.body.standardId)
            if (!checkStandard) return sendError(res, 0, "Standard not found");

            const sendByFactulyId = await staff.findById(req.body.sendByFactulyId)
            if (!sendByFactulyId) return sendError(res, 0, "Saff not found");

            const noticeData = new notice({ ...req.body });

            await noticeData.save();

            sendResponse(res, 1, "Notice add successfully", noticeData);
        }

    } catch (error) {
        sendError(res, 0, error.message)
    }
}

// homework delete
exports.homeworkDelete = async (req, res) => {
    try {
        const homeworkData = await homework.findByIdAndDelete(req.body.Id);

        sendResponse(res, 1, 'Homework Delete');
    } catch (error) {
        sendError(res, 0, error.message)
    }
}

// notice delete
exports.noticeDelete = async (req, res) => {
    try {
        const noticeData = await notice.findByIdAndDelete(req.body.Id);

        sendResponse(res, 1, 'Notice Delete');
    } catch (error) {
        sendError(res, 0, error.message)
    }
}



