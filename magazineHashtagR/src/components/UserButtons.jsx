import { useCartContext, getAmountOfItemsInCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const UserButtons = () => {
  const { toggleIsCartOpen, cartItems } = useCartContext();
  const amountOfItems = getAmountOfItemsInCart(cartItems);

  return (
    <div>  
      <button 
        className='px-2 relative fixed top-4 right-4 z-50 p-2 bg-blue-500 text-white rounded'  
        onClick={toggleIsCartOpen}
      >
        <FontAwesomeIcon icon={faCartShopping} className='fa-2x'/>
        {!!amountOfItems && (
          <div 
            id='cart-amount' 
            className='absolute inline-flex items-center justify-center w-5 h-5 font-semibold text-white-500 bg-red-500 border-2 border-white rounded-full -top-2 -right-2'
          >
            {amountOfItems}
          </div> 
        )}
      </button>
      <Link to='/history' className='px-2'>
        <FontAwesomeIcon icon={faUser} className='fa-2x'/>
      </Link>
    </div>
  );
};

export default UserButtons;