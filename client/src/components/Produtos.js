import React from "react";
import "./Produtos.css";
import * as FcIcons from "react-icons/fc";

export default function Produtos() {
  var stock = 0;

  return (
    <div className="container main-content">
      <div className="row product">
        <div className="col-md-2">
          <img
            className="rounded"
            src="../../public/logo192.png"
            border="1px solid"
          />
        </div>
        <div className="col-md-6 product-detail">
          <h3>Nome do produto</h3>
          <h6>Marca do produto</h6>
          {stock == 0 ? (
            <h7>
              STOCK : <FcIcons.FcApproval />
            </h7>
          ) : (
            <h7>
              STOCK : <FcIcons.FcCancel />
            </h7>
          )}
        </div>
        <div className="col-md-2 product-price">Preco do produto €</div>
        <div className="col-md-2 btn">
          <FcIcons.FcNext size="80px" />
        </div>
      </div>
    </div>
  );
}
