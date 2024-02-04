const express = require('express');

const router = express.Router();

const { addCoures, couresList, couresOneData, couresDelete } = require('../controllers/coures.controllers');

router.post('/addcoures', addCoures); // edit or add
router.post('/coureslist', couresList);
router.post('/couresonedata', couresOneData);
router.post('/couresdelete', couresDelete);

module.exports = router;