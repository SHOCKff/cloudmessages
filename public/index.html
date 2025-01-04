<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat Room</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #f4f4f4;
        }
        #messages {
            width: 80%;
            height: 300px;
            border: 1px solid #ccc;
            margin-top: 20px;
            overflow-y: auto;
            padding: 10px;
            background-color: #fff;
        }
        #messages p {
            margin: 5px 0;
            padding: 8px;
            border-radius: 5px;
            max-width: 70%;
        }
        .sent {
            background-color: #d1e7dd;
            text-align: right;
            align-self: flex-end;
        }
        .received {
            background-color: #f8d7da;
            text-align: left;
            align-self: flex-start;
        }
        #controls {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        input, button {
            margin: 5px 0;
            padding: 10px;
            font-size: 16px;
        }
        button {
            background-color: #007bff;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <h1>Chat Room</h1>
    <div id="controls">
        <input type="text" id="roomId" placeholder="Enter Room ID">
        <button id="joinRoom">Join Room</button>
        <input type="text" id="message" placeholder="Enter your message">
        <button id="sendMessage">Send Message</button>
    </div>
    <div id="messages"></div>
    
    <script src="/socket.io/socket.io.js"></script>
    <script>
        const socket = io();
        const roomIdInput = document.getElementById("roomId");
        const messageInput = document.getElementById("message");
        const messagesDiv = document.getElementById("messages");
        const joinRoomButton = document.getElementById("joinRoom");
        const sendMessageButton = document.getElementById("sendMessage");

        let currentRoom = "";

        // Join a room
        joinRoomButton.addEventListener("click", () => {
            const roomId = roomIdInput.value.trim();
            if (roomId) {
                currentRoom = roomId;
                socket.emit("Roomid", roomId);
                messagesDiv.innerHTML += `<p class="info">You joined room: ${roomId}</p>`;
                roomIdInput.value = "";
            }
        });

        // Send a message
        sendMessageButton.addEventListener("click", () => {
            const message = messageInput.value.trim();
            if (message && currentRoom) {
                socket.emit("User_message", { room_id: currentRoom, message });
                messagesDiv.innerHTML += `<p class="sent">You: ${message}</p>`;
                messageInput.value = "";
                messagesDiv.scrollTop = messagesDiv.scrollHeight;
            }
        });

        // Receive a message
        socket.on("Server_message", (message) => {
            messagesDiv.innerHTML += `<p class="received">${message}</p>`;
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        });
    </script>
</body>
</html>
