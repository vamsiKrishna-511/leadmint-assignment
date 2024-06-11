const db = require('../config/db');

const createChatRoom = (room, callback) => {
    const sql = 'INSERT INTO chat_rooms SET ?';
    db.query(sql, room, callback);
};

const getChatRoomById = (roomId, callback) => {
    const sql = 'SELECT * FROM chat_rooms WHERE roomId = ?';
    db.query(sql, [roomId], callback);
};

module.exports = { createChatRoom, getChatRoomById };
