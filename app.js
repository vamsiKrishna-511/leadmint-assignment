// app.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const http = require('http');
const WebSocket = require('ws');
const userRoutes = require('./routes/userRoutes');
const chatRoomRoutes = require('./routes/chatRoomRoutes');
const profileRoutes = require('./routes/profileRoutes');
const friendRequestRoutes = require('./routes/friendRequestRoutes');

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', chatRoomRoutes);
app.use('/api', profileRoutes);
app.use('/api', friendRequestRoutes);

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
