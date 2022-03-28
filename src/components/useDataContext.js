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
  } = useContext(DataContext);
  return {
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
};
export default useDataContext;
