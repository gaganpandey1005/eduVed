import connectToDB from "../config/db.connection"
import fs from "fs"
import Subject from "../model/subject.model";
import mongoose from "mongoose";
import data from "../data/subject.json"
const dataSeeding=async(req,res)=>{
    try{
        await connectToDB();

        const data=json.parse(fs.readFileSync(data))
        await Subject.insertMany(data);
        console.log("Databases seeded successfully");
        mongoose.connection.close();
        
    }
    catch(e){
        return res.status(500).json({message:e})
    }
}