"use strict";

import express from "express";
import controller from "../controllers/user-controller.js";

const router = express.Router();

// --- Rotas
router.get("/", controller.getAll); // Retorna todos os usuários
router.post("/", controller.create); // Cria um novo usuário
router.get("/:id", controller.getOne); // Retorna um usuário específico
router.put("/:id", controller.update); // Atualiza um usuário
router.delete("/:id", controller.delete); // Deleta um usuário
router.get("/slug/:slug", controller.getBySlug); // Pega usuário por slug
router.put("/slug/:slug", controller.updateBySlug); // Atualiza um usuário por slug
router.delete("/slug/:slug", controller.deleteBySlug); // Deleta um usuário por slug

export default router;