import React, { useContext, useEffect, useState } from "react";
import { StatusContext } from "../../App.js";
import Order from "../Order/Order.js";

import "./OrderDetails.css"
import ShippingForm from "../ShippingForm/ShippingForm.js";

function OrderDetails() {
  const { status } = useContext(StatusContext);
  const [shppingInput, setShippingInput] = useState(false);

  const handleAddShipping = () => {
    //mostrar inputs de adicionar transportadora e código de rastreio
    setShippingInput(true);
  }

  return (
        <div>
            {
            status.currOrder ?
            <div className="order-details-container">
              <h1 className="title">Detalhes do Pedido</h1>
              <Order productList={status.currOrder.productList}/>

              <div className="order-details-info-container">
                
                <h3 className={`order-status ${status.currOrder.status === "Aguardando Postagem" ? "red" : "green"}`}>{status.currOrder.status}</h3>
                <hr/>

                <h2>Informações do Cliente</h2>

                <h3>Nome Completo:</h3>
                <p>{status.currOrder.buyer.name}</p>
                
                <h3>CPF:</h3>
                <p>{status.currOrder.buyer.cpf}</p>

                <h3>E-mail:</h3>
          
                <h3>Telefone:</h3>
                <p>{status.currOrder.buyer.cellphone}</p>

                <h3>Endereço:</h3>
                <p>{status.currOrder.address.street}</p>
                <p>{status.currOrder.address.neighborhood}</p>
                <p>Nº {status.currOrder.address.number}</p>
                <p>Complemento: {status.currOrder.address.complement}</p>

                {(status.currOrder.status == "Postado para Envio" && !shppingInput) ? 
                <>
                  <hr/>
                  <h2>Informações do Envio</h2>

                  <h3>Transportadora:</h3>
                  <p>{status.currOrder.shipping_company}</p>

                  <h3>Código de Rastreio:</h3>
                  <p className="shipping-code">{status.currOrder.code}</p>

                  { (status.type == "adminLoggedIn") ? 
                    <div className="button-container">
                      <button className="btn-editar-envio" onClick={handleAddShipping}>Editar Envio</button> 
                    </div>
                    :
                    <></>
                  }
                
                </>:

                status.type == "adminLoggedIn" ? 
                  <div className="shipping-info-container">
                    {shppingInput ? <ShippingForm setShippingInput={setShippingInput}/> : <div className="button-container"><button className="btn-editar-envio" onClick={handleAddShipping}>Adicionar Envio</button></div>}
                  </div>
                  :
                  <div className="message-container">
                    <hr/>
                    <p className="no-shipping-message">Seu pedido ainda não foi postado,volte mais tarde para conferir o código de rastreio e transportadora.</p>
                  </div>
                }
        

              </div>
            </div> :

            <></>
          
            }
            

        </div>
  )
}

export default OrderDetails