import "../payment/payment.css";
import React from "react";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
// import Subtotal from "../subtotal/Subtotal";
// import axios from "axios";
import axios from "../axios";
import { db } from "../firebase";
import { use } from "i18next";

function Payment() {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();
  const [t] = useTranslation();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [clientSecret, setClientSecret] = useState(null);

  console.log("Person:", user);
  useEffect(() => {
    if (basket.length === 0) return;
    //generate the special stripe secret which allow us to change a customer

    const getClientSecret = async () => {
      try {
        const response = await axios({
          method: "post",
          //stripe expects the total in a currencies sub units
          //10$ => 10,000 So, 10*100
          url: `/payments/create?total=${subTotal() * 100}`, ///payments/create
        });
        setClientSecret(response.data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    getClientSecret();
  }, [basket]);

  console.log("This SECRET IS >>>>", clientSecret);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    try {
      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (!payload || !payload.paymentIntent) {
        console.error("Payment failed:", payload);
        setProcessing(false);
        setError("Payment confirmation failed. Please try again.");
        return;
      }

      const paymentIntent = payload.paymentIntent;

      if (!user || !user.multiFactor?.user?.uid) {
        console.error("User data is missing:", user);
        setProcessing(false);
        setError("User information is unavailable. Please log in again.");
        return;
      }

      // Save order to Firestore
      await db
        .collection("users")
        .doc(user.multiFactor.user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });

      setSucceeded(true);
      setError(null);
      setProcessing(false);

      dispatch({
        type: "EMPTY_BASKET",
      });

      navigate("/orders");
    } catch (error) {
      console.error("Error during payment submission:", error);
      setError(error.message || "An error occurred during payment.");
      setProcessing(false);
    }
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  const subTotal = () => {
    return basket
      .reduce((total, item) => total + (item?.price || 0), 0)
      .toFixed(2);
  };
  // const subTotal = () => {
  //   var total = 0;
  //   for (var i = 0; i < basket.length; i++) {
  //     total += basket[i].price;
  //   }
  //   return total.toFixed(2);
  // };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          {t("checkout")}(
          <Link to="/checkout">
            {basket?.length} {t("items")}
          </Link>
          )
        </h1>
        {/* delivery info */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Line</p>
            <p>N2a 1K3, Kitchener, ON</p>
          </div>
        </div>
        {/* products */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {/* products */}
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
          </div>
        </div>
        {/* pay method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <h3>Order total: ${subTotal()}</h3>
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
