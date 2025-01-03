import CartOverlay from "../../components/Cart/CartOverlay";
import MainSection from "./MainSection";

// Componente principal da página inicial
const Home = () => {
  return (
    <>
      {/* Componente que exibe a sobreposição do carrinho de compras */}
      <CartOverlay />
      {/* Componente que exibe a seção principal com filtros e produtos */}
      <MainSection />
    </>
  );
};

export default Home;