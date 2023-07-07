import { useContext } from 'react';
import { Link } from "react-router-dom";

import { StatusContext } from '../../App.js';

import "./AddToCartButton.css"

const AddToCartButton = ({handleClick}) => {
    const { status } = useContext(StatusContext);
 
    return ( 
        <>
            {
                (status.user && status.type === "customerLoggedIn" && status.user.type === "customer") ?
                    <button className="addToCart" onClick={handleClick}>
                        Adicionar ao Carrinho
                    </button> :
                    <Link to="/login" className="addToCart">
                        Adicionar ao Carrinho
                    </Link> 
            }
        </>
    );
}
 
export default AddToCartButton;