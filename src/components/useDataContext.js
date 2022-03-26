import { DataContext } from "../Main";
import { useContext } from "react";

const useDataContext = () => {
  const {
    productData,
    setProductData,
    cartData,
    setCarttData,
    isMiniCartOpen,
    setIsMiniCartOpen
  } = useContext(DataContext);
  return {
    productData,
    setProductData,
    cartData,
    setCarttData,
    isMiniCartOpen,
    setIsMiniCartOpen
  };
};
export default useDataContext;
