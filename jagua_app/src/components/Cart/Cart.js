import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { SlGhost } from "react-icons/sl";
import BuyButtonCart from "../BuyButtonCart/BuyButtonCart";
import { StatusContext } from "../../App.js";
import "./Cart.css";

function Cart({flagBuyBtn, handleRemoveItemCart }) {
  const { status } = useContext(StatusContext);
  const handleRemoveClick = (rem_product) => {
    handleRemoveItemCart(rem_product);
  };

  return (
    <div className="cart-container">
      <div className="title-container">
        <IconContext.Provider
          value={{ className: "shared-class", size: 60, color: "var(--light_gray)" }}
        >
          <AiOutlineShoppingCart />
        </IconContext.Provider>
        <h1>Seu Carrinho</h1>
      </div>
      
      {
        (status.cartList == null || status.cartList == "") 
        ? <div className="nullList-container">
            <IconContext.Provider value={{ className: "shared-class", size: 40, color: "var(--light_gray)" }}>
            <SlGhost />
            </IconContext.Provider> 
            <br/>
            Não há nada para ver aqui 
          </div> 

        : <>
            <div className="productCartList-container">
                {status.cartList.map((product, index) => (
                <div className="item-container" key={product.id}>
                    <img src={product.image} className="img-product" alt={`Imagem para ${product.name}`} />

                    <div className="item-info-container">
                    <p className="product-name">{product.name}</p>
                    <p className="product-details">Quantidade: {product.qtd}</p>
                    <p className="product-details">Tamanho: {product.size_name}</p>
                    <p className="product-price">R$ {parseFloat(product.price)*parseFloat(product.qtd)}</p>
                    </div>
                    {console.log(typeof product.price)}
                    {console.log(typeof product.qtd)}

                    <AiOutlineClose className="close-button" onClick={() => handleRemoveClick(product)} />
                </div>
                ))}
            </div>
            <div className="buy-button-container">
              {(flagBuyBtn ? <BuyButtonCart /> : <></>)}
            </div>
        </>
      }


      
    </div>
  );
}

export default Cart;
