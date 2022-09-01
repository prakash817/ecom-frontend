import React from "react";
import "./main.css";

const Main = ({ arr, onAdd, onMinus, onRemove, cartItems }) => {
  return (
    <div className="main">
      {arr.map((product, i) => {
        return (
          <div className="product" key={i}>
            <img src={product.img} alt={product.name} />
            <div className="info">
              <span> {product.name}</span>
              <span> Price : ${product.price}</span>
              <span> Rating : {product.rating} </span>
              {cartItems.length && cartItems.find((e) => e.id == product.id) ? (
                <div>
                  <div>
                    <button onClick={() => onAdd(product)}> + </button>{" "}
                    {cartItems.find((e) => e.id === product.id).qty}
                    <button onClick={() => onMinus(product)}> - </button>
                  </div>
                  <button onClick={() => onRemove(product)}> Remove</button>
                </div>
              ) : (
                <button onClick={() => onAdd(product)}>Add to cart</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
