const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require("multer");

const router = express.Router();
const { addEvent } = require('../controllers/event.controllers');

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

router.post('/addevent', upload.fields([{ name: "images", maxCount: 5 }]), addEvent);


module.exports = router;