import { useLayoutEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "../UI/Footer/Footer";
import Header from "../UI/Header/Header";
import Search from "../UI/Header/Search";
import { HomePage } from "../components";
import ProductsProvider from "../contextProducts/ProductsProvider";
import AddToCart from "../pages/AddToCart";
import AllProductsPages from "../pages/AllProductsPages";
import CheckoutPage from "../pages/CheckoutPage";
import ProductBooks from "../pages/ProductBooks";
import ProductFitness from "../pages/ProductFitness";
import ProductMobile from "../pages/ProductMobile";
import ProductShoes from "../pages/ProductShoes";
import ProductsPage from "../pages/ProductsPage";
import CustomerService from "../pages/CustomerService";

const AppRoutet = () => {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <ProductsProvider>
      <Wrapper>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route path="/category/:productItem" element={<ProductsPage />} />
          <Route
            path="/books/:productItem/:details"
            element={<ProductBooks />}
          />

          <Route
            path="/shoes/:productItem/:details"
            element={<ProductShoes />}
          />

          <Route
            path="/fitness/:productItem/:details"
            element={<ProductFitness />}
          />

          <Route
            path="/mobile/:productItem/:details"
            element={<ProductMobile />}
          />
          <Route
            path="/customerservice"
            element={<CustomerService />}
          />

          <Route path="/products/:all" element={<AllProductsPages />} />

          <Route path="/cart" element={<AddToCart />} />
          <Route path="/checkout/:productId" element={<CheckoutPage />} />

          <Route element={<Search />} />

          <Route element={<addressComplet />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Wrapper>
    </ProductsProvider>
  );
};

export default AppRoutet;
