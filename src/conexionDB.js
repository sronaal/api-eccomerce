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
  },
  {
    firstname: "Valentina",
    lastname: "López",
    email: "valentina.lopez@example.com",
    password: "Xe@91tNvZ2"
  },
  {
    firstname: "Andrés",
    lastname: "Gómez",
    email: "andres.gomez@example.com",
    password: "Mp#74cKvD9"
  },
  {
    firstname: "Mariana",
    lastname: "Torres",
    email: "mariana.torres@example.com",
    password: "Fg^62vTmR8"
  },
  {
    firstname: "Sebastián",
    lastname: "Ramírez",
    email: "sebastian.ramirez@example.com",
    password: "Yr&28sWmU3"
  },
  {
    firstname: "Camila",
    lastname: "Fernández",
    email: "camila.fernandez@example.com",
    password: "Qz*55hLkB7"
  },
  {
    firstname: "Mateo",
    lastname: "Castro",
    email: "mateo.castro@example.com",
    password: "Lp(83zVmK0"
  },
  {
    firstname: "Isabella",
    lastname: "Sánchez",
    email: "isabella.sanchez@example.com",
    password: "Tr_98nMxQ5"
  },
  {
    firstname: "Daniel",
    lastname: "Vargas",
    email: "daniel.vargas@example.com",
    password: "Wj@77yCnL6"
  }
]

    User.insertMany(users)
  */
    } catch (error) {
    
    throw `Error conexion DB ${error}`
  }
};

export default conexionDB;
