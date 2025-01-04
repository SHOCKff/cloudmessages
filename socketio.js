const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");

const port = 9000;

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Handle room creation and joining
const Handle_roomCreation = (socket) => {
    socket.on("Roomid", (room_id) => {
        socket.join(room_id);
        console.log(`Room created/joined with id: ${room_id}`);
    });
};

// Socket.IO handling
io.on("connection", (socket) => {
    const socket_id = socket.id;
    console.log(`User connected with id: ${socket_id}`);

    // Room creation
    Handle_roomCreation(socket);

    // Handle user messages
    socket.on("User_message", ({ room_id, message }) => {
        console.log(`Message from ${socket_id} to room ${room_id}: ${message}`);
        io.to(room_id).emit("Server_message", message);
    });

    // Handle disconnection
    socket.on("disconnect", () => {
        console.log(`User disconnected with id: ${socket_id}`);
    });
});

// Serve static files from the public directory
app.use(express.static(path.resolve("./public")));

// Serve index.html on the root route
app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/index.html"));
});

// Start the server
server.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
