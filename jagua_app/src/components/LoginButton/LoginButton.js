import { useContext } from 'react';

import { Link } from 'react-router-dom';

import { StatusContext } from '../../App.js';

import './LoginButton.css';

function LoginButton(props) {
    const { hidden } = props;

    const {
        status,
        setStatus
    } = useContext(StatusContext);

    const handleClick = () => {
        setStatus({
            ...status,
            type: "transient"
        });
    };

    return (
        <>
            <Link to="/login" className={`loginButton ${hidden ? "hideItems" : ""}`} onClick={handleClick}>
            Entrar
            </Link>
            <div className={`smartphoneLogin ${hidden ? "hideItems" : ""}`}>
            <Link to="/login" onClick={handleClick}>
                <i className="fas fa-sign-in-alt"></i>
            </Link>
            </div>
        </>
    );
}

export default LoginButton;