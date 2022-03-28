import "./style/App.scss";
import ProductContainer from "./components/ProductContainer";
import FilterSection from "./components/FilterSection";
import { useEffect } from "react";
import useDataContext from "./components/useDataContext";
function App() {
  const { setProductData, setCustomerData, setCategories } = useDataContext();
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
  const getCategoriesData = () => {
    fetch("./assets/categories.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories);
      });
  };
  useEffect(() => {
    getData();
    getCustomersData();
    getCategoriesData();
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
