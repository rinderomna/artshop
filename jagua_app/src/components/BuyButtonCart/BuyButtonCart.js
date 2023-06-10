import React, { useContext, useState, useEffect } from 'react'
import { StatusContext } from "../../App.js";
import { Link } from 'react-router-dom';
import "./BuyButtonCart.css"

function BuyButtonCart() {
  const { status, setStatus } = useContext(StatusContext);  


  return (
    <>
      <Link to="/checkout" state={{ product: status.cartList }} className="buyProductCart" >
        Comprar
      </Link>
    </>
  )
}


export default BuyButtonCart