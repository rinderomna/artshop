import React from "react";
import "./ProductInfo.css"
import SizeOptions from "../SizeOptions/SizeOptions";
const ProductInfo = (props) => {

    // products eh um array com os produtos dessa secao
    const { key, image, name, description, price, sizes } = props;

    console.log(`ProductInfo.js -> props size = ${sizes[0].name}`);
    return (
            
            <div className="product-info"> 
                <h1 id="product_title">{name}</h1>
                <h1 id="price">R${price}</h1>

                <h2>Descrição:</h2>

                <label id="description">{description}</label>

                <h2>Selecione o tamanho:</h2>

                <div className="product-size">
                    {sizes.map((size, index) => (
                        <SizeOptions 
                            key={index}
                            name={size.name}
                            specific_size={size.specific_size}
                        />
                    ))}
                </div>




            </div>

    );
};

export default ProductInfo;