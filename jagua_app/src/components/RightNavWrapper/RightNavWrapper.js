import { useContext } from 'react';

import { StatusContext } from '../../App.js';

import ExitButton from '../ExitButton/ExitButton.js';
import UserButton from '../UserButton/UserButton.js';
import LoginButton from "../LoginButton/LoginButton.js";
import SideBar from '../SideBar/SideBar.js';

function RightNavWrapper({handleRemoveItemCart}) {
    //lista de objetos do tipo produto que foram adicionados ao carrinho

    const {
        status
    } = useContext(StatusContext);

    return (
        <>
            {
                (status.type === "customerLoggedIn") ?
                    <SideBar handleRemoveItemCart={handleRemoveItemCart}/> :
                    <></>
            }

            {
                (status.type === "adminLoggedIn" || status.type === "customerLoggedIn") ?
                    <> <ExitButton />
                    <UserButton userName={status.user.userName}/> </> :
                    <LoginButton hidden={status.type === "transient"}/>
            }
        </>
    );
}

export default RightNavWrapper;