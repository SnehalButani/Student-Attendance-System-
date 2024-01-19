const mongoose = require('mongoose');
const _ = require('lodash');
const { student, validationStudent } = require('../models/student.model');
const { sendError, sendResponse } = require('../utils/response');


// add student
exports.addStudent = async (req, res) => {
    try {
        const { error } = validationStudent(req.body);
        if (error) return res.status(0).json(sendError(res, 0, error.message));

        const studentData = new student({ ...req.body });

        await studentData.save();

        sendResponse(res, 1, 'Student added successfully', studentData);
    } catch (error) {
        sendError(res, 0, error.message)
    }
}

// edit student
exports.editStudent = async (req, res) => {
    try {
        const editStudent = await student.findByIdAndUpdate(req.body.Id, { ...req.body }, { new: true });

        sendResponse(res, 1, 'Student edit successfully', editStudent);
    } catch (error) {
        sendError(res, 0, error.message)
    }
}

// student list
exports.studentList = async (req, res) => {
    try {
        const studentData = await student.find();

        sendResponse(res, 1, 'Student list', studentData);
    } catch (error) {
        sendError(res, 0, error.message)
    }
}


// student Object on id
exports.studentOneData = async (req,res) => {
    try {
        const studentData = await student.findById(req.body.Id);

        sendResponse(res, 1, 'Student list', studentData);
    } catch (error) {
        sendError(res, 0, error.message)
    }
}

// student delete
exports.studentDelete = async (req,res) => {
    try {
        const studentData = await student.findByIdAndDelete(req.body.Id);

        sendResponse(res, 1, 'Student Delete');
    } catch (error) {
        sendError(res, 0, error.message)
    }
}
