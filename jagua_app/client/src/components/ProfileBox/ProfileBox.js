import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SlUser } from "react-icons/sl";
import InputMask from "react-input-mask";
import { StatusContext } from "../../App";
import axios from "axios";

import "../../components/LoginBox/FormStyle.css";

const ProfileBox = () => {
  const navigate = useNavigate();

  const { status, setStatus } = useContext(StatusContext);

  // Adicione esta linha para definir os valores iniciais dos campos
  const defaultValues = {
    username: status.user.username,
    fullname: status.user.fullname,
    email: status.user.email,
    cellphone: status.user.phone,
    password: status.user.password,
    cep: status.user.cep
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues });

  const [focusedField, setFocusedField] = useState(""); // Estado para acompanhar o campo em foco

  const updateUser = async (user) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:3001/users/slug/${user.slug}`,
        user
      );
      console.log("User updated successfully!");
    } catch (error) {
      console.error("Error updating the user:", error.message);
    }
  };

  const onSubmit = (data) => {
    console.log(status.user);

    const newUserData = {
      ...status.user,
      slug: status.user.slug,
      email: data.email,
      fullname: data.fullname,
      password: data.password,
      phone: data.cellphone,
      username: data.username,
      address: `${data.streetAddress} - ${data.neighborhoodAddress} - Nº ${data.numberAddress}`,
      cep: data.cep
    };

    setStatus({
        ...status,
        user: newUserData
    });

    updateUser(newUserData);

    navigate("/"); // Navega para a rota "/"
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

  const validateCellphone = (value) => {
    return value.replace(/[_()\s-]/g, "").length === 11; // Verifica se todos os caracteres da máscara estão preenchidos
  };

  const validateCEP = (value) => {
    return value.replace(/[_\s-]/g, "").length === 8; // Verifica se todos os caracteres da máscara estão preenchidos
  };

  return (
    <div className="login-box">
      <div className="user-icon" aria-label="Ícone de novo usuário">
        <SlUser size={"6em"} color="var(--purple)" />
      </div>
      <h1>Nome do usuário</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="purple-text spaced-text">Dados pessoais</h2>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Por exemplo: laura123"
          maxLength={25} // Limita o campo a 25 caracteres
          className={`${errors.username ? "error" : ""} ${
            focusedField === "username" ? "focus" : ""
          }`}
          {...register("username", {
            required: true,
            validate: validateUsername, // Validação personalizada
          })}
          onFocus={() => handleFocus("username")} // Define o campo em foco
          onBlur={handleBlur} // Limpa o campo em foco
        />
        {errors.username && errors.username.type === "required" && (
          <span className="error-message">
            Preencha o campo Nome de usuário. Não utilize espaços!
          </span>
        )}
        {errors.username && errors.username.type === "validate" && (
          <span className="error-message">
            O primeiro caractere deve ser uma letra
          </span>
        )}

        <label htmlFor="fullname">Nome completo</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          maxLength={100}
          placeholder="Por exemplo: Laura Scotelari"
          className={errors.fullname ? "error" : ""}
          {...register("fullname", {
            required: true,
            pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
          })}
        />
        {errors.fullname && (
          <span className="error-message">
            Preencha o campo Nome completo. Apenas caracteres do alfabeto são
            aceitos!
          </span>
        )}
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          maxLength={60}
          placeholder="Por exemplo: teste@hotmail.com"
          className={errors.email ? "error" : ""}
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <span className="error-message">
            Preencha um endereço de e-mail válido
          </span>
        )}
        <label htmlFor="cellphone">Telefone Celular</label>
        <InputMask
          mask="(99) 99999-9999"
          type="text"
          id="cellphone"
          name="cellphone"
          placeholder="(XX) XXXXX-XXXX"
          className={errors.cellphone ? "error" : ""}
          {...register("cellphone", {
            required: true,
            validate: validateCellphone, // Validação personalizada para a máscara
          })}
        />
        {errors.cellphone && (
          <span className="error-message">
            Preencha o campo Telefone Celular
          </span>
        )}
        <h2 className="purple-text spaced-text">Endereço</h2>
        <label htmlFor="cep">CEP</label>
        <InputMask
          mask="99999-999"
          type="text"
          id="cep"
          name="cep"
          placeholder="CEP"
          {...register("cep", {
            required: true,
            validate: validateCEP, // Validação personalizada para a máscara
          })}
        />
        {errors.cep && (
          <span className="error-message">Preencha o campo CEP</span>
        )}
        <label htmlFor="streetAddress">Rua</label>
        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          maxLength={80}
          placeholder="Rua dos Exemplos"
          {...register("streetAddress", { required: true })}
        />
        {errors.streetAddress && (
          <span className="error-message">Preencha o campo Rua</span>
        )}
        <label htmlFor="neighborhoodAddress">Bairro</label>
        <input
          type="text"
          id="neighborhoodAddress"
          name="neighborhoodAddress"
          maxLength={60}
          placeholder="Bairro dos Exemplos"
          {...register("neighborhoodAddress", { required: true })}
        />
        {errors.neighborhoodAddress && (
          <span className="error-message">Preencha o campo Bairro</span>
        )}
        <label htmlFor="numberAddress">Número</label>
        <input
          type="text"
          id="numberAddress"
          name="numberAddress"
          maxLength={10}
          placeholder="Por exemplo: 135"
          {...register("numberAddress", {
            required: true,
            pattern: /^\d+$/,
          })}
        />
        {errors.numberAddress && (
          <span className="error-message">
            Preencha o campo Número. Apenas dígitos são permitidos!
          </span>
        )}
        <label htmlFor="username">Complemento</label>
        <input
          type="text"
          id="complement"
          name="complement"
          maxLength={100}
          placeholder="Por exemplo: apto 45. Outra opção é colocar um pt. de referência"
          {...register("complement")}
        />
        <h2 className="purple-text spaced-text">Senha</h2>
        <input
          type="password"
          id="password"
          name="password"
          maxLength={30}
          placeholder="Modifique senha de acesso... Digite a mesma para não modificar"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="error-message">Preencha o campo Senha</span>
        )}
        <button type="submit">Confirmar</button>
      </form>
    </div>
  );
};

export default ProfileBox;
