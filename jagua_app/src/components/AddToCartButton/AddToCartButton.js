import { useContext } from 'react';
import { Link } from "react-router-dom";

import { StatusContext } from '../../App.js';

import "./AddToCartButton.css"

const AddToCartButton = () => {
    const { status } = useContext(StatusContext);
 
    return ( 
        <>
            {
                (status.user && status.type === "customerLoggedIn" && status.user.type === "customer") ?
                    <Link to="/checkout" className="addToCart">
                        Adicionar ao Carrinho
                    </Link> :
                    <Link to="/login" className="addToCart">
                        Adicionar ao Carrinho
                    </Link> 
            }
        </>
    );
}
 
export default AddToCartButton;