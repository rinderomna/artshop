import './LogoLink.css'
import logo from '../../assets/visual_identity/logo/jagua_logo_gray.png';

function LogoLink() {
  return (
    <div className="logo">
      <a href="#home">
        <img
          src={logo}
          alt="Logo do site"
        />
      </a>
    </div>
  );
}

export default LogoLink;