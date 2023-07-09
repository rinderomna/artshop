// Para o roteamento e a navegacao entre paginas...
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Hooks de contexto, de estado e de efeito colateral para manipulacao das paginas...
import { createContext, useState, useEffect } from 'react';

// -- Importando paginas/pages e componentes para controle de navegacao pelo site --

// A barra de navegacao sempre esta presente no site. Deve-se renderizar o que estiver
// abaixo dela (com o <Outlet />).
import Navbar from "./components/Navbar/Navbar.js";

// Depois isto estara em um JSON para simularmos dados armazenados no BD...
// Colocando os dados aqui no momento para verificar verossimilhanca em relacao aos mockups
import printOvelhaNegra from "./assets/visual_identity/prints/print_ovelha.png";
import printBesouro from "./assets/visual_identity/prints/print_besouro.png";
import printFundoDoMar from "./assets/visual_identity/prints/print_concha.png";
import printEspelho from "./assets/visual_identity/prints/print_celular.png";
import printAbducao from "./assets/visual_identity/prints/print_irmas.png";

import adesivoArcoIris from "./assets/visual_identity/adesivos/adesivo_arco_iris.png";
import adesivoRa from "./assets/visual_identity/adesivos/adesivo_sapo.png";
import adesivoVasoAzul from "./assets/visual_identity/adesivos/adesivo_planta.png";
import adesivoCoracao from "./assets/visual_identity/adesivos/adesivo_cabelo_coracao.png";
import adesivoBesouroPreto from "./assets/visual_identity/adesivos/adesivo_besouro_preto.png";
import adesivoBesouro from "./assets/visual_identity/adesivos/adesivo_besouro.png";

import camisetaMedusa from "./assets/visual_identity/camisetas/camiseta_medusa.png";
import camisetaCrowd from "./assets/visual_identity/camisetas/camiseta_crowd.png";
import camisetaHorrorVacui from "./assets/visual_identity/camisetas/camiseta_horror_vacui.png";




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
import ProductOrders from "./pages/ProductOrders.js";

import NoPage from "./pages/NoPage.js";


// Criando contexto que mantem dados de usuario e repassa para componentes que necessitem dessa
// informacao.
export const StatusContext = createContext();

function App() {
  const printsSizes = [
        {
            name: "A5",
            specific_size: "27cm x 10cm"
        },
        {
            name: "A4",
            specific_size: "27cm x 20cm"
        },
        {
            name: "A3",
            specific_size: "27cm x 30cm"
        }
    ]

    const stickerSizes = [
        {
            name: "Tam. Único",
            specific_size: "2cm x 3,5cm"
        },

    ]

    const shirtSizes = [
        {
            name: "P",
            specific_size: "Pequeno"
        },
        {
            name: "M",
            specific_size: "Médio"
        },
        {
            name: "G",
            specific_size: "Grande"
        }
    ]

    const productList = [
        {
            id: 7,
            image: printOvelhaNegra,
            name: "Print Ovelha Negra",
            price: "8.50",
            description: "Impressão em papel couchê fosco com gramatura 300.",
            type: "print",
            sizes: printsSizes,
            stock: 6,
            sales: 0
        },
        {
            id: 8,
            image: printBesouro,
            name: "Print Besouro",
            price: "8.50",
            description: "Impressão em papel couchê fosco com gramatura 300.",
            type: "print",
            sizes: printsSizes,
            stock: 6,
            sales: 0
        },
        {
            id: 9,
            image: printFundoDoMar,
            name: "Print Fundo do Mar",
            price: "8.50",
            description: "Impressão em papel couchê fosco com gramatura 300.",
            type: "print",
            sizes: printsSizes,
            stock: 6,
            sales: 0
        },
        {
            id: 10,
            image: printEspelho,
            name: "Print Espelho",
            price: "8.50",
            description: "Impressão em papel couchê fosco com gramatura 300.",
            type: "print",
            sizes: printsSizes,
            stock: 6,
            sales: 0
        },
        {
            id: 11,
            image: printAbducao,
            name: "Print Abdução",
            price: "8.50",
            description: "Impressão em papel couchê fosco com gramatura 300.",
            type: "print",
            sizes: printsSizes,
            stock: 6,
            sales: 0
        },
        {
            id: 1,
            image: adesivoArcoIris,
            name: "Adesivo Arco-íris",
            price: "2.90",
            description: "Adesivo de vinil à prova-d'água.",
            type: "sticker",
            sizes: stickerSizes,
            stock: 6,
            sales: 0
        },
        {
            id: 2,
            image: adesivoRa,
            name: "Adesivo Rã",
            price: "2.90",
            description: "Adesivo de vinil à prova-d'água.",
            type: "sticker",
            sizes: stickerSizes,
            stock: 5,
            sales: 0
        },
        {
            id: 3,
            image: adesivoVasoAzul,
            name: "Adesivo Vaso Azul",
            price: "2.90",
            description: "Adesivo de vinil à prova-d'água.",
            type: "sticker",
            sizes: stickerSizes,
            stock: 4,
            sales: 0
        },
        {
            id: 4,
            image: adesivoCoracao,
            name: "Adesivo Coração",
            price: "2.90",
            description: "Adesivo de vinil à prova-d'água.",
            type: "sticker",
            sizes: stickerSizes,
            stock: 2,
            sales: 0
        },
        {
            id: 5,
            image: adesivoBesouroPreto,
            name: "Adesivo Besouro Preto",
            price: "2.90",
            description: "Adesivo de vinil à prova-d'água.",
            type: "sticker",
            sizes: stickerSizes,
            stock: 4,
            sales: 0
        },
        {
            id: 6,
            image: adesivoBesouro,
            name: "Adesivo Besouro",
            price: "2.90",
            description: "Adesivo de vinil à prova-d'água.",
            type: "sticker",
            sizes: stickerSizes,
            stock: 5,
            sales: 0
        },
        {
            id: 12,
            image: camisetaMedusa,
            name: "Camiseta Medusa",
            price: "68.00",
            description: "Camiseta 100% algodão estampada usando silk screen.",
            type: "shirt",
            sizes:shirtSizes,
            stock: 15,
            sales: 0
        },
        {
            id: 13,
            image: camisetaCrowd,
            name: "Camiseta Crowd",
            price: "68.00",
            description: "Camiseta 100% algodão estampada em silk screen.",
            type: "shirt",
            sizes:shirtSizes,
            stock: 5,
            sales: 0
        },
        {
            id: 14,
            image: camisetaHorrorVacui,
            name: "Camiseta Horror Vacui",
            price: "68.00",
            description: "Camiseta composta de 70% poliéster e 30% algodão. Estampada utilizando sublimação.",
            type: "shirt",
            sizes:shirtSizes,
            stock: 12,
            sales: 0
        },
    ];

  

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
      products: [],
      flagNewProduct: false,
      currProduct: null,
      currOrder: null,
      cartList: [],
      orders: []
    };

  });

  useEffect(() => {
    localStorage.setItem("status", JSON.stringify(status));
  }, [status]);

  useEffect(() =>{
    //atualizando o catalogo com os produtos salvos o banco de dados
    fetch('http://localhost:3001/products')
        .then(response => response.json())
        .then(data => {
            console.log(data);

            setStatus((prevStatus) => ({
                ...prevStatus,
                //flag para sinalizar que um novo produto foi adicionado e, portanto,
                //sera necessario fazer um get do banco de dados (atualizar o catalogo)
                products: data
            }));
        })
        .catch(error => {
            console.log('Erro na requisição:', error);
        });


},[status.flagNewProduct]);

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
            <Route path="productOrders" element={<ProductOrders />} />

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StatusContext.Provider>
  );
}

export default App;