import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "../UI/Footer/Footer";
import Header from "../UI/Header/Header";
import { HomePage } from "../components";
import ProductsPage from "../pages/ProductsPage";

const AppRoutet = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/products/:productItem" element={<ProductsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutet;
