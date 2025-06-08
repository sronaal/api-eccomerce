import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }
});


const OrderItem = mongoose.model('OrderItem', orderItemSchema)

export default orderItemSchema


