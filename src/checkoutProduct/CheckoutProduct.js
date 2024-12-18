import React from "react";
import "../checkoutProduct/checkoutProduct.css";
import { useStateValue } from "../StateProvider";
import { useTranslation } from "react-i18next";

function CheckoutProduct({id, img, title, price, rating}) {
  
  const [{ basket }, dispatch] = useStateValue();
  const { t } = useTranslation();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    })
  };
  return (
    <div className="checkoutProduct" key={id}>
      <img
        className="checkoutProduct__img"
        src={img}
        alt="amazone-checkout-product"
      />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>&#9733;</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
