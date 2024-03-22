import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "../UI/Footer/Footer";
import Header from "../UI/Header/Header";
import { HomePage } from "../components";
import AddToCart from "../pages/AddToCart";
import CheckoutPage from "../pages/CheckoutPage";
import ProductsPage from "../pages/ProductsPage";
import ProductsPageDetails from "../pages/ProductsPageDetails";

const AppRoutet = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/category/:productItem" element={<ProductsPage />} />
        <Route
          path="/product/:productItem/:details"
          element={<ProductsPageDetails />}
        />
        <Route path="/cart/:item" element={<AddToCart />} />
        <Route path="/checkout/:productId" element={<CheckoutPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutet;
