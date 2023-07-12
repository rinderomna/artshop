import React, { useContext } from 'react' // Infos do usuario
import { StatusContext } from "../../App.js"; // Lidar com infos do usuario
import { Link } from 'react-router-dom'; // Relacionar paginas diferentes
import "./BuyButtonCart.css" // Estilo

// Finalizar as compras com o que tem no carrinho, levando cliente ao checkout
function BuyButtonCart() {
  const { status } = useContext(StatusContext);  

  return (
    <>
      <Link to="/checkout" state={{ product: status.cartList }} className="buyProductCart" >
        Comprar
      </Link>
    </>
  )
}

export default BuyButtonCart