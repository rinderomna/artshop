import { useContext } from 'react';

import { StatusContext } from '../../App.js';

import UserButton from '../UserButton/UserButton.js';
import LoginButton from "../LoginButton/LoginButton.js";

function RightNavWrapper() {
    const {
        status
    } = useContext(StatusContext);

    return (
        <>
            {
                (status.type === "adminLoggedIn") ?
                    <UserButton text="NavAdminInfo"/> :
                    (status.type === "customerLoggedIn") ?
                        <>
                            <p style={{display: "inline"}}>Carrinho</p>
                            <UserButton text="NavCustomerInfo"/>
                        </>
                         :
                        <LoginButton hidden={status.type === "transient"}/>
            }
        </>
    );
}

export default RightNavWrapper;