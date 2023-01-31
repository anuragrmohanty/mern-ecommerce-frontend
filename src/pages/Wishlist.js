import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import cross from "../images/cross.svg";
import tab1 from "../images/tab1.jpg";
import Container from "../components/Container";

const Wishlist = () => {
  return (
    <>
      <Meta title=" My Wishlist" />
      <BreadCrumb title=" My Wishlist" />
      <Container class1="wishlist-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src={cross}
                className="position-absolute cross img-fluid"
                alt="cross"
              />
              <div className="wishlist-card-image">
                <img src={watch} alt="watch" className="img-fluid w-100" />
              </div>
              <div className="py-3 px-3">
                <h5 className="product-title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM WI-FI +3G Tablet
                </h5>
                <h6 className="price my-3">$ 100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src={cross}
                className="position-absolute cross img-fluid"
                alt="cross"
              />
              <div className="wishlist-card-image">
                <img src={tab1} alt="watch" className="img-fluid w-100" />
              </div>
              <div className="py-3 px-3">
                <h5 className="product-title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM WI-FI +3G Tablet
                </h5>
                <h6 className="price my-3">$ 100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src={cross}
                className="position-absolute cross img-fluid"
                alt="cross"
              />
              <div className="wishlist-card-image">
                <img src={tab1} alt="watch" className="img-fluid w-100" />
              </div>
              <div className="py-3 px-3">
                <h5 className="product-title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM WI-FI +3G Tablet
                </h5>
                <h6 className="price my-3">$ 100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src={cross}
                className="position-absolute cross img-fluid"
                alt="cross"
              />
              <div className="wishlist-card-image">
                <img src={tab1} alt="watch" className="img-fluid w-100" />
              </div>
              <div className="py-3 px-3">
                <h5 className="product-title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM WI-FI +3G Tablet
                </h5>
                <h6 className="price my-3">$ 100</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
