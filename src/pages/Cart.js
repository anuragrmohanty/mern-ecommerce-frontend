import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className=" cart-header py-3 d-flex justify-content-between align-items-center border-bottom">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className=" cart-data py-3 d-flex justify-content-between align-items-center border-bottom mb-2">
              <div className="cart-col-1 gap-30 d-flex align-items-center">
                <div className="w-25">
                  <img src={watch} alt="watch" className="img-fluid" />
                </div>
                <div className="w-75">
                  <p>Samsung Galaxy Ultra Pro</p>
                  <p>Color: Red</p>
                  <p>Size: M</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$100.00</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    type="number"
                    name=""
                    min={1}
                    max={10}
                    className="form-control w-100"
                    id=""
                  />
                </div>
                <div>
                  <RiDeleteBin6Line className="btn fs-1 text-white bg-dark p-2 rounded-circle" />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">$100.00</h5>
              </div>
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-center">
                <Link className="btn button" to="/product">
                  Continue to shopping
                </Link>
                <div className="d-flex align-items-end flex-column">
                  <h4>Subtotal: $1000</h4>
                  <p>Tax and shipping charges are calculated at checkout</p>
                  <Link className="btn button2" to="/checkout">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
