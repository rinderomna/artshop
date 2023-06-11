import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";

import { StatusContext } from "../../App.js";

import "../../components/LoginBox/FormStyle.css";
import Cart from "../Cart/Cart";

const CheckoutBox = () => {
  const { status, setStatus } = useContext(StatusContext);
  const navigate = useNavigate();


  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  

  const onSubmit = (data) => {
    console.log(data);

    //gerando novo pedido
    if (status.cartList !== null) {
      
      const newBuyerInfo = {
        id: parseInt(Math.random() * 200),
        name: data.fullname,
        cpf: data.cpf,
        email: status.user,
        cellphone: data.cellphone,
        user_name: status.user.userName
      }

      const newBuyerAddress = {
        id: parseInt(Math.random() * 200),
        street: data.streetAddress,
        neighborhood: data.neighborhoodAddress,
        complement: data.complement,
        number: data.numberAddress,
        cep: data.cep
      }

      const newOrder = {
        id: parseInt(Math.random() * 200),
        date: new Date().toLocaleString(),
        productList: status.cartList,
        status: "Aguardando Postagem",
        buyer: newBuyerInfo,
        address: newBuyerAddress,
        shipping_company: null,
        code: null
      };


      //fazendo o update da quantidade de itens em estoque
      const updatedProducts = status.products.map((product) => {
        const matchingCartProduct = status.cartList.find((cartProduct) => cartProduct.name === product.name);
        if (matchingCartProduct) {
          return {
            ...product,
            stock: product.stock - matchingCartProduct.qtd,
            sales: product.sales + matchingCartProduct.qtd 
          };
        }
        return product;
      });
      setStatus((prevStatus) => ({
        ...prevStatus,
        products: updatedProducts
      }));


      setStatus((prevStatus) => {
        if (prevStatus.orders) {
          return {
            ...prevStatus,
            orders: [...prevStatus.orders, newOrder],
            cartList: []
          };
        } else {
          return {
            ...prevStatus,
            orders: [newOrder],
            cartList: []
          };
        }
      });
    }

    console.log("Compra realizada com sucesso!");

    if(status.orders != null){
      console.log("CheckoutBox.js -> Status Orders: " + status.orders);
    }
    navigate("/myOrders");
    
  };

  const validateCPF = (value) => {
    return value.replace(/[_.\s-]/g, "").length === 11; // Verifica se todos os caracteres da máscara estão preenchidos
  };

  const validateCellphone = (value) => {
    return value.replace(/[_()\s-]/g, "").length === 11; // Verifica se todos os caracteres da máscara estão preenchidos
  };

  const validateCEP = (value) => {
    return value.replace(/[_\s-]/g, "").length === 8; // Verifica se todos os caracteres da máscara estão preenchidos
  };

  const validateExpirationDate = (value) => {
    const pattern = /^(0[1-9]|1[0-2])\/(\d{2})$/; // Expressão regular para validar o formato MM/AA
    return pattern.test(value); // Verifica se o valor corresponde ao formato MM/AA
  };  

  const validateSecurityCode = (value) => {
    return value.replace(/[_]/g, "").length === 3; // Verifica se todos os caracteres da máscara estão preenchidos
  };  

  const validateCardNumber = (value) => {
    return value.replace(/[_\s]/g, "").length === 16; // Verifica se todos os caracteres da máscara estão preenchidos
  };  

  return (
    <div className="login-box">
      <Cart flagBuyBtn={false}/>
      <h2 className="purple-text spaced-text">Dados pessoais</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <label htmlFor="cpf">CPF</label>
        <InputMask
          mask="999.999.999-99"
          type="text"
          id="cpf"
          name="cpf"
          placeholder="XXX.XXX.XXX-XX"
          className={errors.cpf ? "error" : ""}
          {...register("cpf", { 
            required: true,
            validate: validateCPF, // Validação personalizada para a máscara 
          })}
        />
        {errors.cpf && (
          <span className="error-message">Preencha completamente o campo CPF</span>
        )}

        <label htmlFor="phone">Telefone Celular</label>
        <InputMask
          mask="(99) 99999-9999"
          type="text"
          id="cellphone"
          name="cellphone"
          placeholder="(XX) XXXXX-XXXX"
          className={errors.cellphone ? "error" : ""}
          {...register("cellphone", { 
            required: true,
            validate: validateCellphone
          })}
        />
        {errors.cellphone && (
          <span className="error-message">Preencha completamente o campo Telefone</span>
        )}

        <h2 className="purple-text spaced-text">Endereço para entrega</h2>
        <label htmlFor="cep">CEP</label>
        <InputMask
          mask="99999-999"
          type="text"
          id="cep"
          name="cep"
          placeholder="XXXXX-XXX"
          {...register("cep", { 
            required: true,
            validate: validateCEP
          })}
        />
        {errors.cep && (
          <span className="error-message">Preencha completamente o campo CEP</span>
        )}
        <label htmlFor="streetAddress">Rua</label>
        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          maxLength={80}
          placeholder="Preencha com o nome da rua de entrega do pedido"
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
          placeholder="Preencha com o bairro para entrega do pedido"
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
          placeholder="Preencha com o número da casa para entrega; por exemplo: 135"
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
        <label htmlForcard="complement">Complemento</label>
        <input
          type="text"
          id="complement"
          name="complement"
          maxLength={100}
          placeholder="O número do seu apto ou uma referência geográfica para o endereço"
          {...register("complement")}
        />

        <h2 className="purple-text spaced-text">Pagamento</h2>

        <label htmlFor="paymentMethod">Forma de pagamento</label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          {...register("paymentMethod", { 
            required: true,
            validate: (value) => value !== "", // Verifica se o valor é diferente do valor padrão 
          })}
        >
          <option value="" defaultValue>
            Escolha uma forma de pagamento...
          </option>
          <option value="creditCard">
            Cartão de Crédito
          </option>
          <option value="debitCard">
            Cartão de Débito
          </option>
        </select>

        <label htmlFor="cardNumber">Número do Cartão</label>
        <InputMask
          mask="9999 9999 9999 9999"
          type="text"
          id="cardNumber"
          name="cardNumber"
          placeholder="XXXX XXXX XXXX XXXX"
          {...register("cardNumber", { 
            required: true,
            validate: validateCardNumber
          })}
        />
        {errors.cardNumber && (
          <span className="error-message">
            Preencha completamente o campo Número do Cartão
          </span>
        )}

        <label htmlFor="securityCode">Código de Segurança</label>
        <InputMask
          mask="999"
          type="text"
          id="securityCode"
          name="securityCode"
          placeholder="Preencha com o número da parte de trás de seu cartão. Ex.: 999"
          {...register("securityCode", { 
            required: true,
            validate: validateSecurityCode
          })}
        />
        {errors.securityCode && (
          <span className="error-message">
            Preencha completamente o campo Código de Segurança
          </span>
        )}

        <label htmlFor="expirationDate">Data de Vencimento do Cartão</label>
        <InputMask
          mask="99/99"
          type="text"
          id="expirationDate"
          name="expirationDate"
          placeholder="MM/AA"
          {...register("expirationDate", { 
            required: true,
            validate: validateExpirationDate
          })}
        />
        {errors.expirationDate && (
          <span className="error-message">
            Preencha completamente o campo Data de Vencimento
          </span>
        )}

        <button type="submit" >Finalizar Compra</button>
      </form>

    </div>
  );
};

export default CheckoutBox;
