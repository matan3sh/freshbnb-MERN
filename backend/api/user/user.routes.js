const express = require('express');
const auth = require('../../middleware/auth');
const { loginUser, registerUser } = require('./user.controller');

const router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerUser);

module.exports = router;
