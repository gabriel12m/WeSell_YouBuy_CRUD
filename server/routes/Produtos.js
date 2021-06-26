const express = require("express");
const router = express.Router();
const { Produtos } = require("../models");

// Get de todos os produtos
router.get("/", async (req, res) => {
  const listaProdutos = await Produtos.findAll();
  res.json(listaProdutos);
});

// Get de um produto
router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const produto = await Produtos.findByPk(id); // faz a procura do produto, baseando a mesma na PK(primary key)
  res.json(produto);
});

// Post de um produto
router.post("/", async (req, res) => {
  const produto = req.body;
  await Produtos.create(produto);
  res.json(produto);
});

module.exports = router;
