import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartAdd, cartProduct, cartRemove } from "../domain/cartSlice";

const Product = ({ data }) => {
  const { id, title, description, images, price } = data;
  const products = useSelector(cartProduct);
  const dispatch = useDispatch();

  const hasProductInCart =
    products.findIndex((product) => product.id === id) >= 0;

  const routeUrl = `/product/${id}`;

  return (
    <div class="col">
      <div class="card shadow-sm">
        <div class="text-center" style={{ height: "200px" }}>
          <img
            alt={title}
            src={images[0]}
            class=""
            style={{ height: "100%", "max-width": "100%" }}
          />
        </div>
        <div class="card-body">
          <Link to={routeUrl}>
            <h3 className="text-truncate">{title}</h3>
          </Link>
          <p class="card-text text-truncate">{description}</p>
          <div class="d-flex justify-content-between align-items-center">
            <h3 class="text-body-secondary">$ {price}</h3>
            <div class="btn-group">
              {!hasProductInCart ? (
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => dispatch(cartAdd({ ...data }))}
                >
                  Add to cart
                </button>
              ) : (
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => dispatch(cartRemove({ ...data }))}
                >
                  Remove from cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
