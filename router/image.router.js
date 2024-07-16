const express = require('express');
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const { uploadImage, getAllImages } = require('../controller/image.controller');

const router = express.Router();
const upload = multer({ storage });

router.post('/upload', upload.single('image'), uploadImage);
router.get('/',getAllImages);

module.exports = router;
