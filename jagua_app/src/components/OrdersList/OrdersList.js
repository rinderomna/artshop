import React, { useContext } from "react";
import { StatusContext } from "../../App.js";
import Order from "../Order/Order.js";

import "./OrdersList.css"


function OrdersList() {
    const { status } = useContext(StatusContext);
    return (
        <div className="orders-container">
                {status.orders.map((order, index) => (
                    
                    <div className="order-container" key={order.id}>

                        <div className="product-orders-container">
                            <Order productList={order.productList}/>
                        </div>

                        <div className="order-info-container">
                            <div className="date-container">
                                <h3>Data da Compra:</h3>
                                <p className="order-date">{order.date}</p>
                            </div>

                            <h3 className="order-status">{order.status}</h3>
                        </div>

                        

                        
    
                    </div>
                ))}
        </div>
    )
}

export default OrdersList