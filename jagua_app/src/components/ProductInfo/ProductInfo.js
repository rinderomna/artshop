import React, { useState } from "react";
import "./ProductInfo.css";
import SizeOptions from "../SizeOptions/SizeOptions";

const ProductInfo = ({ product, handleSizeClick }) => {
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
