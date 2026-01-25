import React, { useEffect } from "react";
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

const Pong = function () {

    useEffect(() => {
        
        socket.on('connect', () => {
            console.log('Conectado!');
        });
    }, []);

    const players = {
        player1: {
            name: 'Player 1'
        },
        player2: {
            name: 'Player 2'
        }
    };

    return (
        <div>
            {Object.keys(players).map((key) => (
                <div key={key}>{players[key].name}</div>
            ))}
        </div>
    );
};

export default Pong;