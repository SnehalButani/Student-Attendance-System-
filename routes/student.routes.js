const express = require('express');

const router = express.Router();

const { addStudent, editStudent, studentList, studentOneData, studentDelete } = require('../controllers/student.controllers');

router.post('/addstudent', addStudent); // edit or add
router.post('/studentlist', studentList);
router.post('/studentonedata', studentOneData);
router.post('/studentdelete', studentDelete);

module.exports = router;