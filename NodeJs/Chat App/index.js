const express = require('express');
const http = require('http');       // if we want to attach socket.io to express then we can't do directly app.listen, so we require http module
const path = require('path');
const { Server } = require('socket.io');

const PORT = 3000;
const app = express();
const server = http.createServer(app);
const io = new Server(server);          // input output,  I initialize a new instance of socket.io by passing the server (the HTTP server) object.


// handling socket.io   
io.on('connection', (socket) => {
    // get message from 'user-message' client
    socket.on('user-message', message => {
        // now give that message to all connected sockets(clients)
        io.emit('message', message);
    })

    // when client disconnect
    socket.on('disconnect', () => {
        console.log('you are disconnected');
    })
});


// handling http requrests
app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
    return res.sendFile('/public/index.html');
})

server.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
});