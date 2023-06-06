import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/login"); // Navega para a rota "/login"
    };

    return  (
        <div className="login-box">
            <div className="user-icon">
                <img src="" alt="Ícone de Perfil de Usuário" />
            </div>
            <h1>Cadastro</h1>
            <h2 className="purple-text spaced-text">Dados pessoais</h2>
            <form action="" method="GET">
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Nome de usuário"
                    //onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Nome completo"
                    //onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    //onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="text"
                    id="cellphone"
                    name="cellphone"
                    placeholder="Telefone Celular"
                    //onChange={(e) => setUserName(e.target.value)}
                />
                <h2 className="purple-text spaced-text">Endereço</h2>
                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Endereço"
                    //onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="text"
                    id="cep"
                    name="cep"
                    placeholder="CEP"
                    //onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="text"
                    id="complement"
                    name="complement"
                    placeholder="Complemento"
                    //onChange={(e) => setUserName(e.target.value)}
                />
                <h2 className="purple-text spaced-text">Senha</h2>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Senha"
                    //onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" onClick={handleSubmit}>Confirmar</button>
            </form>
        </div>
    );
};

export default SignUp;