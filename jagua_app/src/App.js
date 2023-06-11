// Para o roteamento e a navegacao entre paginas...
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Hooks de contexto, de estado e de efeito colateral para manipulacao das paginas...
import { createContext, useState, useEffect } from 'react';

// -- Importando paginas/pages e componentes para controle de navegacao pelo site --

// A barra de navegacao sempre esta presente no site. Deve-se renderizar o que estiver
// abaixo dela (com o <Outlet />).
import Navbar from "./components/Navbar/Navbar.js";

// Paginas do site
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
import EditProduct from "./pages/EditProduct.js";
import AllOrders from "./pages/AllOrders.js";
import MyOrders from "./pages/MyOrders.js";

import NoPage from "./pages/NoPage.js";

// Mudar depois -----------------------------
import printOvelhaNegra from "./assets/visual_identity/prints/print_ovelha.png";
import adesivoArcoIris from "./assets/visual_identity/adesivos/adesivo_arco_iris.png";
import printFundoDoMar from "./assets/visual_identity/prints/print_concha.png";
//-------------------------------------------

// Criando contexto que mantem dados de usuario e repassa para componentes que necessitem dessa
// informacao.
export const StatusContext = createContext();

function App() {
  // Criando controle de estado para o carrinho do cliente
  const [productCartList, setProductCartList] = useState([]);

  // Lista de listas de produtos: quando uma compra é finalizada, a productCartList
  // é adicionada na ordersList.

  // Mudar depois --------------------------- apenas p/ teste
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

  //---------- Finalizando código apenas p/ teste --------------------


  // LOGICA DE STATUS DO USUARIO -- IMPORTANTE!!!
  /*
    Type: controla se usuario esta deslogado, transiente ou logado. Se logado, se eh um cliente logado ou um admin logado;
    User: cada user tem um tipo (admin ou cliente), um nome de usuario e uma senha. Isso eh guardado em db.json.
    currProduct, cartList e orders: logica de carrinho e de produtos que cliente compra.
  */
  const [status, setStatus] = useState(() => {
    // Fornece 'memoria' ao site - permite atualizar pagina e ter dados mantidos ate clicar em sair.
    const storedStatus = localStorage.getItem("status"); 

    return storedStatus ? JSON.parse(storedStatus) : {
      type: "loggedOut",
      user: null,
      currProduct: null,
      currOrder: null,
      cartList: productCartList,
      orders: ordersList
    };

  });

  if(status.orders !== null){
    console.log("App.js -> Status: " + status.orders);
  }

  useEffect(() => {
    localStorage.setItem("status", JSON.stringify(status));
  }, [status]);


  //---------- Fim da logica de carrinho --------------

  // Visualizando status do usuario
  useEffect(() => {
    console.log(status);
  }, [status]);

  // Controle da aplicacao em geral. Aqui, tem os roteamentos e os contextos necessarios para o bom funcionamento
  // da navegacao pelo site.
  return (
    <StatusContext.Provider
      value={{
        status,
        setStatus
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="aboutMe" element={<AboutMe />} />
            <Route path="prints" element={<Prints />} />
            <Route path="stickers" element={<Stickers />} />
            <Route path="shirts" element={<Shirts />} />
            <Route path="login" element={<Login />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="productDetails" element={<ProductDetails />} />
            <Route path="createNewProduct" element={<CreateNewProduct />} />
            <Route path="editProduct" element={<EditProduct />} />
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