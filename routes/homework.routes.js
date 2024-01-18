const express = require('express');

const router = express.Router();

const { addHomework, homeworkDelete, addNotice, noticeDelete, editHomework, editNotice } = require('../controllers/homework.contollers');

router.post('/addhomework', addHomework);
router.post("/edithomework", editHomework);
router.post('/homeworkdelete', homeworkDelete);


router.post('/addnotice', addNotice);
router.post("/editnotice", editNotice)
router.post('/noticedelete', noticeDelete);


module.exports = router;