import { catalog } from '../../utils/catalog'
import ProductCard from './ProductCard';

const PorductsContainer = () => {
  return (
    <section className='conatiner flex flex-wrap mx-auto p-10 justify-center gap-10'>
      {catalog.map((product) => (
        <ProductCard {...product} />
        ))}
        
    </section>
  )

}


export default PorductsContainer;