import mongoose from "mongoose";

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
  estado: Boolean,
});


const Product = mongoose.model('Product', productoSchema);
export default Product;