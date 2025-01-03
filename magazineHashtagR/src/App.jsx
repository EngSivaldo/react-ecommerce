import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/HomePage/Home";
import Checkout from "./pages/CheckoutPage/Checkout";
import PurchaseHistory from "./pages/PurchaseHistoryPage/PurchaseHistory";
import { Routes, Route } from "react-router-dom";
import { CartContext } from "./context/CartContext";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  }
 
  const removeFromCart = (productId) => {
    const carItemsCopy = { ...cartItems };
    delete carItemsCopy[productId];
    setCartItems(carItemsCopy);
  }

  const addToCart = (productId) => {
    const updatedCart = { 
      ...cartItems, 
      [productId]: (cartItems[productId] ?? 0) + 1 ,
    };
    setCartItems(updatedCart);
  };
  //funcao retira do carrinho
  const decreaseUnit = (productId) => {
    if (cartItems[productId] > 1) {
      const updatedCart = { 
        ...cartItems, 
        [productId]: cartItems[productId] - 1 ,
      };
      setCartItems(updatedCart);

    } else {
      removeFromCart(productId);
    }
   
  };
  
  return (
    <CartContext.Provider value={{ isCartOpen, toggleIsCartOpen, cartItems, setCartItems, addToCart, decreaseUnit , removeFromCart, }}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/history' element={<PurchaseHistory />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;