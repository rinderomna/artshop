import React, { useContext, useState } from "react";
import { StatusContext } from "../../App.js";
import "./ProductInfo.css";
import SizeOptions from "../SizeOptions/SizeOptions";

const ProductInfo = ({ product, handleSizeClick }) => {
  const { status } = useContext(StatusContext);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0].name);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
    handleSizeClick(size);
  };

  return (
    <div className="product-info">
      <h1 id="product_title">{product.name}</h1>
      <h1 id="price">R${product.price}</h1>

      <h2>Descrição:</h2>
      <label id="description">{product.description}</label>

      <div className="stock-container">
        <div className="stock-info">
          <h2>Quantidade em Estoque:</h2>
          <label id="description">Pedidos maiores que o estoque disponível <br/> podem ser 
          negociados pelo <a href="https://instagram.com/jagua.jpg?igshid=MzNlNGNkZWQ4Mg==">Instagram</a> </label>
        </div>
        <h2 className="stock">{product.stock}</h2>
      </div>

      {//mostrar quantidade vendida apenas quando o admin estiver logado
       (status.type === "adminLoggedIn") ? 
        <div className="stock-container">
          <h2>Quantidade Vendida:</h2>
          <h2 className="stock">{product.sales}</h2>
        </div>
        :
        <></>
      }

      <h2>Selecione o tamanho:</h2>
      <div className="product-size">
        {product.sizes.map((size, index) => (
          <SizeOptions
            key={index}
            size={size}
            handleSizeClick={handleSizeSelection}
            isSelected={selectedSize === size}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
