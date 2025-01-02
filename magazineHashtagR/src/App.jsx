import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/HomePage/Home";
import Checkout from "./pages/CheckoutPage/Checkout";
import PurchaseHistory from "./pages/PurchaseHistoryPage/PurchaseHistory";
import { Routes, Route } from "react-router-dom";
import { CartContext } from "./context/CartContext";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [carItems, setCarItems] = useState({});

  /*
  {
  "1": 3
  "2": 1
  "5": 4
  }
  */
  const addToCart = (productId) => {
    // Cria uma nova cópia do objeto carItems e atualiza a quantidade do produto especificado
    const updateCart = { 
      ...carItems, 
      [productId]: (carItems[productId] ?? 0) + 1 
    };
    setCarItems(updateCart);
  };

  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen, carItems, setCarItems, addToCart }}>
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