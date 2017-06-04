const express = require('express');
const router = express.Router();
const timestampController = require('../controllers/timestampController');

/* GET home page. */
router.get('/', timestampController.homePage);
router.post('/query', timestampController.getResult);

module.exports = router;
