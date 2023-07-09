import { useContext, useState } from 'react';

import { StatusContext } from '../../App.js';

import ExitButton from '../ExitButton/ExitButton.js';
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
        if (status.user && status.user.type == "customer") {
            setType("customer");
            console.log(type);
        }

        else if (status.user && status.user.type == "admin") {
            setType("admin");
        }
    }

    return (
        <div className='nav-buttons-container'>
            {
                (status.type === "customerLoggedIn") 
                    ?
                    <>
                        <IconContext.Provider value={{ className: "shared-class", size: 50, color:"#999"}}>
                            <AiOutlineShoppingCart onClick={handleCartClick} style={{cursor: "pointer"}}/> 
                        </IconContext.Provider>
                        
                    </>
                    :
                    <></>
            }

            {
                (status.type === "adminLoggedIn" || status.type === "customerLoggedIn") ?
                    <>  
                        <div onClick={handleUserClick}><UserButton username={status.user.username} /></div> 
                    </> :
                    <LoginButton hidden={status.type === "transient"}/>
                    
            }

            <SideBar sideBarType={type} setType={setType}/>
        </div>
    );
}

export default RightNavWrapper;