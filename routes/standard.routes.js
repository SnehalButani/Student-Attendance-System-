const express = require('express');

const router = express.Router();

const { addStandard,  standardList, standardOneData, standardDelete } = require('../controllers/standard.controllers');

router.post('/addstandard', addStandard); // edit or add
router.post('/standardlist', standardList);
router.post('/standardonedata', standardOneData);
router.post('/standarddelete', standardDelete);

module.exports = router;