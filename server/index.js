const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const bd = require("./models");

// Routers
const produtosRouter = require("./routes/Produtos");
app.use("/", produtosRouter);

bd.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("A correr o servidor no port 3001");
  });
});
