import React, { useState, useEffect, useContext } from "react";
import ProductImage from "../components/ProductImage/ProductImage";
import ProductInfo from "../components/ProductInfo/ProductInfo";

import "./ProductDetails.css";
import NumProducts from "../components/NumProducts/NumProducts";
import AddToCartButton from "../components/AddToCartButton/AddToCartButton";
import SideBar from "../components/SideBar/SideBar";
import { StatusContext } from "../App.js";
import axios from "axios";

import { Link } from "react-router-dom";

const ProductDetails = () => {
  const [newProductAdded, setNewProductAdded] = useState({
    id: 0,
    image: null,
    name: "",
    price: 0,
    qtd: 0,
    size_name: undefined,
  });
  const [numProducts, setNumProducts] = useState(1);
  const [size, setSize] = useState("");

  const [type, setType] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0); // Rolando para o topo da página
  }, []);

  const handleNumChange = (value) => {
    setNumProducts(value);
  };

  const handleSizeClick = (chosen_size) => {
    setSize(chosen_size);
  };

  const { status, setStatus } = useContext(StatusContext);

  //componentes (devem estar descritas no componente pai)
  const handleAddToCart = (productAdded) => {
    if (productAdded.qtd <= status.currProduct.stock) {
      const cartList = status.cartList ? status.cartList : [];
      const newCartList = [
        ...cartList,
        {
          id: productAdded.id, //ver depois
          image: productAdded.image,
          name: productAdded.name,
          price: productAdded.price,
          qtd: productAdded.qtd,
          size_name: productAdded.size_name,
        },
      ];

      setStatus((prevStatus) => ({
        ...prevStatus,
        cartList: newCartList,
      }));
    } else {
      alert("Estoque insuficiente!");
    }
  };

  const deleteProduct = async () => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:3001/products/slug/${status.currProduct.slug}`
      );
      console.log("Product deleted successfully!");

      setTimeout(() => {
        setStatus((prevStatus) => ({
          ...prevStatus,
          //flag para sinalizar que um novo produto foi adicionado e, portanto,
          //sera necessario fazer um get do banco de dados (atualizar o catalogo)
          flagNewProduct: !status.flagNewProduct,
        }));
      }, 500);
    } catch (error) {
      console.error("Error deleting the product:", error.message);
    }
  };

  //status para pegar as informacoes do porduto que o usuario quer
  //visualizar com mais detalhe -> é armazenado no status quando o BuyButton
  //é clicado
  useEffect(() => {
    const productAdded = {
      id: parseInt(Math.random() * 200),
      image: status.currProduct.image,
      name: status.currProduct.name,
      price: status.currProduct.price,
      qtd: numProducts,
      size_name: size.name,
    };
    setNewProductAdded(productAdded);

    // This effect can also depend on status.currProduct.price if needed
  }, [size, numProducts, status.currProduct]);

  //define o que acontece quando o usuario clica no botao "adicionar ao carrinho"
  const handleButtonClick = () => {
    console.log(newProductAdded.size_name);
    if (newProductAdded.size_name === undefined) {
      alert("Selecione um tamanho de produto!");
    } else {
      handleAddToCart(newProductAdded);
      //mostrar carrinho
      setType("cart");
    }
  };

  return (
    <section className="product-container">
      <div className="img-container">
        <ProductImage image={status.currProduct.image} />
      </div>

      <div className="info-container">
        <div className="product-info-container">
          <ProductInfo
            product={status.currProduct}
            handleSizeClick={handleSizeClick}
          />

          <div className="num-and-cart-container">
            <div className="adjuster-container">
              <NumProducts handleNumChange={handleNumChange} />
            </div>
            <div className="add-to-cart-container">
              {status.type === "adminLoggedIn" ? (
                <span className="button-container">
                  <Link to="/editProduct" className="edit-product-button">
                    Editar Produto
                  </Link>

                  <Link to="/" className="exit-button" onClick={deleteProduct}>
                    {" "}
                    Excluir
                  </Link>
                </span>
              ) : status.currProduct.stock > 0 ? (
                <AddToCartButton handleClick={handleButtonClick} />
              ) : (
                <p className="out-of-stock-message">
                  Item indisponível no estoque
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <SideBar sideBarType={type} setType={setType} />
    </section>
  );
};

export default ProductDetails;
