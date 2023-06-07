import { useContext, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { StatusContext } from '../../App.js';

import './BuyButton.css';

function BuyButton(props) {
    const { status } = useContext(StatusContext);

    return (
        <>
            <Link to="/productDetails" state={{ product: props }} className="buyProductButton">
                {(status.user && status.type === "adminLoggedIn" && status.user.type === "admin") ?
                "Ver mais" : "Comprar"}
            </Link>
        </>
    );
}

export default BuyButton;