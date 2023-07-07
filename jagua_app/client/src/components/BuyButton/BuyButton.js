import { useContext, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { StatusContext } from '../../App.js';

import './BuyButton.css';

function BuyButton({product}) {
    const { status, setStatus } = useContext(StatusContext);

    const handleClick = () => {
        //currProduct guarda o produto que o usuario quer visualizar
        //para que possa ser possível mostrar na tela productDetail
        setStatus((prevStatus) => ({
            ...prevStatus,
            currProduct: product
        }));
    }
    

    return (
        <>
            <Link to="/productDetails" className="buyProductButton" onClick={handleClick}>
                {(status.user && status.type === "adminLoggedIn" && status.user.type === "admin") ?
                "Ver mais" : "Comprar"}
            </Link>
        </>
    );
}

export default BuyButton;