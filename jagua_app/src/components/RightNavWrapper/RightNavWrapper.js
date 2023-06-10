import { useContext, useState } from 'react';

import { StatusContext } from '../../App.js';

import UserButton from '../UserButton/UserButton.js';
import LoginButton from "../LoginButton/LoginButton.js";
import SideBar from '../SideBar/SideBar.js';

import { IconContext } from "react-icons";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";

import "./RightNavWrapper.css"

function RightNavWrapper() {

    const [type, setType] = useState("");

    const {
        status
    } = useContext(StatusContext);

    const handleCartClick = () => {
        console.log("Clicou no carrinho!");
        setType("cart");
    }

    const handleUserClick = () => {
        console.log("Clicou no user button!");
        setType("user");
    }

    return (
        <div className='nav-buttons-container'>
            {
                (status.type === "customerLoggedIn") 
                    ?
                    <>
                        <IconContext.Provider value={{ className: "shared-class", size: 50, color:"#999"}}>
                            <AiOutlineShoppingCart onClick={handleCartClick}/> 
                        </IconContext.Provider>
                        
                    </>
                    :
                    <></>
            }

            {
                (status.type === "adminLoggedIn" || status.type === "customerLoggedIn") ?
                    <div onClick={handleUserClick}><UserButton userName={status.user.userName} /></div> :
                    <LoginButton hidden={status.type === "transient"}/>
            }

            <SideBar sideBarType={type} setType={setType}/>
        </div>
    );
}

export default RightNavWrapper;