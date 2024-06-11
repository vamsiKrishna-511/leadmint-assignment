const { sendFriendRequest } = require('../models/friendRequestModel');

exports.sendRequest = (req, res) => {
    const { receiverId } = req.body;
    const request = { senderId: req.userId, receiverId };
    sendFriendRequest(request, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error sending friend request' });
        res.status(201).json({ message: 'Friend request sent successfully' });
    });
};
