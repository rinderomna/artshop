import { Outlet, Link } from "react-router-dom";

import LogoLink from "./LogoLink.js";

import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="myHeader">
      <nav>
        <input type="checkbox" className="check" />
        <label htmlFor="check" className="toggleResponsiveMenu">
          <i className="fas fa-bars"></i>
        </label>

        <LogoLink />

        <ul>
          <li>
            <Link to="/" className="navLink">Home</Link>
          </li>
          <li>
            <Link to="/aboutMe" className="navLink">Sobre mim</Link>
          </li>
          <li>
            <Link to="/stickers" className="navLink">Adesivos</Link>
          </li>
          <li>
            <Link to="/prints" className="navLink">Prints</Link>
          </li>
          <li>
            <Link to="/shirts" className="navLink">Camisetas</Link>
          </li>

          <div className="highlightNavBar"></div>
        </ul>

        <Link to="/login" className="loginButton">Entrar</Link>
        <div className="smartphoneLogin">
          <Link to="/login">
            <i className="fas fa-sign-in-alt"></i>
          </Link>
        </div>
      </nav>

      <Outlet />
    </header>
  );
}

export default Navbar;