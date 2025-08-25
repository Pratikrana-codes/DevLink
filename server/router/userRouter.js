

const express = require('express');
const router = express.Router();

const userControllers = require('../controller/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.route('/').get(userControllers.home);

router.route('/register').post(userControllers.register);

router.route('/login').post(userControllers.login);

router.route('/user').get(authMiddleware, userControllers.user);

module.exports = router;