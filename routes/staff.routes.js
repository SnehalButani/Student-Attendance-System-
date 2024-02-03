const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

const { addStaff, editStaff, staffList, staffOneData, staffDelete } = require('../controllers/staff.controllers');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = 'uploads/images';
        fs.mkdirSync(uploadPath, { recursive: true });
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        const fileExtension = path.extname(file.originalname);
        const uniqueSuffix = Date.now() + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + fileExtension);
    },
});
const upload = multer({ storage: storage });

router.post('/addstaff', upload.single('image'), addStaff);
router.post('/stafflist', staffList);
router.post('/staffonedata', staffOneData);
router.post('/staffdelete', staffDelete);

module.exports = router;