/* É através desta classe que são apresentados todos os produtos da base de dados.*/

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Produtos.css";
import Header from "../Header";
import * as FcIcons from "react-icons/fc";
import axios from "axios";

export default function Produtos() {
  /* variáveis para poder aceder aos vários produtos da base de dados
  e apresentar 1 a 1 na página inicial */
  const [listaProdutos, setListaProdutos] = useState([]);

  let history = useHistory();

  // é através do axios.get que é feita a query para ir buscar os dados à base de dados
  useEffect(() => {
    axios.get("http://localhost:3001/").then((response) => {
      setListaProdutos(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="container main-content">
        {/* Este listaProdutos.map é um array que vai mostrar produto a produto
      à medida que este (variável produto) vai avanaçando pelo array*/}
        {listaProdutos.map((produto) => {
          return (
            <div className="row product">
              <div className="col-md-3">
                <img
                  className="rounded"
                  src={produto.fotografia}
                  alt=""
                  width="175px"
                  border="1px solid"
                />
              </div>
              <div className="col-md-5 product-detail">
                <h3>{produto.nome}</h3>
                <h6>{produto.marca}</h6>
                {produto.stock == 1 ? (
                  <h7>
                    STOCK : <FcIcons.FcApproval />
                  </h7>
                ) : (
                  <h7>
                    STOCK : <FcIcons.FcCancel />
                  </h7>
                )}
              </div>
              <div className="col-md-2 product-price">{produto.preco} €</div>
              <div
                className="col-md-2 btn"
                onClick={() => {
                  history.push(`/produto/${produto.idproduto}`);
                }}
              >
                <FcIcons.FcNext size="80px" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
