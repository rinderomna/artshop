import React, {useState, useEffect} from 'react'
import { IconContext } from "react-icons";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import "./SideBar.css"
import Cart from '../Cart/Cart';


function SideBar({sideBarType, handleRemoveItemCart}) {

    const [sidebar, setSidebar] = useState(false);
    const [cart, setCart] = useState(false);
    const [type, setType] = useState(sideBarType);

    const showSidebar = () =>{
        if(type != undefined){
             setSidebar(!sidebar) 
    
             if(type === "cart"){
                setCart(!cart);
             }
        }
    };

    //caso a pessoa tenha clicado no botao do carrinho
    const showCart = () =>{
        setType("cart");
        showSidebar();
    };

    //mostra a sideBar quando type possui o valor correto 
    //evita o problema do usuario clicar duas vezes para abrir o carrinho
    useEffect(() => {
        showSidebar();
    }, [type]);
    
    
    return (
        <>
            <div className={`overlay ${sidebar ? 'visible' : ''}`} onClick={showSidebar}/>

            <div className="sidebar">
                {/*Icone do carrinho */}
                <IconContext.Provider value={{ className: "shared-class", size: 50, color:"#999"}}>
                    <AiOutlineShoppingCart onClick={showCart}/> 
                </IconContext.Provider>
            </div>

            {/*Corpo da sidebar = ja inicia renderizada, porem fica escondida (right: -100%) */}
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                
                {/*Interior da sidebar */}
                <div className='navbar-toggle'>
                        {/*Botao 'x' para recolher a sidebar*/}
                        <AiOutlineClose className='close-button' onClick={showSidebar}/>
                        {cart ? <Cart flagBuyBtn={true} handleRemoveItemCart={handleRemoveItemCart}/> : <></>}
                
                </div>
                
            </nav>

        </>
    )
}

export default SideBar