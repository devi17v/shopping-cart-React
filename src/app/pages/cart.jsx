import React from "react";
import { useSelector } from "react-redux";
import { cartProduct, cartRemove } from "../domain/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const products = useSelector(cartProduct);
  const dispatch = useDispatch();
  return (
    <div>
      {products.map((product) => (
        <div>
          <div>{product.title}</div>
          <div>{product.description}</div>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => dispatch(cartRemove({ ...product }))}
            >
              Remove
            </button>
          </div>
          <div>-------------</div>
        </div>

        // <div className="product-details mr-2">
        // <div className="d-flex flex-row align-items-center">
        //   <i className="fa fa-long-arrow-left"></i>
        //   <span className="ml-2">Continue Shopping</span>
        // </div>
        // <hr />
        // <h6 className="mb-0">Shopping cart</h6>
        // <div className="d-flex justify-content-between">
        //   <span>You have 4 items in your cart</span>≤  ,
        //   <div className="d-flex flex-row align-items-center">
        //     <span className="text-black-50">Sort by:</span>
        //     <div className="price ml-2">
        //       <span className="mr-1">price</span>
        //       <i className="fa fa-angle-down"></i>
        //     </div>
        //   </div>
        // </div>
        // <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
        //   <div className="d-flex flex-row">
        //     <img
        //       className="rounded"
        //       src="https://i.imgur.com/QRwjbm5.jpg"
        //       width="40"
        //     />
        //     <div className="ml-2">
        //       <span className="font-weight-bold d-block">Iphone 11 pro</span>
        //       <span className="spec">256GB, Navy Blue</span>
        //     </div>
        //   </div>
        //   <div className="d-flex flex-row align-items-center">
        //     <span className="d-block">2</span>
        //     <span className="d-block ml-5 font-weight-bold">$900</span>
        //     <i className="fa fa-trash-o ml-3 text-black-50"></i>
        //   </div>
        // </div>
        // </div>
      ))}
    </div>
  );
};

export default Cart;
