import { useContext, useState } from 'react';
import { CartContext, getAmountOfItemsInCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const UserButtons = () => {
  // quantidade inicial de produtos no carrinho
  const [amountOfItems, setAmountOfItems] = useState(0);
  
  // obtém informações do contexto do carrinho
  const cartInfo = useContext(CartContext);
  
  return (
    <div>  
      {/* Botão do carrinho de compras */}
      <button 
        className='px-2 relative fixed top-4 right-4 z-50 p-2 bg-blue-500 text-white rounded'  
        onClick={() => cartInfo.setIsCartOpen(true)}
      >
        <FontAwesomeIcon icon={faCartShopping} className='fa-2x'/>
        
        {/* Exibe a quantidade de itens no carrinho se for maior que 0 */}
        {!!amountOfItems && (
          <div 
            id='cart-amount' 
            className='absolute inline-flex items-center justify-center w-5 h-5 font-semibold text-white-500 bg-red-500 border-2 border-white rounded-full -top-2 -right-2'
          >
            {amountOfItems}
          </div> 
        )}
      </button>
      
      {/* Link para o histórico do usuário */}
      <Link to='/history' className='px-2'>
        <FontAwesomeIcon icon={faUser} className='fa-2x'/>
      </Link>
    </div>
  );
};

export default UserButtons;