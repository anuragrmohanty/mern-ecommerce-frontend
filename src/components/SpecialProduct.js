import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import watch from "../images/watch.jpg";

const SpecialProduct = () => {
  return (
    <div className="col-6">
      <div className="special-product-card my-3 bordered rounded shadow-sm">
        <div className="d-flex justify-content-evenly">
          <div>
            <img src={watch} className="img-fluid" alt="watch" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Boat</h5>
            <h6 className="product-title">Boat Xtend</h6>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-price">$100.00</span>&nbsp;
              <strike>$200.00</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5</b>days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-2 bg-danger">10</span>:
                <span className="badge rounded-circle p-2 bg-danger">10</span>:
                <span className="badge rounded-circle p-2 bg-danger">10</span>
              </div>
            </div>
            <div className="prod-count mt-3">
              <p>Products: 5</p>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="5"
                  aria-valuemin="0"
                  aria-valuemax="10"
                ></div>
              </div>
            </div>
            <Link to="" className="button mt-3">Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
