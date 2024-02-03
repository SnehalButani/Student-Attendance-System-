const express = require('express');

const router = express.Router();

const { addHomework, homeworkDelete, addNotice, noticeDelete, editHomework, editNotice } = require('../controllers/homework.contollers');

router.post('/addhomework', addHomework); // edit or add
router.post('/homeworkdelete', homeworkDelete);


router.post('/addnotice', addNotice); // edit or add
router.post('/noticedelete', noticeDelete);


module.exports = router;