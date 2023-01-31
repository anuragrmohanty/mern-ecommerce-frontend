import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";
import cross from "../images/cross.svg";
import tab from "../images/tab.jpg";
import Container from "../components/Container";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative bordered shadow">
                <img
                  src={cross}
                  className="position-absolute cross img-fluid"
                  alt="cross"
                />
                <div className="product-card-image d-flex justify-content-center align-items-center">
                  <img src={tab} className="img-fluid w-100" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="product-title">
                    Honor T1 7.0 1 GB RAM 8 GB ROM WI-FI +3G Tablet
                  </h5>
                  <h6 className="price my-3">$ 100</h6>
                </div>
                <div>
                  <div className="product-detail d-flex justify-content-between align-items-center ">
                    <h5>Brand:</h5>
                    <p>Honor</p>
                  </div>
                  <div className="product-detail d-flex justify-content-between align-items-center ">
                    <h5>Type:</h5>
                    <p>Tablet Computer</p>
                  </div>
                  <div className="product-detail d-flex justify-content-between align-items-center ">
                    <h5>SKU:</h5>
                    <p>SKU033</p>
                  </div>
                  <div className="product-detail d-flex justify-content-between align-items-center ">
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail d-flex justify-content-between align-items-center ">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail d-flex justify-content-between align-items-center ">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                      <p>L</p>
                      <p>XL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative bordered shadow">
                <img
                  src={cross}
                  className="position-absolute cross img-fluid"
                  alt="cross"
                />
                <div className="product-card-image d-flex justify-content-center align-items-center">
                  <img src={tab} className="img-fluid w-100" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="product-title">
                    Honor T1 7.0 1 GB RAM 8 GB ROM WI-FI +3G Tablet
                  </h5>
                  <h6 className="price my-3">$ 100</h6>
                </div>
                <div>
                  <div className="product-detail d-flex justify-content-between align-items-center ">
                    <h5>Brand:</h5>
                    <p>Honor</p>
                  </div>
                  <div className="product-detail d-flex justify-content-between align-items-center ">
                    <h5>Type:</h5>
                    <p>Tablet Computer</p>
                  </div>
                  <div className="product-detail d-flex justify-content-between align-items-center ">
                    <h5>SKU:</h5>
                    <p>SKU033</p>
                  </div>
                  <div className="product-detail d-flex justify-content-between align-items-center ">
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail d-flex justify-content-between align-items-center ">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail d-flex justify-content-between align-items-center ">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                      <p>L</p>
                      <p>XL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative bordered shadow">
                <img
                  src={cross}
                  className="position-absolute cross img-fluid"
                  alt="cross"
                />
                <div className="product-card-image d-flex justify-content-center align-items-center">
                  <img src={tab} className="img-fluid w-100" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="product-title">
                    Honor T1 7.0 1 GB RAM 8 GB ROM WI-FI +3G Tablet
                  </h5>
                  <h6 className="price my-3">$ 100</h6>
                </div>
                <div>
                  <div className="product-detail d-flex justify-content-between align-items-center ">
                    <h5>Brand:</h5>
                    <p>Honor</p>
                  </div>
                  <div className="product-detail d-flex justify-content-between align-items-center ">
                    <h5>Type:</h5>
                    <p>Tablet Computer</p>
                  </div>
                  <div className="product-detail d-flex justify-content-between align-items-center ">
                    <h5>SKU:</h5>
                    <p>SKU033</p>
                  </div>
                  <div className="product-detail d-flex justify-content-between align-items-center ">
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail d-flex justify-content-between align-items-center ">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail d-flex justify-content-between align-items-center ">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                      <p>L</p>
                      <p>XL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative bordered shadow">
                <img
                  src={cross}
                  className="position-absolute cross img-fluid"
                  alt="cross"
                />
                <div className="product-card-image d-flex justify-content-center align-items-center">
                  <img src={tab} className="img-fluid w-100" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="product-title">
                    Honor T1 7.0 1 GB RAM 8 GB ROM WI-FI +3G Tablet
                  </h5>
                  <h6 className="price my-3">$ 100</h6>
                </div>
                <div>
                  <div className="product-detail d-flex justify-content-between align-items-center ">
                    <h5>Brand:</h5>
                    <p>Honor</p>
                  </div>
                  <div className="product-detail d-flex justify-content-between align-items-center ">
                    <h5>Type:</h5>
                    <p>Tablet Computer</p>
                  </div>
                  <div className="product-detail d-flex justify-content-between align-items-center ">
                    <h5>SKU:</h5>
                    <p>SKU033</p>
                  </div>
                  <div className="product-detail d-flex justify-content-between align-items-center ">
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail d-flex justify-content-between align-items-center ">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail d-flex justify-content-between align-items-center ">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                      <p>L</p>
                      <p>XL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default CompareProduct;
