import React, { useContext, useEffect, useState } from "react";
import { StatusContext } from "../../App.js";

function ShippingForm({setShippingInput}) {

    const { status, setStatus } = useContext(StatusContext);
    const [carrierName, setCarrierName] = useState(""); // State for carrier name input
    const [trackingCode, setTrackingCode] = useState(""); // State for tracking code input

    const handleConfirm = () => {

        const updatedList = status.orders.map((order) => {
            if (order.id === status.currOrder.id) {
              // Update the desired field based on a condition
              return {
                ...order,
                status: "Postado para Envio",
                code: trackingCode,
                shipping_company: carrierName
              };
            }
            return order;
        });


        setStatus((prevStatus) => ({
            ...prevStatus,
            orders: updatedList
        }));
        
        setStatus((prevStatus) => ({
          ...prevStatus,
          currOrder: {
            ...prevStatus.currOrder,
            status: "Postado para Envio",
            code: trackingCode,
            shipping_company: carrierName
          }
        }));

        setShippingInput(false);
    };

    const handleCarrierNameChange = (event) => {
        setCarrierName(event.target.value); // Update the carrier name state
    };
    
    const handleTrackingCodeChange = (event) => {
        setTrackingCode(event.target.value); // Update the tracking code state
    };

    return (
        <div>
            <h2>Informações do Envio</h2>

            <h3>Transportadora</h3>
            <input 
            type="text"
            placeholder="Digite o nome da transportadora"
            value={carrierName}
            onChange={handleCarrierNameChange}
            />

            <h3>Código de Rastreio</h3>
            <input
            type="text"
            placeholder="Digite o código fornecido pela transportadora"
            value={trackingCode}
            onChange={handleTrackingCodeChange}
            />

            <button onClick={handleConfirm}>Confirmar</button>
            
    </div>
  )
}

export default ShippingForm