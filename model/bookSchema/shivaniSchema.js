import mongoose from "mongoose"

const shivaniSchema=new mongoose.Schema({
  semester:{
    type:Number,
    required:true
  },
  department:{
    type:String,
    required:true
  },
  year:{
    type:Number,
    required:true
  },
  subject:{
    type:String,
    required:true
  },
  soldBy:{
    type:String,
    required:true
  },
  buyBy:{
    type:String,
    required:true
  },
  isSold:{
    type:Boolean,
    default:false
  },
  price:{
    type:Number,
    required:true
  },
  buyDate:{
    type:Date,
    default:Date.now
  },
  location:{
    type:String,
  },
  quantity:{
    type:Number,
    default:0,
    required:true
  }

})
export default mongoose.model("Shivani",shivaniSchema);