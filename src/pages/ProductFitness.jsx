import CarouselProducts from "./components/CarouselProducts";

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import BackToTop from "../components/BackToTop";
import { ProductsContext } from "../contextProducts/ProductsContext";
import AsideDetailPage from "./components/AsideDetailPage";
import Starts from "./components/Starts";

const ProductFitness = () => {
  const { details } = useParams();

  const { productData } = useContext(ProductsContext);

  return (
    <section className="max-w-screen-xl m-auto p-3">
      {productData.map(
        (data) =>
          data.id === details && (
            <article key={data.id}>
              <div className="sm:mt-20 mb-10 flex flex-col sm:flex-row">
                <div className="sm:w-[20vw] sm:mr-6 sm:self-start w-[50vw] self-center">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="object-contain"
                  />
                </div>
                <div className="sm:w-[50vw] flex flex-col mr-6 w-[90vw] mt-5 sm:mt-0">
                  <div className="flex flex-col sm:gap-1 gap-2">
                    <div className="flex items-center gap-2">
                      <h1 className="sm:text-2xl text-xl font-semibold">
                        {data.title}
                      </h1>
                    </div>
                    <Starts />
                    <div>
                      <p className="text-ml font-bold text-[#b12704]">
                        {data.price}
                      </p>
                    </div>
                  </div>
                  <section className="border-t border-b border-slate-400 mt-3 mb-3 pt-3 pb-3 flex flex-col gap-3">
                    <h2 className="text-lg font-bold">Product Details</h2>
                    <div className="flex gap-10">
                      <div className="flex flex-col gap-3">
                        <p className="text-sm font-semibold">Brand</p>
                        <p className="text-sm font-semibold">Color</p>
                        <p className="text-sm font-semibold">Material</p>
                        <p className="text-sm font-semibold">Components</p>
                        <p className="text-sm font-semibold">Included</p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <p className="text-sm">
                          {data.Brand || "Not specified"}
                        </p>
                        <p className="text-sm">
                          {data.Color || "Not specified"}
                        </p>
                        <p className="text-sm">
                          {data.Material || "Not specified"}
                        </p>
                        <p className="text-sm">
                          {data.Components || "Not specified"}
                        </p>
                        <p className="text-sm">
                          {data.Included || "Not specified"}
                        </p>
                      </div>
                    </div>
                  </section>
                  <div className="flex flex-col gap-3">
                    <h2 className="text-lg font-bold mb-2">
                      About this product
                    </h2>
                    <ul className="flex flex-col gap-3">
                      {data.About_this_product &&
                        data.About_this_product.map((element, index) => (
                          <li key={index}>• {element}</li>
                        ))}
                    </ul>
                  </div>
                </div>
                <AsideDetailPage />
              </div>
            </article>
          )
      )}
      <CarouselProducts />
      <BackToTop />
    </section>
  );
};

export default ProductFitness;
