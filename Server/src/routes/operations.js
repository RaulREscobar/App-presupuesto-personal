const express =  require('express');
const router = express.Router();
const operationsController = require('../controllers/apiOperationsController');


// OPERATIONS
router.get('/operations', operationsController.getAllOperations)


module.exports = router;