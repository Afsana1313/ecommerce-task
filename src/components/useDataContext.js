import { DataContext } from "../Main";
import { useContext } from "react";

const useDataContext = () => {
  const {
    productData,
    setProductData,
    cartData,
    setCarttData,
    customerData,
    setCustomerData,
    isMiniCartOpen,
    setIsMiniCartOpen
  } = useContext(DataContext);
  return {
    productData,
    setProductData,
    cartData,
    setCarttData,
    customerData,
    setCustomerData,
    isMiniCartOpen,
    setIsMiniCartOpen
  };
};
export default useDataContext;
