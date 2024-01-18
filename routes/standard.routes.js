const express = require('express');

const router = express.Router();

const { addStandard, editStandard, standardList, standardOneData, standardDelete } = require('../controllers/standard.controllers');

router.post('/addstandard', addStandard);
router.post('/editstandard', editStandard);
router.post('/standardlist', standardList);
router.post('/standardonedata', standardOneData);
router.post('/standarddelete', standardDelete);

module.exports = router;