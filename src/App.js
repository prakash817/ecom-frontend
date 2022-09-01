import Basket from "./components/Basket";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./app.css";
import arr from "./components/data";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((e) => e.id === product.id); //if item is already present then increse quntity

    console.log(exist, "app");
    if (exist) {
      const item = cartItems.map((e) =>
        e.id === product.id ? { ...e, qty: e.qty + 1 } : e
      );
      setCartItems(item);
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onMinus = (product) => {
    console.log(product, "onMinus");
    const exist = cartItems.find((e) => e.id === product.id);

    console.log(exist, "onMinus");
    if (exist.qty == 1) {
      const item = cartItems.filter((e) => e.id !== product.id);
      setCartItems(item);
    } else {
      const item = cartItems.map((e) =>
        e.id === product.id ? { ...e, qty: e.qty - 1 } : e
      );
      setCartItems(item);
    }
  };

  const onRemove = (product) => {
    const item = cartItems.filter((e) => e.id !== product.id);
    setCartItems(item);
  };

  return (
    <div className="App">
      <Navbar totalItems={cartItems.length} />
      <div className="ecom">
        <Main
          arr={arr}
          onAdd={onAdd}
          onMinus={onMinus}
          onRemove={onRemove}
          cartItems={cartItems}
        />
        <Basket cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
