import { createContext } from "react";

//Contexto do carrinho
export const CartContext = createContext(null);

// obter quantidade de itens no carrinho
export const getAmountOfItemsInCart = (cartItemsObj) => {
  let amount = 0;
  for(const productId in cartItemsObj) {
    amount += cartItemsObj[productId]

  }
  return amount;

}

//usar essa função no UserButtons