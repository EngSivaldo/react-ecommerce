import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/HomePage/Home";
import Checkout from "./pages/CheckoutPage/Checkout";
import PurchaseHistory from "./pages/PurchaseHistoryPage/PurchaseHistory";
import { Routes, Route } from "react-router-dom";
import { CartContext } from "./context/CartContext";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(true);

  return (
  
   <CartContext.Provider value={{isCartOpen, setIsCartOpen}} >
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



//npm isntall react-router-dom