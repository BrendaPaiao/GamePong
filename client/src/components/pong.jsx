import React, { useEffect, useState } from "react";
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

const Pong = function () {

    const [players, setPlayers] = useState ({});

    useEffect(() => {
        
        socket.on('connect', () => {
            console.log('Conectado!');
        });

        socket.on('Player_Connected', (players) => {

            setPlayers(players);
        });

    }, []);

    return (
        <div>
            {Object.keys(players).map((key) => (
                <div key={key}>
                    {players[key].name}
                </div>
            ))}
        </div>
    );
};

export default Pong;