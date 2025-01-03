// Importa o catálogo de produtos da pasta utils
import { catalog } from '../../utils/catalog'

// Importa o componente ProductCard
import ProductCard from './ProductCard';

// Define o componente ProductsContainer que recebe femaleProducts como prop
const ProductsContainer = ({ femaleProducts }) => {
  return (
    // Define uma seção com classes de estilo para layout responsivo
    <section className='container flex flex-wrap mx-auto p-10 justify-center gap-10'>
      {
        // Se femaleProducts não for nulo, filtra os produtos femininos do catálogo
        (femaleProducts !== null ? catalog.filter((p) => p.feminine === femaleProducts)
        // Caso contrário, usa todo o catálogo
        : catalog).map((product) => (
          // Renderiza um ProductCard para cada produto, usando o id do produto como chave
          <ProductCard key={`product_${product.id}_key`} {...product} />
        ))
      }
    </section>
  )
}

// Exporta o componente ProductsContainer como padrão
export default ProductsContainer;