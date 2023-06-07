import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import "./SideBar.css"

function SideBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () =>{
    console.log("SideBar.js = sidebar: " + sidebar);
    setSidebar(!sidebar)
};
  
  return (
    <>
        <div className={`overlay ${sidebar ? 'visible' : ''}`} onClick={showSidebar}/>

        <div className="sidebar">
            <Link to="#" className="menu-bars">
                <IconContext.Provider value={{ className: "shared-class", size: 50, color:"#999"}}>
                    <AiOutlineShoppingCart onClick={showSidebar}/> 
                </IconContext.Provider>
            </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            
            <div className='navbar-toggle'>
                <Link to="#" className='menu-bars'>
                    <AiOutlineClose className='close-button' onClick={showSidebar}/>
                </Link>
            </div>
               
        </nav>

    </>
  )
}

export default SideBar