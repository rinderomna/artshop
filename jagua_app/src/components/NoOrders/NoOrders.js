import React from 'react'
import { SlGhost } from "react-icons/sl";
import { IconContext } from "react-icons";

import "./NoOrders.css"

function NoOrders() {
  return (
    <div className='no-orders-container'>
        <IconContext.Provider value={{ className: "shared-class", size: 40, color: "var(--light_gray)" }}>
            <SlGhost />
        </IconContext.Provider> 
        <br/>
        <h3 className='message'>Não há nenhum pedido</h3>
    </div>
  )
}

export default NoOrders