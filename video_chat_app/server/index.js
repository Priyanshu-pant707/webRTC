const express = require ('express');
const bodyParser= require('body-parser');
const {Server}=require('socket.io');


const io= new Server();

const app = express();


app.use(bodyParser.json());



const emailToSocketIdMapping= new Map();

io.on('connection', socket=>{
    socket.on("join-room",(data)=>{
        const {roomId,emailId}=data;
        console.log(`${emailId} joined the room ${roomId}`);
        emailToSocketIdMapping.set(email,socket.id);
        socket.join(roomId);
        socket.to(roomId).emit('user-connected',{emailId});
    });


});

app.listen(800,()=>{
    console.log('Server is running on port 800');
})


io.listen(8001,()=>{
    console.log('Socket.io server is running on port 8001');
})