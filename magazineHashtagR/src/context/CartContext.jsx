import { useState, createContext, useContext } from "react";

// Contexto do carrinho
const CartContext = createContext(null);

export const useCartContext = () => useContext(CartContext);

// Função para obter a quantidade de itens no carrinho
export const getAmountOfItemsInCart = (cartItemsObj) => {
  let amount = 0;
  for (const productId in cartItemsObj) {
    amount += cartItemsObj[productId];
  }
  return amount;
};

// Usar essa função no UserButtons

const CartContextProvider = ({ children }) => {
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
    <CartContext.Provider value={{ isCartOpen, cartItems, toggleIsCartOpen, removeFromCart, addToCart, decreaseUnit }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;