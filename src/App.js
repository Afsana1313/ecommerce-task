import "./style/App.scss";
import ProductContainer from "./components/ProductContainer";
import FilterSection from "./components/FilterSection";
import { useEffect, createRef } from "react";
import useDataContext from "./components/useDataContext";
import FloatingCart from "./components/cart/FloatingCart";
function App() {
  const { setProductData, setCustomerData } = useDataContext();
  const getData = () => {
    fetch("./assets/products.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProductData(data);
      });
  };
  const getCustomersData = () => {
    fetch("./assets/customers.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setCustomerData(data);
      });
  };
  useEffect(() => {
    getData();
    getCustomersData();
  }, []);

  return (
    <div className="whole-container">
      <div className="center-container">
        <FilterSection />
        <ProductContainer />
      </div>
    </div>
  );
}

export default App;
