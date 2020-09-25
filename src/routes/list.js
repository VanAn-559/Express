const express = require('express');
const router = express.Router();

const listController = require('../app/controllers/ListController');
router.get('/stored/create', listController.storeCreate);

module.exports = router;