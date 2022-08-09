import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';
import Slide from './Components/Slide'
import React,{useState} from 'react';

function App() {
  const productList = [
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
      name: "IPhone 12 Pro",
      price: 66000,
      quantity: 0,
    }
  ]
  let [ProductList, setProductList] = useState(productList) 
  const incrementQuantity = (index) => {
    let newProductList = [...productList]
    newProductList[index].quantity++
    setProductList(newProductList);
  }
  return (
   <>
   <Navbar/>
   <Slide/>
   <main className='container mt-5 text-left'>
   <ProductList productList={productList} incrementQuantity={incrementQuantity}/>
   </main>
   </>
  );
}

export default App;
