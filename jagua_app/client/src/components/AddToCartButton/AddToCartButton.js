import { useContext } from 'react'; // Infos do usuario
import { Link } from "react-router-dom"; // Roteamentos do site

import { StatusContext } from '../../App.js'; // Acompanhar estado do usuario

import "./AddToCartButton.css" // Estilo

// Cuida da administracao do carrinho e verifica se usuario cliente/customer esta logado para poder
// adicionar produtos para compra. Senao, leva ao login para ter acesso ao carrinho.
const AddToCartButton = ({handleClick}) => {
    // Infos do usuario
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