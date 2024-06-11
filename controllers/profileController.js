const { getUserById } = require('../models/userModel');

exports.viewProfile = (req, res) => {
    const userId = req.params.userId;
    getUserById(userId, (err, results) => {
        if (err || results.length === 0) return res.status(404).json({ message: 'User not found' });
        res.json(results[0]);
    });
};
