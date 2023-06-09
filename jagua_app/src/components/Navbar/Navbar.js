import React, { useState, useEffect, useContext } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { StatusContext } from "../../App.js";

import jaguaLogoGray from '../../assets/visual_identity/logo/jagua_logo_gray.png';

import "./Navbar.css";

import RightNavWrapper from "../RightNavWrapper/RightNavWrapper.js";

const Navbar = ({handleRemoveItemCart}) => {

  const location = useLocation();
  const [highlightStyle, setHighlightStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
    transition: "1.2s",
  });

  useEffect(() => {
    const navLinks = document.querySelectorAll(".navLink");

    navLinks.forEach((link) => {
      if (link.pathname === location.pathname) {
        link.classList.add("active");
        updateHighlight(link, true); // Atualize o destaque quando a localização muda
      } else {
        link.classList.remove("active");
      }
    });
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  const updateHighlight = (link, fastTransition) => {
    const { offsetLeft, offsetWidth } = link;
    const newHighlightStyle = {
      ...highlightStyle,
      transition: fastTransition ? "0.3s" : "1.2s",
      left: offsetLeft + "px",
      width: offsetWidth + "px",
      opacity: 0.7,
    };
    setHighlightStyle(newHighlightStyle);
  };

  const handleMouseOver = (e) => {
    updateHighlight(e.target, true);
  };

  const handleMouseOut = () => {
    const activeLink = document.querySelector(".navLink.active");
    if (activeLink) {
      updateHighlight(activeLink, false);
    } else {
      setHighlightStyle((prevStyle) => ({
        ...prevStyle,
        opacity: 0,
      }));
    }
  };

  const handleResize = () => {
    const activeLink = document.querySelector(".navLink.active");
    if (activeLink) {
      updateHighlight(activeLink, true);
    } else {
      setHighlightStyle((prevStyle) => ({
        ...prevStyle,
        opacity: 0,
      }));
    }
  };

  useEffect(() => {
    handleMouseOut();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  const {
    status,
    setStatus
  } = useContext(StatusContext);

  const handleStatus = () => {
    if (status.user === null) {
      setStatus({
        ...status,
        type: "loggedOut"
      });
    }
  };

  return (
    <header className="myHeader">
      <nav>
        <input type="checkbox" id="check" className="check" />
        <label htmlFor="check" className="toggleResponsiveMenu">
          <i className="fas fa-bars"></i>
        </label>

        <div className="logoJagua">
          <Link to="/" onClick={handleStatus}>
            <img
              src={jaguaLogoGray}
              alt="Logo do site"
            />
          </Link>
        </div>

        <ul>
          <li>
            <Link
              to="/"
              className="navLink"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={handleStatus}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/aboutMe"
              className="navLink"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={handleStatus}
            >
              Sobre mim
            </Link>
          </li>
          <li>
            <Link
              to="/stickers"
              className="navLink"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={handleStatus}
            >
              Adesivos
            </Link>
          </li>
          <li>
            <Link
              to="/prints"
              className="navLink"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={handleStatus}
            >
              Prints
            </Link>
          </li>
          <li>
            <Link
              to="/shirts"
              className="navLink"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={handleStatus}
            >
              Camisetas
            </Link>
          </li>
          <div id="highlightNavBar" style={highlightStyle}></div>
        </ul>

      <RightNavWrapper handleRemoveItemCart={handleRemoveItemCart}/>

      </nav>

      <Outlet />
    </header>
  );
};

export default Navbar;