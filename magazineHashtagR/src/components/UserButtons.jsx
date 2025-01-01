import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const UserButtons = () => {
  return (
    <div>  
      <button className='px-2 relative'>
        <FontAwesomeIcon icon={faCartShopping} className='fa-2x'/>
        <div id='cart-amount ' className='absolute inline-flex items-center justify-center w-5 h-5 font-semibold text-white-500 bg-red-500 border-2 border-white rounded-full -top-2 -right-2'>3</div>
      </button>
      <a className='px-2'>
        <FontAwesomeIcon icon={faUser} className='fa-2x'/>
      </a>
    </div>
  );
};

export default UserButtons;