import "./App.css";
import React from "react";
import Checkout from "./checkout/CheckoutW";
import Header, { AWS } from "./header/header";
import Home from "./home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Footer from "./footer/Footer";
import Payment from "./payment/Payment";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Order from "./order/Order";

const stripePromise = loadStripe(
  "pk_test_51Nogj2GkGOi488LSG8MicynnuZLbbUn5U8oCJYnLTuqWdyCq4SjOWm7lLPMGObDXdF2uwOBpLXuuhMV7dWB6Ickw00XUJrEYvj"
);
function App() {

  const [{}, dispatch] = useStateValue();

  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{sk_test_51Nogj2GkGOi488LSiQ52y8U3h3lGLw3slgnOreuwI3gtESgLoQUXPz1VBPcTFL1shNQ7dcnk4RqGL2yYBTuS2qmb00zEePQK91}}',
  };


  useEffect(() => {
    //will only run  once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USE IS >>", authUser);
      if (authUser) {
        //logged IN
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    // Router to jump to routes
    <Router>
      <Routes>
        <Route
          path="/orders"
          element={
            <div className="app">
              <Header />
              <Order />
              <Footer />
            </div>
          }
        />
        <Route
          path="/payment"
          element={
            <div className="app">
              <Header />
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
              <Footer />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="app">
              <Login />
              <AWS />
              <Footer />
            </div>
          }
        />
        <Route
          path="/checkout"
          element={
            <div className="app">
              <Header />
              <Checkout />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className="app">
              <Header />
              <Home />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
