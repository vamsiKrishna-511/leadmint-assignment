const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createUser, getUserByPhone } = require('../models/userModel');

exports.register = (req, res) => {
    const { userId, deviceId, name, phone, availCoins, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).json({ message: 'Error hashing password' });

        const user = { userId, deviceId, name, phone, availCoins, password: hash };
        createUser(user, (err, result) => {
            if (err) return res.status(500).json({ message: 'Error creating user' });
            res.status(201).json({ message: 'User registered successfully' });
        });
    });
};

exports.login = (req, res) => {
    const { phone, password } = req.body;
    getUserByPhone(phone, (err, results) => {
        if (err || results.length === 0) return res.status(401).json({ message: 'Authentication failed' });

        const user = results[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err || !isMatch) return res.status(401).json({ message: 'Authentication failed' });

            const token = jwt.sign({ id: user.id, isPrime: user.isPrime }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ message: 'Authentication successful', token });
        });
    });
};
