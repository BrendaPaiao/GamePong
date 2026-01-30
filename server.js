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

const game = {
    players: {}
}

io.on('connection', (socket) => {
    console.log(`${socket.id} conectado.`);

    const name = 'Player_' + socket.id.substring(0, 4);
    game.players[socket.id] = { name };
    refreshPlayers();

    socket.on('disconnect', () => {
        delete game.players[socket.id];
        refreshPlayers();
    })
});

const refreshPlayers = () => {
    io.emit('players_Refresh', game.players);
};

app.get('/', (req, res) => res.send('Hello World!'));

server.listen(5000, function () {
    console.log("Server rodando...");
});