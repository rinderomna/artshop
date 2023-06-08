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

export const StatusContext = createContext();

function App() {
  const [status, setStatus] = useState(
    {
      type: "loggedOut",
      user: null
    }
  );

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