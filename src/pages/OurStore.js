import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";

const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3 p-3 bordered shadow-sm">
              <h3 className="filter-title">Shop by Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3 p-3 bordered shadow-sm">
              <h3 className="filter-title">Filter by</h3>
              <div>
                <h5 className="filter-subtitle">Availability</h5>
                <div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id=""
                    />
                    <label htmlFor="" className="form-check-label text-success">
                      In stock(12)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id=""
                    />
                    <label htmlFor="" className="form-check-label text-danger">
                      Out of stock(5)
                    </label>
                  </div>
                </div>
                <h5 className="filter-subtitle">Price</h5>
                <div className="d-flex align-items-center justify-content-center gap-10">
                  <div className="form-floating d-flex align-items-center justify-content-center">
                    <p className="pe-2">$</p>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From"
                      />
                    </div>
                  </div>
                  <div className="form-floating d-flex align-items-center justify-content-center">
                    <p className="pe-2">$</p>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="To"
                      />
                    </div>
                  </div>
                </div>
                <h5 className="filter-subtitle">Colors</h5>
                <div>
                  <Color />
                  <Color />
                </div>
                <h5 className="filter-subtitle">Size</h5>
                <div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="size-1"
                    />
                    <label htmlFor="size-1" className="form-check-label">
                      S (3)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="size-2"
                    />
                    <label htmlFor="size-2" className="form-check-label">
                      M (3)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="size-3"
                    />
                    <label htmlFor="size-3" className="form-check-label">
                      L (3)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="size-4"
                    />
                    <label htmlFor="size-4" className="form-check-label">
                      XL (3)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="size-5"
                    />
                    <label htmlFor="size-5" className="form-check-label">
                      XXL (3)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3 p-3 bordered shadow-sm">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge text-dark rounded-3 py-2 px-3">
                    Headphone
                  </span>
                  <span className="badge text-dark rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge text-dark rounded-3 py-2 px-3">
                    Smart Phone
                  </span>
                  <span className="badge text-dark rounded-3 py-2 px-3">
                    Smart Watch
                  </span>
                  <span className="badge text-dark rounded-3 py-2 px-3">
                    Tv
                  </span>
                  <span className="badge text-dark rounded-3 py-2 px-3">
                    Camera
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3 p-3 bordered shadow-sm">
              <h3 className="filter-title">Random Product</h3>
              <div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src="images/homepod.png"
                      alt="watch"
                      className="img-fluid"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Apple Bluetooth iSpeakers</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="text-danger">
                      <b>$300</b>
                    </p>
                  </div>
                </div>
                <div className="random-products d-flex mt-4">
                  <div className="w-50">
                    <img
                      src="images/headphone.jpg"
                      alt="watch"
                      className="img-fluid"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Boat Classic Headphones</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="text-danger">
                      <b>$300</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4 shadow-sm bordered">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 w-50">Sort By:</p>
                  <select name="" className="form-control form-select" id="">
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best Selling</option>
                    <option value="title-ascending">Alphabetically A-Z</option>
                    <option value="title-descending">Alphabetically Z-A</option>
                    <option value="price-ascending">Price Low to High</option>
                    <option value="price-descending">Price High to Low</option>
                    <option value="date-ascending">Date Old to New</option>
                    <option value="title-descending">Date New to Old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="total-products mb-0">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      alt="grid"
                      className="img-fluid d-block"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      alt="grid"
                      className="img-fluid d-block"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      alt="grid"
                      className="img-fluid d-block"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      alt="grid"
                      className="img-fluid d-block"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
