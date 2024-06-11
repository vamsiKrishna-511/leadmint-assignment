const express = require('express');
const router = express.Router();
const { createRoom, joinRoom } = require('../controllers/chatRoomController');
const { verifyToken } = require('../middleware/authMiddleware');

router.post('/chatrooms', verifyToken, createRoom);
router.post('/joinroom', verifyToken, joinRoom);

module.exports = router;
