import './LoginButton.css';
import { Link } from 'react-router-dom';

function LoginButton() {
    return (
        <>
            <Link to="/login" className="loginButton">
            Entrar
            </Link>
            <div className="smartphoneLogin">
            <Link to="/login">
                <i className="fas fa-sign-in-alt"></i>
            </Link>
            </div>
        </>
    );
}

export default LoginButton;