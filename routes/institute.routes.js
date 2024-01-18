const express = require('express');

const router = express.Router();

const { addInstitute, instituteList, editInstitute, instituteDelete, instituteOneData } = require('../controllers/institute.controllers');

router.post('/addinstitute', addInstitute);
router.post('/editinstitute', editInstitute);
router.post('/institutelist', instituteList);
router.post('/instituteonedata', instituteOneData);
router.post('/institutedelete', instituteDelete);


module.exports = router;