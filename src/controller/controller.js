export const getSingleData = (productData, id) => {
  return productData?.find((i) => parseInt(id) === i.id);
};
export const getTotalValue = (cartData) => {
  return cartData?.reduce((sum, item) => sum + item.price * item.quantity, 0);
};
