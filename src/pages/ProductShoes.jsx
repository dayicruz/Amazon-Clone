import CarouselProducts from "./components/CarouselProducts";

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import BackToTop from "../components/BackToTop";
import { ProductsContext } from "../contextProducts/ProductsContext";
import AsideDetailPage from "./components/AsideDetailPage";
import Starts from "./components/Starts";

const ProductShoes = () => {
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
                        <p className="text-sm font-semibold">Fabric type</p>
                        <p className="text-sm font-semibold">Manufacturer</p>
                        <p className="text-sm font-semibold">Outer material</p>
                        <p className="text-sm font-semibold">Axle height</p>
                        <p className="text-sm font-semibold">Sole material</p>
                        <p className="text-sm font-semibold">
                          Internal material
                        </p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <p className="text-sm">
                          {data.Fabric_type ||
                            data.sole_material ||
                            "Not specified"}
                        </p>
                        <p className="text-sm">
                          {data.Manufacturer || "Not specified"}
                        </p>
                        <p className="text-sm">
                          {data.Outer_material || "Not specified"}
                        </p>
                        <p className="text-sm">
                          {data.axle_height || "Not specified"}
                        </p>
                        <p className="text-sm">
                          {data.sole_material || "Not specified"}
                        </p>
                        <p className="text-sm">
                          {data.Internal_material || "Not specified"}
                        </p>
                      </div>
                    </div>
                  </section>
                  <div className="flex flex-col gap-3">
                    <h2 className="text-lg font-bold mb-2">About this item</h2>
                    <ul className="flex flex-col gap-3">
                      {data.About_this_item &&
                        data.About_this_item.map((element, index) => (
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

export default ProductShoes;
