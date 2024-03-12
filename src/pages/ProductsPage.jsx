import { useParams } from "react-router-dom";

const ProductsPage = () => {
  const { productItem } = useParams();
  console.log(productItem);
};

export default ProductsPage;
