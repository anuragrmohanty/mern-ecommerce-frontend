import React from "react";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import watch from "../images/watch.jpg";
import Container from "../components/Container";

const Checkout = () => {
  const breadcrumbStyles = {
    "--bs-breadcrumb-divider": ">",
  };
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data border rounded shadow-sm">
              <h3 className="website-name">Amazee</h3>
              <nav style={breadcrumbStyles} aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="/cart" className="text-dark">
                      Cart
                    </a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Information
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Shipping
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">
                Anurag Mohanty (anuragrmohanty@gmail.com)
              </p>
              <h4 className="mb-3 mt-4">Shipping Address</h4>
              <form
                action=""
                className="d-flex gap-15 justify-content-between flex-wrap"
              >
                <div className="w-100">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Select Country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Appartment, Suit,etc..."
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Select State
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ZipCode"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <IoChevronBack className="fs-4 text-dark" />
                      Return to cart
                    </Link>
                    <Link to="/cart" className="btn btn-success text-white p-3">
                      Continue to Shipping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex align-items-center justify-content-between gap-10 mb-2">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{
                        top: "-10px",
                        right: "-10px",
                        background: "#3b4149",
                      }}
                      className="badge shadow-lg border text-white rounded-circle p-2 position-absolute"
                    >
                      10
                    </span>
                    <img src={watch} alt="product" className="img-fluid" />
                  </div>
                  <div>
                    <h5 className="total-price">Samsung Galaxy Smart Watch</h5>
                    <p className="total-price">Lorem, ipsum dolor.</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">$ 100</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex align-items-center justify-content-between">
                <p className="mb-0 py-2 total">Subtotal</p>
                <p className="mb-0 py-2 total-price">$ 300</p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p className="mb-0 py-2 total">Shipping</p>
                <p className="mb-0 py-2 total-price">$ 300</p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between border-bottom py-4">
              <h4 className="total-txt">Total</h4>
              <h5 className="total-price">$ 10000</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
