import app from "./app.js";
import connectToDB from "./config/db.connection.js";
import http from "http";
import { Server } from "socket.io";


const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins temporarily for debugging
    methods: ["GET", "POST"],
  },
});


// Ensure the WebSocket connection is established


// First connect to the database, then start the server
connectToDB()
  .then(() => {
    server.listen(PORT, () => {
      // ✅ Change `app.listen()` to `server.listen()`
      console.log(`✅ App is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Database connection failed:", error);
  });
