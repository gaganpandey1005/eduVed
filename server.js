import app from "./app.js";
import connectToDB from "./config/db.connection.js";
import http from "http";
import {server} from "./utils/socket.js"


const PORT = process.env.PORT || 3000;
// const server = http.createServer(app);






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
