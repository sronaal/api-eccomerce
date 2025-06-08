import mongoose, { Types } from "mongoose";

const productoSchema = new mongoose.Schema({
  producto: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,

  },
  precio: {
    type: Number,
    required: true,
  },
  imagenURL: {
    type: String
  },
  categoria: { 
    type: Types.ObjectId, 
    ref: 'categoria' 
  },
  
  estado: { type: Boolean, default: true },
}, { timestamps: true });


const Product = mongoose.model('Product', productoSchema);
export default Product;