const Server = require("socket.io")();

// Server.on("connection", socket => {
//     console.log("Web Socket Connection Established", socket.id);
//     socket.on("hello", (arg, callback) => {
//         console.log(arg); // "world"
//         callback("got it");
//     });

//     socket.on('disconnect', () => {
//         console.log("Web Socket Disconnected");
//     });
// });

Server.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("send_message", (data) => {
        Server.emit("receive_message", data); // Broadcast to all users
    });

    socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});



// const chatNameSpace = Server.of("/chat");

// chatNameSpace.on("connection", (socket) => {
//     socket.broadcast.emit('welcome', 'Welcome to the Chat Room');

//     socket.on("message", (message) => {
//         console.log("message ", message);

//         socket.broadcast.emit('spread-message', message);
//     });

//     socket.on("join-room", (room, cb) => {
//         socket.join(room);
//         cb(`Joined Room:  ${room}`);

//         socket.emit('joined', 'You have joined the room.');

//         chatNameSpace.in(room).emit('joined', 'New user joined the room.');
//         // socket.to(room).emit('joined', 'New user joined the room.');

//     });

//     socket.on('disconnect', () => {
//         console.log("Chats disconnected")
//     });

// });

module.exports = Server;
