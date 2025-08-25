

const express = require('express');
const bookmarkController = require('../controller/bookmarkController');
const authMiddleware = require('../middlewares/authMiddleware');
const bookRouter = express.Router();

bookRouter.route('/createBookmark').post(authMiddleware, bookmarkController.createBookmark);
bookRouter.route('/getBookmark').get(authMiddleware, bookmarkController.getBookmark);
bookRouter.route('/updateBookmark/:id').put(authMiddleware, bookmarkController.updateBookmark);
bookRouter.route('/deleteBookmark/:id').delete(authMiddleware, bookmarkController.removeBookmark);


module.exports = bookRouter;

