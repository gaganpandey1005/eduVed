import mongoose from "mongoose";

//connect to database
mongoose.set('strict',false);

const connectToDB = async() => {
    try{
  const {connection} = await mongoose.connect(process.env.MONGO_URL)

  if(connection){ console.log(`connected to database:${connection.host}`)}
}
catch(e){
    console.error(`Failed to connect to database:${e.message}`)
}
}
export default connectToDB;