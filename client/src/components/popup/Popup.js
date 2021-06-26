/* Esta classe não é da minha autoria, Apenas incluí no trabalho para ter algum tipo de animação ao inserir um produto. 
   url: https://www.cluemediator.com/create-simple-popup-in-reactjs
*/

import React from "react";
import "./Popup.css";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
