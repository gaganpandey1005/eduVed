import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv/config";
import morgan from "morgan";
import subjectRoutes from "./routes/subject.routes.js"





const app = express();
app.use(express.json());
app.use(cookieParser()); 
app.use(express.urlencoded({ extended:true}));


app.use(morgan('dev'));
// Enable CORS for frontend origin
app.use(
    cors({
      origin: "http://localhost:5173", // Allow frontend
      credentials: true, // Allow cookies if needed
    })
  );
  


  app.use('/api/user',userRoutes);
  app.use('/api/subjects',subjectRoutes);
  

app.all("*", (req, res) => {
    res.status(404).send("Page not found");
  });


export default app;