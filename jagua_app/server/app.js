"use strict";

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// Carregar as rotas
import index from "./routes/index-route.js";
import products from "./routes/product-route.js";
import users from "./routes/user-route.js";

// Define paths
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cria app express
const app = express();

// Configurar cabeçalhos CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//----

app.set("view engine", "ejs");
app.use("/uploads", express.static(path.join(__dirname, "routes", "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//---

mongoose
  .connect("mongodb://127.0.0.1:27017/online-store", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", index);
app.use("/products", products);
app.use("/users", users);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});

export default app;
