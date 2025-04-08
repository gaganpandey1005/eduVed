import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv/config";
import morgan from "morgan";
import subjectRoutes from "./routes/subject.routes.js";
import chapterRoutes from "./routes/chapter.routes.js";
import shivaniRoutes from "./routes/shivani.routes.js";
import chatRoutes from "./routes/chatr.routes.js"
import { app } from "./utils/socket.js";
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));
// Enable CORS for frontend origin
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://eduved.onrender.com",
      "https://eduved-frontend.onrender.com"
    ], // Allow  frontend URLs
    credentials: true, // Allow cookies/auth headers
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

app.use("/api/user", userRoutes);
app.use("/api/chapter", chapterRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/shivani", shivaniRoutes);
app.use("/api/chat",chatRoutes);

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

export default app;
