import { Link } from "react-router-dom";

import "./AddToCartButton.css"

const AddToCartButton = () => {
    return ( 
        <Link to="/login" className="addToCart">
            Adicionar ao Carrinho
        </Link>
     );
}
 
export default AddToCartButton;