import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { StatusContext } from '../../App';
import { SlUser } from 'react-icons/sl';

import './FormStyle.css';

function LoginBox() {
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
                    alert("Usuário não encontrado ou senha incorreta!");
                } else if (user.type === "admin") {
                    setStatus((prevStatus) =>({//mudar aqui tambem?
                        ...prevStatus,
                        type: "adminLoggedIn",
                        user
                    }));
                    navigate("/"); // Navega para a rota "/"
                } else if (user.type === "customer") {
                    setStatus((prevStatus) =>({//mudar aqui tambem?
                        ...prevStatus,
                        type: "customerLoggedIn",
                        user
                    }));
                    navigate("/"); // Navega para a rota "/"
                }
            })
            .catch(error => {
                console.log('Erro na requisição:', error);
            });
    };

    return (
        <div className="login-box">
            <div className="user-icon" aria-label="Ícone de usuário">
                <SlUser size={"6em"} color="var(--purple)" />
                <h1>Login</h1>
            </div>
            <p className="purple-text spaced-text">Entre suas informações de login:</p>
            <form action="" method="GET">
                <input
                    type="text"
                    id="username"
                    name="username"
                    maxLength={25}
                    placeholder="Nome de usuário"
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    maxLength={30}
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Link to="/signUp" className="spaced-text underlined">Não possuo conta, preciso me cadastrar</Link>
                <button type="submit" onClick={handleSubmit}>Entrar</button>
            </form>
        </div>
    );
}

export default LoginBox;