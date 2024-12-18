import React from "react";
import "../product/product.css";
import { useStateValue } from "../StateProvider";

function Product({ id, title, price, rating, img }) {
  // const productInfo = [

  // ]
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket);
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        img: img,
        price: price,
        rating: rating,
      },
    });
  };

  return (
  
      <div className="product" key={id}>
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>&#9733;</p>
              ))}
          </div>
        </div>
        <img src={img} alt="product" />

        <button onClick={addToCart}>Add to cart</button>
      </div>
  );
}

export default Product;
