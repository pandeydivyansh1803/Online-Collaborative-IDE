import express from "express";
import http from "http";
import { Server } from "socket.io";
import {ACTIONS} from "./src/Actions.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const userSocketMap = {};


function getallcilents(roomId){
    return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map((socketId) =>{
        return{
            socketId,
            username: userSocketMap[socketId],
        }
    }
  );
}


io.on('connection', (socket)=>{
    console.log(socket.id);
    socket.on(ACTIONS.JOIN, ({roomId, username})=>{
        //console.log("");
        userSocketMap[socket.id] = username;
        socket.join(roomId);

        const clients = getallcilents(roomId);
        //console.log(clients);
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=>{
    console.log(`Listing on ${PORT}`);
});

