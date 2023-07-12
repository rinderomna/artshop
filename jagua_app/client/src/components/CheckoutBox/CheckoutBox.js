import React, { useContext } from "react"; // Contexto de usuario
import { useForm } from "react-hook-form"; // Administrar formulario
import { useNavigate } from "react-router-dom"; // Checar posicao dentro do site
import InputMask from "react-input-mask"; // Mascaras de validacao

import { StatusContext } from "../../App.js"; // Estado & propriedades do usuario dentro do site

import "../../components/LoginBox/FormStyle.css"; // Estilo
import Cart from "../Cart/Cart"; // A finalizacao de compra sabe o que tem no carrinho

// Administra finalizacao de compra por cliente
const CheckoutBox = () => {
  // Infos de usuario dentro do site
  const { status, setStatus } = useContext(StatusContext);
  const navigate = useNavigate();

  // Lidar com submissao, possiveis erros e registro de dados em formulario
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  
  // Decide o que fazer ao submeter formulario
  const onSubmit = (data) => {

    // Gerando novo pedido
    if (status.cartList !== null) {
      // Capturando infos de usuario
      const newBuyerInfo = {
        id: parseInt(Math.random() * 200),
        name: data.fullname,
        cpf: data.cpf,
        email: status.user,
        cellphone: data.cellphone,
        user_name: status.user.username
      }

      const newBuyerAddress = {
        id: parseInt(Math.random() * 200),
        street: data.streetAddress,
        neighborhood: data.neighborhoodAddress,
        complement: data.complement,
        number: data.numberAddress,
        cep: data.cep
      }

      // Gerando um id unico para as orders
      let newOrder_id;
      const ordersIds = status.orders.map(order => order.id);

      // limite maximo de Ids = 500
      do {
        newOrder_id = parseInt(Math.random() * 500);
      } while (ordersIds.includes(newOrder_id));

      // Infos de pedido feito
      const newOrder = {
        id: newOrder_id,
        date: new Date().toLocaleString(),
        productList: status.cartList,
        status: "Aguardando Postagem",
        buyer: newBuyerInfo,
        address: newBuyerAddress,
        shipping_company: null,
        code: null
      };


      // Fazendo o update da quantidade de itens em estoque para controle pelo admin
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

    if(status.orders != null){
      console.log("CheckoutBox.js -> Status Orders: " + status.orders);
    }
    navigate("/productOrders");
    
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
          type="text" // Nome completo para comprador
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
        {errors.fullname && ( // Lidar c/ erros no campo
          <span className="error-message"> 
            Preencha o campo Nome completo. Apenas caracteres do alfabeto são
            aceitos! 
          </span>
        )}

        <label htmlFor="cpf">CPF</label>
        <InputMask
          mask="999.999.999-99" // CPF de comprador - mascara etc
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
        {errors.cpf && ( // Lidar c/ possiveis erros no campo CPF, que eh obrigatorio
          <span className="error-message">Preencha completamente o campo CPF</span>
        )}

        <label htmlFor="phone">Telefone Celular</label>
        <InputMask
          mask="(99) 99999-9999" // Mascara de telefone
          type="text"
          id="cellphone"
          name="cellphone"
          placeholder="(XX) XXXXX-XXXX"
          className={errors.cellphone ? "error" : ""}
          {...register("cellphone", { // Guardar dados do campo telefone, campo obrigatorio
            required: true,
            validate: validateCellphone
          })}
        />
        {errors.cellphone && ( // Lidar c/ possiveis erros, impedindo submissao
          <span className="error-message">Preencha completamente o campo Telefone</span>
        )}

        <h2 className="purple-text spaced-text">Endereço para entrega</h2>
        <label htmlFor="cep">CEP</label>
        <InputMask
          mask="99999-999" // Mascara de CEP para usuario
          type="text"
          id="cep"
          name="cep"
          placeholder="XXXXX-XXX"
          {...register("cep", { // Campo obrigatorio - deve ser validado
            required: true,
            validate: validateCEP
          })}
        />
        {errors.cep && ( // Lidar c/ possiveis erros no campo
          <span className="error-message">Preencha completamente o campo CEP</span>
        )}
        <label htmlFor="streetAddress">Rua</label>
        <input
          type="text" 
          id="streetAddress"
          name="streetAddress"
          maxLength={80} // Endereco tem tamanho maximo
          placeholder="Preencha com o nome da rua de entrega do pedido"
          {...register("streetAddress", { required: true })} // Armazene os dados do campo
        />
        {errors.streetAddress && ( // Lide c/ erros 
          <span className="error-message">Preencha o campo Rua</span>
        )}
        <label htmlFor="neighborhoodAddress">Bairro</label>
        <input
          type="text" // Bairro de usuario comprador
          id="neighborhoodAddress"
          name="neighborhoodAddress"
          maxLength={60}
          placeholder="Preencha com o bairro para entrega do pedido"
          {...register("neighborhoodAddress", { required: true })} // Armazene essas infos obrigatorias
        />
        {errors.neighborhoodAddress && ( // Lide c/ erros
          <span className="error-message">Preencha o campo Bairro</span>
        )}
        <label htmlFor="numberAddress">Número</label>
        <input
          type="text" // Nro da casa do cliente
          id="numberAddress"
          name="numberAddress"
          maxLength={10}
          placeholder="Preencha com o número da casa para entrega; por exemplo: 135"
          {...register("numberAddress", { // Armazene os dados
            required: true,
            pattern: /^\d+$/, // Regex para aceitar apenas digitos
          })}
        />
        {errors.numberAddress && ( // Lide c/ erros e mostre msg semantica ao cliente
          <span className="error-message">
            Preencha o campo Número. Apenas dígitos são permitidos!
          </span>
        )}
        <label htmlForcard="complement">Complemento</label>
        <input
          type="text" // Complemento se cliente desejar. Nao obrigatorio, mas registre o que estiver no campo
          id="complement"
          name="complement"
          maxLength={100}
          placeholder="O número do seu apto ou uma referência geográfica para o endereço"
          {...register("complement")}
        />

        <h2 className="purple-text spaced-text">Pagamento</h2>

        <label htmlFor="paymentMethod">Forma de pagamento</label>
        <select
          id="paymentMethod" // Escolher opcao de pagamento - credito ou debito
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
          mask="9999 9999 9999 9999" // Mascara de numero de cartao
          type="text"
          id="cardNumber"
          name="cardNumber"
          placeholder="XXXX XXXX XXXX XXXX"
          {...register("cardNumber", { // Armazene estes dados
            required: true,
            validate: validateCardNumber
          })}
        />
        {errors.cardNumber && ( // Lide c/ erros de preenchimento de campo
          <span className="error-message">
            Preencha completamente o campo Número do Cartão
          </span>
        )}

        <label htmlFor="securityCode">Código de Segurança</label>
        <InputMask
          mask="999" // Codigo de seguranca do cartao
          type="text"
          id="securityCode"
          name="securityCode"
          placeholder="Preencha com o número da parte de trás de seu cartão. Ex.: 999"
          {...register("securityCode", { 
            required: true,
            validate: validateSecurityCode
          })}
        />
        {errors.securityCode && ( // Lide c/ erros
          <span className="error-message">
            Preencha completamente o campo Código de Segurança
          </span>
        )}

        <label htmlFor="expirationDate">Data de Vencimento do Cartão</label>
        <InputMask
          mask="99/99" // Vencimento do cartao
          type="text"
          id="expirationDate"
          name="expirationDate"
          placeholder="MM/AA"
          {...register("expirationDate", { // Campo obrigatorio e deve ser validado
            required: true,
            validate: validateExpirationDate
          })}
        />
        {errors.expirationDate && ( // Lide c/ erros
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
