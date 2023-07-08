import mongoose from "mongoose";
import User from "../models/users.js";

const UserModel = mongoose.model("User");

const controller = {};

// CREATE - Cria um novo usuário
controller.create = async (req, res) => {
  const newUser = UserModel({
    type: req.body.type,
    slug: req.body.slug,
    username: req.body.username,
    password: req.body.password,
    fullname: req.body.fullname,
    email: req.body.email,
    address: req.body.address,
    cep: req.body.cep,
    phone: req.body.phone,
  });

  try {
    const doc = await newUser.save();
    console.log("Saved successfully!");
    res.send(doc._id);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error occured while saving the user");
  }
};

// READ - Retorna todos os usuários
controller.getAll = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ - Retorna um usuário específico
controller.getOne = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE - Atualiza um usuário
controller.update = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      message: "User updated successfully",
      user: user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ - Retorna um usuário específico pelo slug
controller.getBySlug = async (req, res) => {
  try {
    const user = await UserModel.findOne({ slug: req.params.slug });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE - Deleta um usuário
controller.delete = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE - Atualiza um usuário por slug
controller.updateBySlug = async (req, res) => {
  try {
    const user = await UserModel.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      message: "User updated successfully",
      user: user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE - Deleta um usuário por slug
controller.deleteBySlug = async (req, res) => {
    try {
      const user = await UserModel.findOneAndDelete({
        slug: req.params.slug,
      });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export default controller;
