
import express  from "express";
import subjects from "../controllers/subject.controller.js";
const router=express.Router()

router.get('/getNotes', subjects);

export default router