import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv/config";
import morgan from "morgan";
import subjectRoutes from "./routes/subject.routes.js";
import chapterRoutes from "./routes/chapter.routes.js";
import shivaniRoutes from "./routes/shivani.route.js"

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));
// Enable CORS for frontend origin
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"], // Allow both frontend URLs
    credentials: true, // Allow cookies/auth headers
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

app.use("/api/user", userRoutes);
app.use("/api/chapter", chapterRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/shivani", shivaniRoutes);

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

export default app;
