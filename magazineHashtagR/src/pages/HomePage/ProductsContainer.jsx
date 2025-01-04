// Importa o catálogo de produtos da pasta utils
import { catalog } from '../../utils/catalog';

// Importa o componente ProductCard
import ProductCard from './ProductCard';

// Define o componente ProductsContainer que recebe searchParams como prop
const ProductsContainer = ({ searchParams }) => {
  return (
    // Define uma seção com classes de estilo para layout responsivo
    <section className='container flex flex-wrap mx-auto p-10 justify-center gap-10'>
      {
        // Se searchParams não for nulo, filtra os produtos femininos do catálogo
        (searchParams.get("filterby") !== null ? catalog.filter((p) => p.feminine === (searchParams.get("filterby") === "fem"))
        // Caso contrário, usa todo o catálogo
        : catalog).map((product) => (
          // Renderiza um ProductCard para cada produto, usando o id do produto como chave
          <ProductCard key={`product_${product.id}_key`} {...product} />
        ))
      }
    </section>
  );
};

// Exporta o componente ProductsContainer como padrão
export default ProductsContainer;