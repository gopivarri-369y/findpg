const express = require('express');
const { addHostel } = require('../controllers/hostelController');

const router = express.Router();

router.post('/addhostel', addHostel);

module.exports = router;
