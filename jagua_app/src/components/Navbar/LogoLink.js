import { Link } from 'react-router-dom';

import jaguaLogoGray from '../../assets/visual_identity/logo/jagua_logo_gray.png';

import "./Navbar.css";

function LogoLink() {
  return (
    <div className="logoJagua">
      <Link to="/" className="navLink">
        <img
          src={jaguaLogoGray}
          alt="Logo do site"
        />
      </Link>
    </div>
  );
}

export default LogoLink;