import { useContext, useEffect } from 'react';

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
                    <UserButton />
                    : <LoginButton hidden={status.type === "transient"}/>
            }
        </>
    );
}

export default RightNavWrapper;