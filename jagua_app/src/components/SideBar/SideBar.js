import React, {useState, useEffect} from 'react'

import { AiOutlineClose } from "react-icons/ai";
import "./SideBar.css"
import Cart from '../Cart/Cart';
import ExitButton from '../ExitButton/ExitButton';
import OrderDetails from '../OrderDetails/OrderDetails';


function SideBar({sideBarType, setType}) {

    const [sidebar, setSidebar] = useState(false);
    const [cart, setCart] = useState(false);


    const showSidebar = () =>{
        if(sideBarType != undefined){
             setSidebar(!sidebar) 
    
             if(sideBarType === "cart"){
                setCart(!cart);
             }
        }
    };

    const closeSideBar = () => {
        //ao fechar, a sidebar deixa de possuir um tipo
        setType("");
    }

    //a sidebar "aparece" toda vez que é atribuido um tipo a ela, 
    //ou seja, quando alguem clica em algum botao
    useEffect(() => {

        if(sideBarType !== "" || sidebar === true){
            showSidebar();
        }
    }, [sideBarType]);

    
    
    return (
        <>
            <div className={`overlay ${sidebar ? 'visible' : ''}`} onClick={closeSideBar}/>

            {/*Corpo da sidebar = ja inicia renderizada, porem fica escondida (right: -100%) */}
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                
                {/*Interior da sidebar */}
                <div className='navbar-toggle'>
                        {/*Botao 'x' para recolher a sidebar*/}
                        <AiOutlineClose className='close-button' onClick={closeSideBar}/>
                        {(sideBarType === "cart") ? <Cart flagBuyBtn={true} /> : <></>}
                        {(sideBarType === "order") ? <OrderDetails /> : <></>}
                        {(sideBarType === "user") ? <><h1>Perfil do usuário</h1> <ExitButton callBack={closeSideBar}/> </>: <></>}
                
                </div>
                
            </nav>

        </>
    )
}

export default SideBar