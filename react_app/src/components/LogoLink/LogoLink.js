import './LogoLink.css'
import logo from '../../assets/visual_identity/logo/jagua_logo.png';

function LogoLink() {
  return (
    <div  className="logo">
      <a href="#">
        <img
          src={logo}
          alt="Logo do site"
        />
      </a>
    </div>
  );
}

export default LogoLink;