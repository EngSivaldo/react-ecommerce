import { useState } from "react";
import ProductFilters from "./productFilter"; // Ajuste para corresponder ao nome do arquivo
import ProductsContainer from "./ProductsContainer";

const MainSection = () => {
  const [femaleProducts, setFemaleProducts] = useState(null);
  return (
    <>
      <ProductFilters setFemaleProducts={setFemaleProducts} />
      <ProductsContainer femaleProducts={femaleProducts} />
    </>
  );
};

export default MainSection