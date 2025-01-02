import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const UserButtons = () => {
  const cartInfo = useContext(CartContext)
  return (
    <div>  
      <button className='px-2 relative fixed top-4 right-4 z-50 p-2 bg-blue-500 text-white rounded'  onClick={() => cartInfo.setIsCartOpen(true)}>
        <FontAwesomeIcon icon={faCartShopping} className='fa-2x'/>
        <div id='cart-amount ' className='absolute inline-flex items-center justify-center w-5 h-5 font-semibold text-white-500 bg-red-500 border-2 border-white rounded-full -top-2 -right-2'>3</div>
      </button>
      <Link to='/history' className='px-2'>
        <FontAwesomeIcon icon={faUser} className='fa-2x'/>
      </Link>
    </div>
  );
};

export default UserButtons;