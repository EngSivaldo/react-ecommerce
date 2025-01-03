import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/HomePage/Home";
import Checkout from "./pages/CheckoutPage/Checkout";
import PurchaseHistory from "./pages/PurchaseHistoryPage/PurchaseHistory";
import { Routes, Route } from "react-router-dom";
import { CartContext } from "./context/CartContext";

// Componente principal do aplicativo
function App() {
  // Estado para controlar se o carrinho está aberto
  const [isCartOpen, setIsCartOpen] = useState(false);
  // Estado para armazenar os itens do carrinho
  const [cartItems, setCartItems] = useState({});

  // Função para alternar o estado de abertura do carrinho
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Função para remover um item do carrinho
  const removeFromCart = (productId) => {
    const cartItemsCopy = { ...cartItems };
    delete cartItemsCopy[productId];
    setCartItems(cartItemsCopy);
  };

  // Função para adicionar um item ao carrinho
  const addToCart = (productId) => {
    const updatedCart = { 
      ...cartItems, 
      [productId]: (cartItems[productId] ?? 0) + 1,
    };
    setCartItems(updatedCart);
  };

  // Função para diminuir a quantidade de um item no carrinho
  const decreaseUnit = (productId) => {
    if (cartItems[productId] > 1) {
      const updatedCart = { 
        ...cartItems, 
        [productId]: cartItems[productId] - 1,
      };
      setCartItems(updatedCart);
    } else {
      removeFromCart(productId);
    }
  };

  return (
    <CartContext.Provider value={{ isCartOpen, toggleIsCartOpen, cartItems, setCartItems, addToCart, decreaseUnit, removeFromCart }}>
      {/* Componente do cabeçalho */}
      <Header />
      {/* Definição das rotas do aplicativo */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/history' element={<PurchaseHistory />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;