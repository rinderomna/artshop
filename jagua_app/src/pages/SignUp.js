import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SlUser } from 'react-icons/sl';
import InputMask from 'react-input-mask';

import "../components/LoginBox/FormStyle.css";

const SignUp = () => {
    const navigate = useNavigate();
    const { handleSubmit, register, formState: { errors } } = useForm();
    const [focusedField, setFocusedField] = useState(""); // Estado para acompanhar o campo em foco

    const onSubmit = (data) => {
        console.log(data); // Dados do formulário
        navigate("/login"); // Navega para a rota "/login"
    };

    const handleFocus = (fieldName) => {
        setFocusedField(fieldName); // Define o campo em foco
    };

    const handleBlur = () => {
        setFocusedField(""); // Limpa o campo em foco
    };

    const validateUsername = (value) => {
        return /^[^\d\s].*$/.test(value); // Verifica se o primeiro caractere não é um dígito e não contém espaços
    };

    return (
        <div className="login-box">
            <div className="user-icon">
                <SlUser size={"6em"} color="var(--purple)" />
            </div>
            <h1>Cadastro</h1>
            <h2 className="purple-text spaced-text">Dados pessoais</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Nome de usuário</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Por exemplo: laura123"
                    className={`${errors.username ? "error" : ""} ${focusedField === "username" ? "focus" : ""}`}
                    {...register("username", {
                        required: true,
                        validate: validateUsername // Validação personalizada
                    })}
                    onFocus={() => handleFocus("username")} // Define o campo em foco
                    onBlur={handleBlur} // Limpa o campo em foco
                />
                {errors.username && errors.username.type === "required" && (
                    <span className="error-message">Preencha o campo Nome de usuário</span>
                )}
                {errors.username && errors.username.type === "validate" && (
                    <span className="error-message">O primeiro caractere deve ser uma letra</span>
                )}

                <label htmlFor="fullname">Nome completo</label>
                <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Por exemplo: Laura Scotelari"
                    className={errors.fullname ? "error" : ""}
                    {...register("fullname", { required: true })}
                />
                {errors.fullname && <span className="error-message">Preencha o campo Nome completo</span>}
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Por exemplo: teste@hotmail.com"
                    className={errors.email ? "error" : ""}
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                />
                {errors.email && <span className="error-message">Preencha um endereço de e-mail válido</span>}
                <label htmlFor="cellphone">Telefone Celular</label>
                <InputMask
                    mask="(99) 99999-9999"
                    type="text"
                    id="cellphone"
                    name="cellphone"
                    placeholder="(XX) XXXXX-XXXX"
                    className={errors.cellphone ? "error" : ""}
                    {...register("cellphone", { required: true })}
                />
                {errors.cellphone && <span className="error-message">Preencha o campo Telefone Celular</span>}
                <h2 className="purple-text spaced-text">Endereço</h2>
                <input
                    type="text"
                    id="streetAddress"
                    name="streetAddress"
                    placeholder="Rua dos Exemplos"
                    {...register("streetAddress", { required: true })}
                />
                {errors.address && <span className="error-message">Preencha o campo Rua</span>}
                <input
                    type="text"
                    id="neighborhoodAddress"
                    name="neighborhoodAddress"
                    placeholder=""
                    {...register("neighborhoodAddress", { required: true })}
                />
                {errors.address && <span className="error-message">Preencha o campo Bairro</span>}
                <label htmlFor="cep">CEP</label>
                <InputMask
                    mask="99999-999"
                    type="text"
                    id="cep"
                    name="cep"
                    placeholder="CEP"
                    {...register("cep", { required: true })}
                />
                {errors.cep && <span className="error-message">Preencha o campo CEP</span>}
                <label htmlFor="username">Complemento</label>
                <input
                    type="text"
                    id="complement"
                    name="complement"
                    placeholder="Complemento"
                    {...register("complement")}
                />
                <h2 className="purple-text spaced-text">Senha</h2>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Senha"
                    {...register("password", { required: true })}
                />
                {errors.password && <span className="error-message">Preencha o campo Senha</span>}
                <button type="submit">Confirmar</button>
            </form>
        </div>
    );
};

export default SignUp;