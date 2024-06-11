const db = require('../config/db');

const sendFriendRequest = (request, callback) => {
    const sql = 'INSERT INTO friend_requests SET ?';
    db.query(sql, request, callback);
};

module.exports = { sendFriendRequest };
