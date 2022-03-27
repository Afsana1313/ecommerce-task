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
