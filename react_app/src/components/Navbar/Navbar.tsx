import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav>
    <input type="checkbox" id="check" />
    <label htmlFor="check" className="toggleResponsiveMenu">
        <i className="fas fa-bars"></i>
    </label>

    <div id="logoJagua">
        <a href="index.html">
        <img src="visual_identity/logo/jagua_logo_gray.png" alt="Logo do site" />
        </a>
    </div>

    <ul>
        <li>
        <a href="index.html" className="navLink">
            Home
        </a>
        </li>
        <li>
        <a href="html_screens/aboutme.html" className="navLink">
            Sobre mim
        </a>
        </li>
        <li>
        <a href="html_screens/stickers.html" className="navLink">
            Adesivos
        </a>
        </li>
        <li>
        <a href="html_screens/prints.html" className="navLink">
            Prints
        </a>
        </li>
        <li>
        <a href="html_screens/shirts.html" className="navLink">
            Camisetas
        </a>
        </li>

        <div id="highlightNavBar"></div>
    </ul>

    <a id="loginButton" href="html_screens/login.html">
        Entrar
    </a>
    <div className="smartphoneLogin">
        <a href="html_screens/login.html">
        <i className="fas fa-sign-in-alt"></i>
        </a>
    </div>
    </nav>
  );
};

export default Navbar;
