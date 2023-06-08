import { useContext } from 'react';
import { StatusContext } from '../App.js';
import PermissionDenied from '../components/PermissionDenied/PermissionDenied.js';

const EditProfile = () => {
    const { status } = useContext(StatusContext);

    return (
        <>
            {   
                (status.user && (status.type === "adminLoggedIn" || status.type === "customerLoggedIn") &&
                (status.user.type === "admin" || status.user.type === "customer")) ?
                    <h1>Tela para editar o seu perfil (admin ou cliente)</h1> :
                    <PermissionDenied userType={"cliente ou de administrador"}/>
            }
        </>
    );
};

export default EditProfile;