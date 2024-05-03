import { useContext } from "react";
import { ProductsContext } from "../contextProducts/ProductsContext";


const Products = () => {
const { productData } = useContext(ProductsContext); 

  return (
    productData
  )
}

export default Products