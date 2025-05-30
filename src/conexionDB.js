import mongoose from "mongoose";
import User from "./models/user.js";
const conexionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Conexion DB Exitosa")
  /*  
    let users = [
  {
    firstname: "Lucía",
    lastname: "Martínez",
    email: "lucia.martinez@example.com",
    password: "aD$83nlsK1"
  },
  {
    firstname: "Carlos",
    lastname: "Rojas",
    email: "carlos.rojas@example.com",
    password: "kL!9qZm21w"
  }
]

    User.insertMany(users)
  */
    } catch (error) {
    
    throw `Error conexion DB ${error}`
  }
};

export default conexionDB;
