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
  const [customerData, setCustomerData] = useState([]);
  const [resultData, setResultData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filterByRating, setFilterByRating] = useState(1);
  const [filterByCategories, setFilterByCategories] = useState("all");

  const value = {
    productData,
    setProductData,
    cartData,
    setCarttData,
    customerData,
    setCustomerData,
    resultData,
    setResultData,
    categories,
    setCategories,
    searchText,
    setSearchText,
    filterByRating,
    setFilterByRating,
    filterByCategories,
    setFilterByCategories,
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
