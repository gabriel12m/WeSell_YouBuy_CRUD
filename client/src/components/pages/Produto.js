/* É através desta classe que é apresentado um determinado produto.*/

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Produto.css";
import * as FcIcons from "react-icons/fc";
import axios from "axios";

export default function Produto() {
  let { id } = useParams();
  const [produto, setProduto] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/byId/${id}`).then((response) => {
      setProduto(response.data);
    });
  }, []);

  return (
    <div>
      <div className="container main-content">
        <div className="row">
          <h1 className="name">{produto.nome}</h1>
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
