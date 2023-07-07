import mongoose from "mongoose";

const Schema = mongoose.Schema;

const sizeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  specific_size: {
    type: String,
    required: true,
  },
});

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  id: {
    type: Number,
    required: [true, "The id is required"],
    unique: true,
  },
  slug: {
    type: String,
    required: [true, "The slug is required"],
    trim: true,
    index: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    default: true,
  },
  sizes: {
    type: [sizeSchema],
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  sales: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
