import { useState } from "react";
import { useSearchParams } from "react-router-dom"
import ProductFilters from "./productFilter"; // Ajuste para corresponder ao nome do arquivo
import ProductsContainer from "./ProductsContainer";

const MainSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <ProductFilters setSearchParams={setSearchParams} />
      <ProductsContainer searchParams={searchParams} />
    </>
  );
};

export default MainSection