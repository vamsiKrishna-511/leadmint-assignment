// routes/friendRequestRoutes.js
const express = require('express');
const router = express.Router();
const { sendRequest } = require('../controllers/friendRequestController');
const { verifyToken } = require('../middleware/authMiddleware');

router.post('/friend-requests', verifyToken, sendRequest);

module.exports = router;