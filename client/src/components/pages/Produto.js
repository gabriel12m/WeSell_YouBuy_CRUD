/* É através desta classe que é apresentado um determinado produto.*/

import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import "./Produto.css";
import * as FcIcons from "react-icons/fc";
import axios from "axios";

export default function Produto() {
  let { id } = useParams();
  const [produto, setProduto] = useState({});
  let history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:3001/byId/${id}`).then((response) => {
      setProduto(response.data);
    });
  }, []);

  // função que permite apagar o produto com base no seu id
  const apagaProduto = (id) => {
    axios.delete(`http://localhost:3001/byId/${id}`).then(() => {});
  };

  return (
    <div>
      <div className="container main-content">
        <div className="row">
          <h1 className="name">{produto.nome}</h1>
        </div>
        <div className="row">
          <div className=" botoes">
            <button className="btn btn-warning btE">
              <b>Editar Produto</b>
            </button>
            <button
              className="btn btn-danger btD"
              onClick={() => {
                apagaProduto(produto.idproduto);
                alert("Apagado com Sucesso!");
                history.push(`/`);
              }}
            >
              <b>Apagar Produto</b>
            </button>
          </div>
        </div>
        <div className="row product">
          <div className="col-md-5">
            <img
              className="rounded"
              src={produto.fotografia}
              alt=""
              width="400px"
              border="3px solid"
            />
          </div>
          <div className="col-md-3 product-detail">
            <h3>
              <b>Marca do Produto:</b> {produto.marca}
            </h3>
            {produto.stock == 1 ? (
              <h5>
                STOCK : <FcIcons.FcApproval />
              </h5>
            ) : (
              <h3>
                STOCK : <FcIcons.FcCancel />
              </h3>
            )}
          </div>
          <div className="col-md-4 product-price">{produto.preco} €</div>
        </div>
        <div className="row product">
          <h2 className="descricao">Detalhes do Produto</h2>
          <div className="product-description">{produto.detalhes}</div>
        </div>
      </div>
    </div>
  );
}
