const express = require('express');
const userRoutes = express.Router();
const { getAllUsers, uploadUser } = require('../controller/user.controller');

// Route to get all users
userRoutes.get('/', getAllUsers);

// Route to upload a new user
userRoutes.post('/', uploadUser);

module.exports = userRoutes;
