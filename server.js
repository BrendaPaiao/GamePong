import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => res.send('Hello World!'));

server.listen(5000, function () {
    console.log("Server rodando...");
});