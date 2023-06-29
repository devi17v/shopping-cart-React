import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProducts } from "../domain/productsSlice";

const Details = () => {
  let { productId } = useParams();
  const products = useSelector(getProducts);
  const product = products[productId - 1];
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img alt={product.title} src={product.images[0]} class="" />
      <p>Brand: {product.brand}</p>
      <p>Price: ${product.price}</p>
      <p>Discount: {product.discountPercentage}%</p>
      <p>Rating: {product.rating}</p>
    </div>
  );
};

export default Details;
