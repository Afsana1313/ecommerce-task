import { useState } from "react";
//import { DeleteOutlined } from '@ant-design/icons'

import useDataContext from "../useDataContext";
function SingleCartItem({ item }) {
  const [quantity, setQuantity] = useState<number>(0);
  const { cartData, setCartData } = useDataContext();
  const handleDelete = (id: number) => {
    setCartData(cartData?.filter((i) => i.id !== id));
    // var value = totalValue as number - (parseFloat(item.price as string) as number) * item.quantity;
    //  value = parseFloat(value.toPrecision(5) as string) as number;
    // setTotalValue(value)
  };
  const handleQuantity = (e, i) => {
    setQuantity(parseInt(e.target.value));
    var newTotalValue: number = 0;
    const newCart = cartData.map((item) => {
      if (i.id === item.id) {
        item.quantity = parseInt(e.target.value);
        item.totalValue = item.quantity * parseFloat(item.price);
      }
      return item;
    });
    newTotalValue = cartData.reduce((sum, item) => sum + item.totalValue, 0);
    // console.log(newTotalValue)
    // setTotalValue(newTotalValue)
    //setCartData(newCart)
  };
  return (
    <>
      <div className="single-cart-item">
        <div className="cart-image">
          <img src={item.api_featured_image} alt={item.name} />
        </div>
        <div className="cart-text">
          {item.name}
          <br />
          {item.brand}
          <br />
          {item.price_sign}
          {item.price}
        </div>
        <div className="cart-control">
          <div className="cart-item-delete">
            delete
            {/* <DeleteOutlined
                    onClick={(e)=> handleDelete(item.id)}
                  /> */}
          </div>
          <div className="cart-item-quantity">
            <select
              name="cart-item-quantity"
              id="cart-item-quantity"
              value={quantity}
              onChange={(e) => handleQuantity(e, item)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
      </div>
      <div className="cart-single-item-total">
        {item.price_sign}
        {item.quantity * parseFloat(item.price)}
      </div>
    </>
  );
}

export default SingleCartItem;
