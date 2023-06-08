import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { GrCreditCard } from "react-icons/gr";
import InputMask from "react-input-mask";

import "../../components/LoginBox/FormStyle.css";

const CheckoutBox = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [focusedField, setFocusedField] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    navigate("/checkout");
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField("");
  };

  return (
    <div className="login-box">
      <h1>Seu Carrinho</h1>
      <hr />
      <h2 className="purple-text spaced-text">Dados pessoais</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fullname">Nome Completo</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          className={`${errors.fullname ? "error" : ""} ${
            focusedField === "fullname" ? "focus" : ""
          }`}
          {...register("fullname", { required: true })}
          onFocus={() => handleFocus("fullname")}
          onBlur={handleBlur}
        />
        {errors.fullname && (
          <span className="error-message">Preencha o campo Nome Completo</span>
        )}

        <label htmlFor="cpf">CPF</label>
        <InputMask
          mask="999.999.999-99"
          type="text"
          id="cpf"
          name="cpf"
          className={errors.cpf ? "error" : ""}
          {...register("cpf", { required: true })}
        />
        {errors.cpf && (
          <span className="error-message">Preencha o campo CPF</span>
        )}

        <label htmlFor="phone">Telefone</label>
        <InputMask
          mask="(99) 99999-9999"
          type="text"
          id="phone"
          name="phone"
          className={errors.phone ? "error" : ""}
          {...register("phone", { required: true })}
        />
        {errors.phone && (
          <span className="error-message">Preencha o campo Telefone</span>
        )}

        <h2 className="purple-text spaced-text">Endereço</h2>

        <label htmlFor="address">Endereço</label>
        <input
          type="text"
          id="address"
          name="address"
          {...register("address", { required: true })}
        />
        {errors.address && (
          <span className="error-message">Preencha o campo Endereço</span>
        )}

        <label htmlFor="cep">CEP</label>
        <InputMask
          mask="99999-999"
          type="text"
          id="cep"
          name="cep"
          {...register("cep", { required: true })}
        />
        {errors.cep && (
          <span className="error-message">Preencha o campo CEP</span>
        )}

        <label htmlFor="complement">Complemento</label>
        <input
          type="text"
          id="complement"
          name="complement"
          {...register("complement")}
        />

        <h2 className="purple-text spaced-text">Pagamento</h2>

        <select
          id="paymentMethod"
          name="paymentMethod"
          {...register("paymentMethod", { required: true })}
        >
          <option value="creditCard">
            <GrCreditCard /> Cartão de Crédito
          </option>
          <option value="debitCard">
            <GrCreditCard /> Cartão de Débito
          </option>
        </select>

        <label htmlFor="cardNumber">Número do Cartão</label>
        <InputMask
          mask="9999 9999 9999 9999"
          type="text"
          id="cardNumber"
          name="cardNumber"
          {...register("cardNumber", { required: true })}
        />
        {errors.cardNumber && (
          <span className="error-message">
            Preencha o campo Número do Cartão
          </span>
        )}

        <label htmlFor="securityCode">Código de Segurança</label>
        <InputMask
          mask="999"
          type="text"
          id="securityCode"
          name="securityCode"
          {...register("securityCode", { required: true })}
        />
        {errors.securityCode && (
          <span className="error-message">
            Preencha o campo Código de Segurança
          </span>
        )}

        <label htmlFor="expirationDate">Data de Vencimento do Cartão</label>
        <input
          type="text"
          id="expirationDate"
          name="expirationDate"
          placeholder="MM/AA"
          {...register("expirationDate", { required: true })}
        />
        {errors.expirationDate && (
          <span className="error-message">
            Preencha o campo Data de Vencimento
          </span>
        )}

        <button type="submit">Finalizar Compra</button>
      </form>
    </div>
  );
};

export default CheckoutBox;
