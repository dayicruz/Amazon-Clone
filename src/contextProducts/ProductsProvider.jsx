import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { ProductsContext } from "./ProductsContext";

const ProductsProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);

  async function fetchDataFromFirestore() {
    const querySnapshot = await getDocs(collection(db, "products"));

    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  }

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setProductData(data);
    }

    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={{ productData }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
