import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, fetchProducts } from "../domain/productsSlice";
import Product from "../components/product";

const Home = () => {
  const products = useSelector(getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3">
          {products.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
