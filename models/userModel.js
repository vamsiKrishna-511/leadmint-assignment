const db = require('../config/db');

const createUser = (user, callback) => {
    const sql = 'INSERT INTO users SET ?';
    db.query(sql, user, (err, result) => {
        if (err) {
            console.error('Database error:', err);
        }
        callback(err, result);
    });
};

const getUserByPhone = (phone, callback) => {
    const sql = 'SELECT * FROM users WHERE phone = ?';
    db.query(sql, [phone], callback);
};

const getUserById = (id, callback) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [id], callback);
};

module.exports = { createUser, getUserByPhone, getUserById };
