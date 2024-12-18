import React from "react";
import "../checkout/checkout.css";
import Subtotal from "../subtotal/Subtotal";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider";
// import FlipMove from "react-flip-move";
import { useTranslation } from "react-i18next";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [t] = useTranslation();

  console.log(basket);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="advertisement-amazone"
        />
        <div>
          <h3>{user?.email}</h3>
          <h2 className="checkout__title">{t("YOurShippingBasket")}</h2>
          
            {basket.length === 0 ? (
              <p>{t("EmptyBasket")}</p>
            ) : (
              basket.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                />
              ))
            )}
          
          {/* {basket.map(item => {
            <CheckoutProduct
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          })} */}
        </div>
      </div>
      <div className="checkout__right">
        {/* Subtotal compo */}
        <Subtotal />
      </div>
    </div>
  );
}
export default Checkout;
