import React, { useEffect, useState } from "react";
import "../order/order.css";
import { useStateValue } from "../StateProvider";
import { db } from "../firebase";
import UserOrder from "../userOrder/UserOrder";

function Order() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
    } else {
      setOrders([]);
    }
  });
  return (
    <div className="order">
      <h1>Your Orders</h1>

      <div className="order__orders">
        {orders?.map((order) => {
          return <UserOrder order={order} />
        })}
      </div>
    </div>
  );
}

export default Order;
