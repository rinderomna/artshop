import mongoose from "mongoose";
import Product from "../models/products.js";

const ProductModel = mongoose.model("Product");

const controller = {};

// CREATE - Cria um novo produto
controller.create = async (req, res) => {
  const newProduct = ProductModel({
    name: req.body.name,
    id: req.body.id,
    slug: req.body.slug,
    price: req.body.price,
    description: req.body.description,
    type: req.body.type,
    sizes: req.body.sizes,
    stock: req.body.stock,
    sales: req.body.sales,
    image: req.file.filename
  });

  try {
    const doc = await newProduct.save();
    console.log("Saved successfully!");
    res.send(doc._id);
  } catch (error) {
    console.log("AHHHH", error, "AHHHH");
    res.status(500).send("Error occurred while saving the product.");
  }
};

// READ - Retorna todos os produtos
controller.getAll = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ - Retorna um produto específico
controller.getOne = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE - Atualiza um produto
controller.update = async (req, res) => {
  try {
    const product = await ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({
      message: "Product updated successfully",
      product: product,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ - Retorna um produto específico pelo slug
controller.getBySlug = async (req, res) => {
  try {
    const product = await ProductModel.findOne({ slug: req.params.slug });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE - Deleta um produto
controller.delete = async (req, res) => {
  try {
    const product = await ProductModel.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE - Atualiza um produto por slug
controller.updateBySlug = async (req, res) => {
  try {
    const product = await ProductModel.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({
      message: "Product updated successfully",
      product: product,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE - Deleta um produto por slug
controller.deleteBySlug = async (req, res) => {
  try {
    const product = await ProductModel.findOneAndDelete({
      slug: req.params.slug,
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default controller;
