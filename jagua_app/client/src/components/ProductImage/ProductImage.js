import React from "react";
import "./ProductImage.css";


const ProductImage = (props) => {
    const { image } = props;
    return (
            <div className="img-container">
                <img src={image} alt={`Imagem do produto`} id="img-product" />
            </div>
    );
};

export default ProductImage;