import App from "./App";
import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";
import Header from "./components/Header";
import Checkout from "./components/Checkout";

import MiniCartModal from "./components/cart/MiniCartModal";

export const DataContext = createContext(null);

function Main() {
  const [productData, setProductData] = useState([]);
  const [cartData, setCarttData] = useState([]);
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
  const value = {
    productData,
    setProductData,
    cartData,
    setCarttData,
    isMiniCartOpen,
    setIsMiniCartOpen
  };
  return (
    <DataContext.Provider value={value}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/:id" element={<SingleProduct />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
        <MiniCartModal />
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default Main;

/**
 <DataContext.Provider value={value}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/:id" element={<SingleProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
 */
