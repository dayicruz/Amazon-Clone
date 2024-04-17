import { useContext } from "react";
import { ProductsContext } from "../contextProducts/ProductsContext";

const getProducts = (name = "") => {
  const { productData } = useContext(ProductsContext);
  name = name.toLocaleLowerCase().trim();

  if (name.length === 0) return [];

  return productData.filter((product) =>
    product.title.toLocaleLowerCase().includes(name)
  );
};

export default getProducts;
