const express = require('express');
const router = express.Router();

const customerController = require('../app/controllers/CustomerController.js');

router.post('/create', customerController.paymen);
router.get('/', customerController.inpost);

module.exports = router;