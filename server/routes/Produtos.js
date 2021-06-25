const express = require("express");
const router = express.Router();
const { Produtos } = require("../models");

router.get("/", async (req, res) => {
  const listaProdutos = await Produtos.findAll();
  res.json(listaProdutos);
});

router.post("/", async (req, res) => {
  const produto = req.body;
  await Produtos.create(produto);
  res.json(produto);
});

module.exports = router;
