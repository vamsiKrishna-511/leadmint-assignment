const { createChatRoom, getChatRoomById } = require('../models/chatRoomModel');

exports.createRoom = (req, res) => {
    if (!req.isPrime) return res.status(403).json({ message: 'Only prime members can create chat rooms' });

    const { roomId, createdBy, maxCapacity } = req.body;
    const room = { roomId, createdBy: req.userId, maxCapacity };
    createChatRoom(room, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error creating chat room' });
        res.status(201).json({ message: 'Chat room created successfully' });
    });
};

exports.joinRoom = (req, res) => {
    const { roomId } = req.body;
    getChatRoomById(roomId, (err, results) => {
        if (err || results.length === 0) return res.status(404).json({ message: 'Chat room not found' });

        const room = results[0];
        if (room.currentCapacity >= room.maxCapacity) return res.status(403).json({ message: 'Room is at full capacity' });

        // Logic to join room
        res.json({ message: 'Joined room successfully' });
    });
};
