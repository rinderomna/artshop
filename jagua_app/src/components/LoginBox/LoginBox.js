import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { StatusContext } from '../../App.js';

import './FormStyle.css';

import loginIcon from '../../assets/visual_identity/icon/login_user_icon.png';

function LoginBox(props) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { setStatus } = useContext(StatusContext);

    useEffect(() => {
        console.log(userName, password);
    }, [userName, password]);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8000/users')
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const user = data.find(item => (
                    item.userName === userName.trim() &&
                    item.password === password
                ));

                if (!user) {
                    alert("Usuário não encontrado!");
                } else if (user.type === "admin") {
                    setStatus({
                        type: "adminLoggedIn",
                        user
                    });
                    navigate("/"); // Navega para a rota "/"
                } else if (user.type === "customer") {
                    setStatus({
                        type: "customerLoggedIn",
                        user
                    });
                    navigate("/"); // Navega para a rota "/"
                }
            })
            .catch(error => {
                console.log('Erro na requisição:', error);
            });
    };

    return (
        <div className="login-box">
            <div className="user-icon">
                <img src={loginIcon} alt="User Icon" />
            </div>
            <p className="purple-text spaced-text">Entre suas informações de login:</p>
            <form action="" method="GET">
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Nome de usuário"
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Link to="/signUp" className="spaced-text">Não possuo conta, preciso me cadastrar</Link>
                <button type="submit" onClick={handleSubmit}>Entrar</button>
            </form>
        </div>
    );
}

export default LoginBox;