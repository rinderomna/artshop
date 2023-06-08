import { useContext } from 'react';
import { StatusContext } from '../App.js';
import ProfileBox from "../components/ProfileBox/ProfileBox.js";

import PermissionDenied from '../components/PermissionDenied/PermissionDenied.js';

const EditProfile = () => {
    const { status } = useContext(StatusContext);

    return (
        <>
            {   
                (status.user && (status.type === "adminLoggedIn" || status.type === "customerLoggedIn") &&
                (status.user.type === "admin" || status.user.type === "customer")) ?
                    <ProfileBox /> :
                    <PermissionDenied userType={"cliente ou de administrador"}/>
            }
        </>
    );
};

export default EditProfile;