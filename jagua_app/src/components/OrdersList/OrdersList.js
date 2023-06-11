import React, { useContext, useState, useEffect } from "react";
import { StatusContext } from "../../App.js";
import Order from "../Order/Order.js";

import "./OrdersList.css"
import SideBar from "../SideBar/SideBar.js";


function OrdersList({filtered_list}) {
    const { status, setStatus } = useContext(StatusContext);
    const [type, setType] = useState("");
    const [userOrders, setUserOrders] = useState(filtered_list);

    const handleOrderClick = (order) => {
        console.log("Clicou na order!");
        //currOrder guarda o produto que o usuario quer visualizar
        //para que possa ser possível mostrar na SideBar 
        setStatus((prevStatus) => ({
            ...prevStatus,
            currOrder: order
        }));

        //mostra a sideBar com detalhes do pedido
        setType("order");

    }


    return (
        <div className="orders-container">
            
                {userOrders.map((order, index) => (
                    
                    <div className="order-container" key={order.id} onClick={() => handleOrderClick(order)}> 

                        <div className="product-orders-container">
                            <Order productList={order.productList}/>
                        </div>

                        <div className="order-info-container">
                            <div className="date-container">
                                <h3>Data da Compra:</h3>
                                <p className="order-date">{order.date}</p>
                            </div>

                            <h3 className={`order-status ${order.status === "Aguardando Postagem" ? "red" : "green"}`}>{order.status}</h3>
                        </div>

                    </div>
                ))}

                {<SideBar sideBarType={type} setType={setType}/> }

        </div>
    )
}

export default OrdersList