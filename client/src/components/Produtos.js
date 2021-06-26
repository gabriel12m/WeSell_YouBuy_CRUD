import React, { useEffect, useState } from "react";
import "./Produtos.css";
import Header from "./Header";
import * as FcIcons from "react-icons/fc";
import axios from "axios";

export default function Produtos() {
  const [listaProdutos, setListaProdutos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/").then((response) => {
      setListaProdutos(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="container main-content">
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
              <div className="col-md-2 btn">
                <FcIcons.FcNext size="80px" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
