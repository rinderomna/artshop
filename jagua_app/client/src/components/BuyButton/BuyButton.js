import { useContext, useEffect } from 'react'; // Hooks JS de contexto do usuario, efeitos colaterais de eventos

import { Link } from 'react-router-dom'; // Para relacionar paginas diferentes

import { StatusContext } from '../../App.js'; // Guardar estado do usuario

import './BuyButton.css'; // Estilo

// Administra a interacao de compra de produto por um usuario - modifica-se com base no tipo de usuario.
// Admin ve 'Ver mais' para editar e cliente ve 'Comprar'
function BuyButton({product}) {
    // Checa infos do usuario
    const { status, setStatus } = useContext(StatusContext);

    const handleClick = () => {
        // currProduct guarda o produto que o usuario quer visualizar
        // para que possa ser possível mostrar na tela productDetail
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