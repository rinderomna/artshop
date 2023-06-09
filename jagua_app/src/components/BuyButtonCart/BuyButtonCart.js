import React, { useContext } from 'react'
import { StatusContext } from "../../App.js";
import { Link } from 'react-router-dom';
import "./BuyButtonCart.css"

function BuyButtonCart() {
  const { status } = useContext(StatusContext);
  return (
      <>
        <Link to="#" state={{ product: status.cartList }} className="buyProductCart">
            Comprar
        </Link>
      </>
  )
}

export default BuyButtonCart