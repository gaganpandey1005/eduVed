import { bookInfoPayment } from "../controllers/bookControllers/shivani.controller.js";

import express from "express";
const routes=express.Router();

routes
.post("/create-order",bookInfoPayment);

export default routes;