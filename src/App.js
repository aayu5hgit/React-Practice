import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from './Components/ProductList.js';
import Slide from "./Components/Slide.js";

function App() {
  const products = [
    {
      name: "IPhone X",
      price: 32000,
      quantity: 0,
    },
    {
      name: "IPhone 11",
      price: 49999,
      quantity: 0,
    },
    {
      name: "IPhone 12",
      price: 56000,
      quantity: 0,
    },
    {
      name: "IPhone 13",
      price: 66000,
      quantity: 0,
    },
    
    
  ];
  let [productList, setProductList] = useState(products);
  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity > 0 ? newProductList[index].quantity-- : newProductList[index].quantity = 0
    setProductList(newProductList);
  };
  return (
    <>
      <Navbar />
      <Slide />
      <main className="container text-left">
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}

        />
      </main>
    </>
  );
}

export default App;
