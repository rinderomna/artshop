"use strict";

import express from "express";
import controller from "../controllers/product-controller.js";
import multer from "multer";

// Define paths
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Configurar multer storage para salvar arquivos (imagens) na pasta ./uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "uploads"));
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

// Rotas
router.post("/", upload.single("image"), controller.create); // Cria um novo produto
router.get("/", controller.getAll); // Retorna todos os produtos
router.get("/slug/:slug", controller.getBySlug); // Pegar produto por slug
router.get("/:id", controller.getOne); // Retorna um produto específico
router.put("/slug/:slug", controller.updateBySlug); // Atualiza um produto por slug
router.put("/:id", controller.update); // Atualiza um produto
router.delete("/slug/:slug", controller.deleteBySlug); // Deleta um produto por slug
router.delete("/:id", controller.delete); // Deleta um produto

export default router;
