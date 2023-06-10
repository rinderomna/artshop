import React, { useState, useEffect, useContext } from "react";
import ProductImage from "../components/ProductImage/ProductImage";
import ProductInfo from "../components/ProductInfo/ProductInfo";

import "./ProductDetails.css";
import NumProducts from "../components/NumProducts/NumProducts";
import AddToCartButton from "../components/AddToCartButton/AddToCartButton";
import { StatusContext } from "../App.js";


const ProductDetails = ({handleAddToCart}) => {
    
    const [newProductAdded, setNewProductAdded] = useState();
    const [numProducts, setNumProducts] = useState(1);
    const [size, setSize] = useState("");
    const [flagCart, setFlagCart] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0); // Rolando para o topo da página
    }, []);

    const handleNumChange = (value) =>{
        setNumProducts(value);
    }

    const handleSizeClick = (chosen_size) =>{
        setSize(chosen_size);
    }

    const { status } = useContext(StatusContext);

    //status para pegar as informacoes do porduto que o usuario quer 
    //visualizar com mais detalhe -> é armazenado no status quando o BuyButton 
    //é clicado
    useEffect(() => {
      const productAdded = {
        id: 1,
        image: status.currProduct.image,
        name: status.currProduct.name,
        price: status.currProduct.price,
        qtd: numProducts,
        size_name: size.name
      };
      setNewProductAdded(productAdded);
      
      // This effect can also depend on status.currProduct.price if needed
    }, [size, numProducts, status.currProduct]);  

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
