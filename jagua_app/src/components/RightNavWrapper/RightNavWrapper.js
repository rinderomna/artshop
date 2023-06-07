import { useContext } from 'react';

import { StatusContext } from '../../App.js';

import UserButton from '../UserButton/UserButton.js';
import LoginButton from "../LoginButton/LoginButton.js";
import SideBar from '../SideBar/SideBar.js';

function RightNavWrapper() {
    const {
        status
    } = useContext(StatusContext);

    return (
        <>
            {
                (status.type === "customerLoggedIn") ?
                    <SideBar /> :
                    <></>
            }

            {
                (status.type === "adminLoggedIn" || status.type === "customerLoggedIn") ?
                    <UserButton userName={status.user.userName}/> :
                    <LoginButton hidden={status.type === "transient"}/>
            }
        </>
    );
}

export default RightNavWrapper;