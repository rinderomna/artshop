import { useEffect, useState, useContext } from 'react'; // Hooks
import { Link, useNavigate } from 'react-router-dom'; // Lidar c/ links e redirecionamentos

import { StatusContext } from '../../App'; // Infos de usuario
import { SlUser } from 'react-icons/sl'; // Icone para usuario

import './FormStyle.css'; // Estilo para formularios

// Lidar c/ formulario de login de usuarios
function LoginBox() {
    // Inicializando nome de usuario e senha
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();

    const { setStatus } = useContext(StatusContext);

    useEffect(() => {
        console.log(username, password);
    }, [username, password]);

    // Ao submeter o formulario de login...
    const handleSubmit = (e) => {
        e.preventDefault(); // Nao atualize a pagina toda (SPA)

        fetch('http://localhost:3001/users')
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const user = data.find(item => ( // Usuario existe no bco
                    item.username === username.trim() &&
                    item.password === password
                ));

                if (!user) { // Enviar mensagem de erro - usuario nao existe no bco c/ esses dados
                    alert("Usuário não encontrado ou senha incorreta!");
                } else if (user.type === "admin") { // Admin logou
                    setStatus((prevStatus) =>({
                        ...prevStatus,
                        type: "adminLoggedIn",
                        user
                    }));
                    navigate("/"); // Navega para a rota "/" (home)
                } else if (user.type === "customer") { // Cliente logou
                    setStatus((prevStatus) =>({
                        ...prevStatus,
                        type: "customerLoggedIn",
                        user
                    }));
                    navigate("/"); // Navega para a rota "/" (home)
                }
            })
            .catch(error => { // Nao deu certo fazer login
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
                    type="text" // Coloque seu nome de usuario
                    id="username"
                    name="username"
                    maxLength={25}
                    placeholder="Nome de usuário"
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="password" // Coloque sua senha
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