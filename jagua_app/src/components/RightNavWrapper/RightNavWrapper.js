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
                (status.type === "adminLoggedIn") ?
                    <UserButton text="NavAdminInfo"/> :
                    (status.type === "customerLoggedIn") ?
                        <>  
                            <SideBar/>
                            <UserButton text="NavCustomerInfo"/>
                        </>
                         :
                        <LoginButton hidden={status.type === "transient"}/>
            }
        </>
    );
}

export default RightNavWrapper;