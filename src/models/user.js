import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
  
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  rol: { type: String, enum: ['admin', 'cliente', 'vendedor'], default: 'cliente' },

});


const User = mongoose.model('User', userSchema);
export default User;