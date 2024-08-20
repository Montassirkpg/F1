const express = require('express');
const router = express.Router();
const timerController = require('../controllers/timerController');
const auth = require('../middleware/authMiddleware');

router.post('/submit-reaction-time', auth, timerController.submitReactionTime);

router.get('/get-reaction-times/:userId', auth, timerController.getReactionTimes);

module.exports = router;
