var express = require('express');
var router = express.Router();
const userController = require('../controllers/apiUsersController')

/* GET users listing. */
router.get('/', userController.getAllUsers );


module.exports = router;
