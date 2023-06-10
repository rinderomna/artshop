import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';

import Navbar from "./components/Navbar/Navbar.js";

import Home from "./pages/Home.js";
import AboutMe from "./pages/AboutMe.js";
import Prints from "./pages/Prints.js";
import Stickers from "./pages/Stickers.js";
import Shirts from "./pages/Shirts.js";
import Login from "./pages/Login.js";

import SignUp from "./pages/SignUp.js";
import EditProfile from './pages/EditProfile.js';

import ProductDetails from "./pages/ProductDetails.js";
import Checkout from './pages/Checkout.js';
import CreateNewProduct from "./pages/CreateNewProduct.js";
import AllOrders from "./pages/AllOrders.js";
import MyOrders from "./pages/MyOrders.js";

import NoPage from "./pages/NoPage.js";

//mudar depois -----------------------------
import printOvelhaNegra from "./assets/visual_identity/prints/print_ovelha.png";
import adesivoArcoIris from "./assets/visual_identity/adesivos/adesivo_arco_iris.png";
import printFundoDoMar from "./assets/visual_identity/prints/print_concha.png";
//-----------------------------------

export const StatusContext = createContext();

function App() {
  const [productCartList, setProductCartList] = useState([]);

  //lista de listas de produtos: quando uma compra é finalizada, a productCartList
  //é adicionada na ordersList 
  //mudar depois ---------------------------apenas p/ teste
  const productOrderList1 = [{
      id: 7,
      image: printOvelhaNegra,
      name: "Print Ovelha Negra",
      price: "8,50",
      qtd: 1,
      size_name: "A3"
  },
  {
      id: 1,
      image: adesivoArcoIris,
      name: "Adesivo Arco-íris",
      price: "2,90",
      qtd: 3,
      size_name: "2cm x 3,5cm"
  },
  {
      id: 9,
      image: printFundoDoMar,
      name: "Print Fundo do Mar",
      price: "8,50",
      qtd: 2,
      size_name: "A5"
  }];

  const productOrderList2 = [{
    id: 10,
    image: printFundoDoMar,
    name: "Print Fundo do Mar",
    price: "8,50",
    qtd: 1,
    size_name: "A5"
  }];

  const [ordersList, setOrdersList] = useState([
    {
      id: 1,
      date: "25/03/23",
      productList: productOrderList1,
      status: "Aguardando Postagem",
      code: null
    },
    {
      id: 2,
      date: "07/02/23",
      productList: productOrderList2,
      status: "Postado para envio",
      code: "AbcdeXy023"
    }
  ]);

  //----------apenas p/ teste--------------------

  const [status, setStatus] = useState(() => {
    const storedStatus = localStorage.getItem("status");
    return storedStatus ? JSON.parse(storedStatus) : {
      type: "loggedOut",
      user: null,
      currProduct: null,
      cartList: productCartList,
      orders: ordersList
    };
  });

  useEffect(() => {
    localStorage.setItem("status", JSON.stringify(status));
  }, [status]);

  //as funcoes de manipulacao tambem devem ser visiveis por todos os 
  //componentes (devem estar descritas no componente pai)
  const handleAddToCart = (productAdded) => {
    const newProductCartList = [...productCartList, {
      id: productAdded.id, //ver depois
      image: productAdded.image,
      name: productAdded.name,
      price: productAdded.price,
      qtd: productAdded.qtd,
      size_name: productAdded.size_name
    }];

    setProductCartList(newProductCartList);
    setStatus((prevStatus) => ({
      ...prevStatus,
      cartList: newProductCartList
    }));
  };

  const handleRemoveItemCart = (rem_product) => {
    //removendo o item do carrinho
    const updatedList = productCartList.filter((product) => product !== rem_product);
    setProductCartList(updatedList);
    setStatus((prevStatus) => ({
      ...prevStatus,
      cartList: updatedList
    }));
  }
  //-----------------------------------

  useEffect(() => {
    console.log(status);
  }, [status]);

  return (
    <StatusContext.Provider
      value={{
        status,
        setStatus
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar handleRemoveItemCart={handleRemoveItemCart} />}>
            <Route index element={<Home />} />
            <Route path="aboutMe" element={<AboutMe />} />
            <Route path="prints" element={<Prints />} />
            <Route path="stickers" element={<Stickers />} />
            <Route path="shirts" element={<Shirts />} />
            <Route path="login" element={<Login />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="productDetails" element={<ProductDetails handleAddToCart={handleAddToCart} />} />
            <Route path="createNewProduct" element={<CreateNewProduct />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="editProfile" element={<EditProfile />} />
            <Route path="allOrders" element={<AllOrders />} />
            <Route path="myOrders" element={<MyOrders />} />

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StatusContext.Provider>
  );
}

export default App;
