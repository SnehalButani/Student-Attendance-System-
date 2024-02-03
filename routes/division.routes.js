const express = require('express');

const router = express.Router();

const { addDivision, editDivision, divisionList, divisionOneData, divisionDelete } = require('../controllers/division.controllers');

router.post('/adddivision', addDivision); // edit or add
router.post('/divisionlist', divisionList);
router.post('/divisiononedata', divisionOneData);
router.post('/divisiondelete', divisionDelete);


module.exports = router;