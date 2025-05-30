import mongoose from "mongoose";

const conexionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Conexion DB Exitosa")
  } catch (error) {
    
    throw `Error conexion DB ${error}`
  }
};

export default conexionDB;
