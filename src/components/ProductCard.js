import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import watch01 from "../images/watch-01.webp";
import watch02 from "../images/watch-02.webp";
import wish from "../images/wish.svg";
import prodcompare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import addcart from "../images/add-cart.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${
            location.pathname == "/"
              ? "/product/:id"
              : location.pathname == "/product/:id"
              ? "/product/1"
              : ":id"
          }`}
          className="product-card position-relative shadow-sm bordered"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-img d-flex align-items-center ">
            <img src={watch01} alt="product-img" />
            <img src={watch02} alt="product-img" />
          </div>
          <div className="product-details mt-4">
            <h6 className="brand">Boat X-Tend</h6>
            <h5 className="product-title">
              A Smart Companion for Your Active Lifestyle
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p
              className={`product-desc text-secondary ${
                grid === 12 ? "d-block" : "d-none"
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              eius rerum id delectus molestias reprehenderit assumenda iusto sed
              quibusdam, recusandae mollitia error impedit amet a iste ipsa
              illum consectetur facilis.
            </p>
            <p className="price text-success">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="prodcompare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addCart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
