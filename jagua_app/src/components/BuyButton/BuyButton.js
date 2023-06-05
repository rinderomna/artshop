import { Link } from 'react-router-dom';

import './BuyButton.css';

function BuyButton(props) {
    return (
        <Link to="/productDetails" className="buyProductButton">
        Comprar
        </Link>
    );
}

export default BuyButton;