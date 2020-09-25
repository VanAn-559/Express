const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');
router.get('/customer/create', meController.storeCreate);

module.exports = router;