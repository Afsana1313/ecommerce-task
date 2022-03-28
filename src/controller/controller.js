import ProductCard from "../components/ProductCard";
import { listOfMonths } from "../static/data";
// Cart Related Controller functions

export const getSingleData = (productData, id) => {
  return productData?.find((i) => parseInt(id) === i.id);
};
export const getTotalValue = (cartData) => {
  return cartData?.reduce((sum, item) => sum + item.price * item.quantity, 0);
};
export const deleteItem = (cartData, id) => {
  return cartData?.filter((i) => i.id !== id);
};

export const changeQuantity = (cartData, id, value) => {
  return cartData?.map((i) => {
    if (i.id === id) {
      i.quantity = value.value;
    }
    return i;
  });
};

export const deleteWholeCart = (cartData) => {
  return (cartData = []);
};

export const calculateRating = (singleData) => {
  const rating =
    singleData.reviews.reduce((sum, item) => sum + item.rating, 0) /
    singleData.reviews.length;

  return rating;
};

export const getQuantity = (cartData, id) => {
  const item = cartData.find((i) => id === i.id);
  return item.quantity;
};

export const addNewItemToCart = (singleData, cartData, productQuantity) => {
  const isInCart = cartData.find((i) => i.id === singleData.id);
  var newData;
  console.log(productQuantity);
  if (!!isInCart) {
    newData = cartData.map((i) => {
      console.log("first one");
      if (singleData.id === i.id) {
        console.log(
          "productQuantity ",
          productQuantity.value,
          "i qty",
          i.quantity
        );
        i.quantity += productQuantity.value;
        console.log(
          "productQuantity ",
          productQuantity.value,
          "i qty",
          i.quantity
        );
      }
      return i;
    });
  } else {
    newData = [...cartData, { ...singleData, quantity: 1 }];
  }
  console.log(isInCart);
  return newData;
};

// Customer Data Related Functions
export const getUserInformation = (customerData, id) => {
  return customerData?.find((i) => i.u_id === id);
};
export const dateFormatter = (stringDate) => {
  const year = stringDate.slice(0, 4);
  const numberMonth = stringDate.slice(5, 7);
  const { month } = listOfMonths?.find((i) => i.key === numberMonth);
  const date = stringDate.slice(8, 10);
  return `${month} ${date}, ${year}`;
};

export const getResultDataWithSearchText = (resultData, searchText) => {
  var searchArray = new Set(searchText.split(" "));
  var newID = [];
  resultData.forEach((item) =>
    searchArray.forEach((text) => {
      if (item.title.toLowerCase().includes(text.toLowerCase())) {
        newID.push(item.id);
      }
    })
  );
  newID = new Set([...newID]);
  var newData = [];
  // console.log(newData);
  newID.forEach((i) => {
    newData.push(resultData?.find((item) => item.id == i));
  });
  return newData;
};

export const getResultDataWithRating = (numberRating, productData) => {
  return productData?.filter((i) => calculateRating(i) >= numberRating);
};
export const getResultDataWithCategories = (categories, productData) => {
  var newItem = [];
  if (categories == "all") return productData;
  productData?.forEach((item) => {
    item?.categories?.forEach((i) => {
      if (i == categories) newItem.push(item);
    });
  });
  return newItem;
};
export const updateResultData = (
  searchText,
  numberRating,
  categories,
  productData
) => {
  const search_updated_arr = getResultDataWithSearchText(
    productData,
    searchText
  );
  const rating_updated_arr = getResultDataWithRating(
    numberRating,
    search_updated_arr
  );
  const categories_updated_arr = getResultDataWithCategories(
    categories,
    rating_updated_arr
  );
  return categories_updated_arr;
};
