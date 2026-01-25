import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", 
        methods: ["GET, POST"],
        credentials: true,
    },
});

io.on('connection', (socket) => {
    console.log(`${socket.id} conectado.`)
});

app.get('/', (req, res) => res.send('Hello World!'));

server.listen(5000, function () {
    console.log("Server rodando...");
});