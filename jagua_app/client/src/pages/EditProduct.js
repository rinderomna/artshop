import { useContext } from 'react';
import { StatusContext } from '../App.js';
import ProductEditionBox from "../components/ProductEditionBox/ProductEditionBox.js";

import PermissionDenied from '../components/PermissionDenied/PermissionDenied.js';

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