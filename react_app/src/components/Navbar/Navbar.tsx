import React from "react";
import './Navbar.scss';

const Navbar: React.FC = () => {
  return (
    <nav>
    <input type="checkbox" id="check" />
    <label htmlFor="check" className="toggleResponsiveMenu">
        <i className="fas fa-bars"></i>
    </label>

    <div id="logoJagua">
        <a href="index.html">
        <img src="../../assets/visual_identity/logo/jagua_logo_gray.png" alt="Logo do site" />
        </a>
    </div>

    <ul>
        <li>
        <a href="#" className="navLink">
            Home
        </a>
        </li>
        <li>
        <a href="#" className="navLink">
            Sobre mim
        </a>
        </li>
        <li>
        <a href="#" className="navLink">
            Adesivos
        </a>
        </li>
        <li>
        <a href="#" className="navLink">
            Prints
        </a>
        </li>
        <li>
        <a href="#" className="navLink">
            Camisetas
        </a>
        </li>

        <div id="highlightNavBar"></div>
    </ul>

    <a id="loginButton" href="#">
        Entrar
    </a>
    <div className="smartphoneLogin">
        <a href="#">
        <i className="fas fa-sign-in-alt"></i>
        </a>
    </div>
    </nav>
  );
};

export default Navbar;
