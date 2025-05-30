import mongoose from "mongoose";

import User from "./models/user.js";
import Product from "./models/product.js";

const conexionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Conexion DB Exitosa")
    
    } catch (error) {
    
    throw `Error conexion DB ${error}`
  }
};

export default conexionDB;
