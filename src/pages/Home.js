import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main-banner"
              />
              <div className="main-banner-content position-absolute">
                <p className="subtitle">SUPERCHARGED FOR PROS.</p>
                <p className="title">iPad S13+ Pro.</p>
                <p className="desc">
                  From $999.00 or $41.62/mo. <br /> for 24 mo. Footnote*
                </p>
                <Link to="" className="button">
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <p className="subtitle">Best sale</p>
                  <p className="title">Laptop max</p>
                  <p className="desc">
                    From $1699.00 or <br />
                    $64.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <p className="subtitle">New arrival</p>
                  <p className="title">Buy iPad air</p>
                  <p className="desc">
                    From $599.00 or <br /> $49.91 mo. for 12 mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <p className="subtitle">New arrival</p>
                  <p className="title">Buy iPad air</p>
                  <p className="desc">
                    From $599.00 or <br /> $49.91 mo. for 12 mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <p className="subtitle">New arrival</p>
                  <p className="title">Buy iPad air</p>
                  <p className="desc">
                    From $599.00 or <br /> $49.91 mo. for 12 mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex justify-content-between align-items-center">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="section-heading ps-2 mb-4">Our Top Categories</div>
          </div>
          <div className="col-12">
            <div className="categories bg-white shadow d-flex justify-content-between flex-wrap align-items-center border rounded">
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/laptop.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Headphones</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/laptop.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Headphones</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card bg-dark position-relative bordered shadow-lg">
              <img
                src="images/series7.png"
                alt="famous-product"
                className="img-fluid"
              />
              <div className="famous-content position-absolute">
                <h6>BIG SCREEN</h6>
                <h4>Smart Watch Series 7</h4>
                <p>
                  From $399 or $16.62/mo. for 24 mo.<sub>*</sub>
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative bordered shadow-lg bg-secondary">
              <img
                src="images/macbook.png"
                alt="famous-product"
                className="img-fluid"
              />
              <div className="famous-content position-absolute">
                <h6>STUDIO DISPLAY</h6>
                <h4>600 nits of brightness</h4>
                <p>
                  27-inch 5k Retina display<sub>*</sub>
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative bordered shadow-lg bg-secondary">
              <img
                src="images/homepod.png"
                alt="famous-product"
                className="img-fluid homepod"
              />
              <div className="famous-content position-absolute">
                <h6>HOME SPEAKERS</h6>
                <h4>Room-filling sound.</h4>
                <p>
                  From $699 or $116.58/mo. for 12 mo.<sub>*</sub>
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative bordered shadow-lg bg-secondary">
              <img
                src="images/iphone.png"
                alt="famous-product"
                className="img-fluid famous-iphone"
              />
              <div className="famous-content position-absolute">
                <h6>SMARTPHONES</h6>
                <h4>iPhone 13 Pro.</h4>
                <p>
                  From $900.00 or $41.62/mo. for 24 mo.<sub>*</sub>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading mb-2">Our Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="marquee-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper shadow-lg border rounded">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
