import './LoginBox.css';

import loginIcon from '../../assets/visual_identity/icon/login_user_icon.png';

function LoginBox(props) {
    return (
        <div className="login-box">
            <div className="user-icon">
            <img src={loginIcon} alt="User Icon" />
            </div>
            <p className="purple-text spaced-text">Entre suas informações de login:</p>
            <form action="" method="POST">
                <input type="text" id="username" name="username" placeholder="Nome de usuário" />
                <input type="password" id="password" name="password" placeholder="Senha" />
                <a href="#Cadastro" className="spaced-text">Não possuo conta, preciso me cadastrar</a>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default LoginBox;