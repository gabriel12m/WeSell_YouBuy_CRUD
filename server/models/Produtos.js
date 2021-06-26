// Criação da tabela Produtos na base de dados
// Nota: é necessário criar primeiro a base de dados no MySQL Workbench com ligação ao servidor

module.exports = (sequelize, DataTypes) => {
  const Produtos = sequelize.define(
    "Produtos",
    {
      idproduto: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      fotografia: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      detalhes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      stock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      marca: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  console.log(Produtos === sequelize.models.Produtos);
  return Produtos;
};
