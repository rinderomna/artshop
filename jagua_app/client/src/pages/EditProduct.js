import { useContext } from 'react';
import { StatusContext } from '../App.js';
import ProductEditionBox from "../components/ProductEditionBox/ProductEditionBox.js";

import PermissionDenied from '../components/PermissionDenied/PermissionDenied.js';

// Checa se usuario eh admin logado para permitir edicao de produtos no site
const EditProduct = () => {
    const { status } = useContext(StatusContext);

    return (
        <>
            {   
                (status.user && status.user.type === "admin" && status.type === "adminLoggedIn") ?
                    <ProductEditionBox /> :
                    <PermissionDenied userType={"administrador"}/>
            }
        </>
    );
};

export default EditProduct;