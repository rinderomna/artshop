import React from "react";
import { useLocation } from 'react-router-dom'
import ProductImage from "../components/ProductImage/ProductImage";
import ProductInfo from "../components/ProductInfo/ProductInfo";

import "./ProductDetails.css";
import NumProducts from "../components/NumProducts/NumProducts";
import AddToCartButton from "../components/AddToCartButton/AddToCartButton";

const ProductDetails = () => {
    //Pegar a informação de qual botao de compra o usuario esta vindo (qual produto quer comprar)
    const location = useLocation();
    const { product } = location.state;

    return (
        <section className="product-container">
            <div className="img-container">
                <ProductImage 
                    image={product.image}
                />
            </div>

            <div className="info-container">
                <div className="product-info-container">
                    <ProductInfo
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        sizes={product.sizes}
                    />

                    <div className="num-and-cart-container">
                        <div className="adjuster-container">
                            <NumProducts />
                        </div>
                        <div className="add-to-cart-container">
                            <AddToCartButton />
                        </div>
                    </div>
                </div>

            </div>



        </section>
    );
};

export default ProductDetails;