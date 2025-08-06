const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');

const userController = require('../controllers/user');
const user = require('../models/user');

router.get('/',checkAuth,userController.getAllUsers);

router.post("/signup",userController.signupUser);

router.delete('/:uid', userController.deleteUser);

router.post("/login",userController.loginUser);

router.patch('/:uid',userController.updateUser);

router.get('/:uid',userController.getById);

module.exports = router;