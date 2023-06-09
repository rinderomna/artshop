import React, { useState, useEffect, useContext } from "react";
import { useLocation } from 'react-router-dom'
import ProductImage from "../components/ProductImage/ProductImage";
import ProductInfo from "../components/ProductInfo/ProductInfo";

import "./ProductDetails.css";
import NumProducts from "../components/NumProducts/NumProducts";
import AddToCartButton from "../components/AddToCartButton/AddToCartButton";
import { StatusContext } from "../App.js";
import SideBar from "../components/SideBar/SideBar";


const ProductDetails = ({handleAddToCart}) => {
    //Pegar a informação de qual botao de compra o usuario esta vindo (qual produto quer comprar)
    const location = useLocation();
    const { status } = useContext(StatusContext);

    //caso nao seja possivel pegar o contexto do ultimo botao de compra no catalogo clicado,
    //pega a informação do ultimo produto visitado (armazenado no status)
    if (location.state != null){
        const { product } = location.state;
        status.currProduct = product;
    }

    const [newProductAdded, setNewProductAdded] = useState();
    const [numProducts, setNumProducts] = useState(1);
    const [size, setSize] = useState("");
    const [flagCart, setFlagCart] = useState(false);



    const handleNumChange = (value) =>{
        setNumProducts(value);
    }

    const handleSizeClick = (chosen_size) =>{
        setSize(chosen_size);
    }
    
    useEffect(() => {
        const productAdded ={
            id: 1,
            image: status.currProduct.image,
            name: status.currProduct.name,
            price: status.currProduct.price,
            qtd: numProducts,
            size_name: size.name
        }
        console.log("ProductDetails.js -> preço: " + status.currProduct.price);
        setNewProductAdded(productAdded);
    }, [size, numProducts]);    

    //define o que acontece quando o usuario clica no botao "adicionar ao carrinho"
    const handleButtonClick = () => {
        handleAddToCart(newProductAdded);
        //mostrar carrinho
        setFlagCart(true);
    }

    useEffect(() => {
        if(flagCart) alert("Item adicionado ao carrinho :)")
        setFlagCart(false);
    }, [flagCart]);



    return (
        <section className="product-container">
            <div className="img-container">
                <ProductImage 
                    image={status.currProduct.image}
                />
            </div>

            <div className="info-container">
                <div className="product-info-container">
                    <ProductInfo
                        product={status.currProduct}
                        handleSizeClick={handleSizeClick}
                    />

                    <div className="num-and-cart-container">
                        <div className="adjuster-container">
                            <NumProducts handleNumChange={handleNumChange}/>
                        </div>
                        <div className="add-to-cart-container">
                            <AddToCartButton handleClick={handleButtonClick} />

                            { //essa parte nao ta dando certo!!
                              /*  {(flagCart ? <SideBar type={"cart"}/> : <></>)}*/
                            }
                        </div>
                    </div>
                </div>

            </div>



        </section>
    );
};

export default ProductDetails;
