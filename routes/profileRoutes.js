// routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const { viewProfile } = require('../controllers/profileController');
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/profile/:userId', verifyToken, viewProfile);

module.exports = router;