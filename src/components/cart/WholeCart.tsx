import React from "react";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";
import SingleCartItem from "./SingleCartItem";
import useDataContext from "../useDataContext";
function WholeCart() {
  const { isCartOpen, cartData, setIsCartOpen } = useDataContext();
  const style = {
    transform: isCartOpen ? "translateX(0)" : "translateX(100%)",
    transition: "all 0.7s ease-in"
  };
  const cartStyle = {
    display: isCartOpen ? "block" : "none"
  };
  return (
    <>
      <div className="cart-container" style={style}>
        <CartHeader />
        <div className="cart-wrapper">
          <div className="mini-cart-product-container">
            {cartData?.length > 0 &&
              cartData?.map((i) => (
                <React.Fragment key={i.id}>
                  <SingleCartItem item={i} />
                </React.Fragment>
              ))}
          </div>
          <CartFooter />
        </div>
      </div>
      <div
        className="cart-bg"
        style={cartStyle}
        onClick={(e) => (isCartOpen ? setIsCartOpen(false) : null)}
      ></div>
    </>
  );
}

export default WholeCart;
