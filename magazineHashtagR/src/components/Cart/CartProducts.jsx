import { useCartContext } from "../../context/CartContext";
import CartItem from "./CartItem";


const CartProducts = ({isHomePage = true}) => {
  const { cartItems } = useCartContext();
  const cartItemsArray = [];
  for (const itemId in cartItems) {
    cartItemsArray.push({id: Number(itemId), amount: cartItems[itemId]})

  }
  
  return <section className={`flex flex-col justfy-start overflow-auto gap-2 ${isHomePage ? "h-3/5" : ""}`}>
    {cartItemsArray.map((product) => {
      return <CartItem {...product} key={`key_${product.id}`} />;

   })}
  
  </section>
};


export default CartProducts;