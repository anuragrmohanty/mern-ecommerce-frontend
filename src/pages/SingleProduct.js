import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { AiOutlineHeart, AiOutlineCopy } from "react-icons/ai";
import { TbGitCompare } from "react-icons/tb";
import { MdLocalShipping } from "react-icons/md";
import Container from "../components/Container";

const SingleProduct = () => {
  const props = {
    width: 600,
    height: 500,
    img: "https://www.saintlad.com/wp-content/uploads/2020/09/airpods-max-saint-7.jpg",
  };

  const [orderedProduct, setOrderedProduct] = useState(true);

  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image rounded border border-bottom-0 shadow-sm">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15 rounded border border-top-0 shadow-sm">
              <div>
                <img
                  src="https://68.cdn.ekm.net/ekmps/shops/hdewcameras/images/apple-airpods-max-pink-14120-p.jpg?v=D7733E56-B0E5-4BA1-B8ED-3944FE111DC8"
                  alt="product"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://www.detonashop.com.br/media/catalog/product/cache/1/image/580x580/9df78eab33525d08d6e5fb8d27136e95/f/i/file_3.png"
                  alt="product"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://people.com/thmb/0i7RXf8ObyPthGoFX1v-5CfAgss=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/apple-airpods-max-silver-2245df67d2a148e2b849ea69fdd0c9ab.jpg"
                  alt="product"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7r_sbw9QjJL9wYpWu0PiFzT7OtiKGh0KnJuwjTJunynjsCqudEk8GVEoplb-BmhWqUc&usqp=CAU"
                  alt="product"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details rounded border  shadow-sm">
              <div className="border-bottom">
                <h3 className="product-title">
                  Buy New AirPods Max From ₹10454.00/mo. with EMI,Footnote
                  ₹59900.00
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$100.00</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 review-text">(2 Reviews)</p>
                </div>
                <a href="#review" className="review-btn">
                  Write a review{" "}
                </a>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center py-3">
                  <h3 className="product-heading">Type :</h3>
                  <p className="mb-0 product-data">Headphone</p>
                </div>
                <div className="d-flex gap-10 align-items-center py-3">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="mb-0 product-data">Apple</p>
                </div>
                <div className="d-flex gap-10 align-items-center py-3">
                  <h3 className="product-heading">Category :</h3>
                  <p className="mb-0 product-data">Headphone</p>
                </div>
                <div className="d-flex gap-10 align-items-center py-3">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="mb-0 product-data">Headphone</p>
                </div>
                <div className="d-flex gap-10 align-items-center py-3">
                  <h3 className="product-heading">Availability :</h3>
                  <p className="mb-0 product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-columm align-items-center mt-3 mb-3">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary p-3">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary p-3">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary p-3">
                      L
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary p-3">
                      XL
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary p-3">
                      XXL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column align-items-start mt-4 mb-3">
                  <h3 className="product-heading">Color :</h3>
                  <Color />
                </div>
                <div className="d-flex gap-30 flex-row align-items-center mt-3 mb-3">
                  <h3 className="product-heading">Quantity :</h3>
                  <div>
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "70px" }}
                      id=""
                    />
                  </div>
                  <div className="d-flex gap-10">
                    <button className="button border-0" type="submit">
                      ADD TO CART
                    </button>
                    <button className="button2 border-0" type="submit">
                      BUY IT NOW
                    </button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-30 mt-4">
                  <div className="d-flex gap-10 align-items-center">
                    <AiOutlineHeart className="fs-4 text-secondary" />
                    <a href="">Add to Wishlist</a>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <TbGitCompare className="fs-4 text-secondary" />
                    <a href="">Add to Compare</a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column pt-5 pb-3">
                  <h3 className="product-heading">
                    <MdLocalShipping className="fs-4 me-3" />
                    Shipping & Returns
                  </h3>
                  <p className="mb-0 product-data">
                    Free shipping and returns available on all orders! <br />
                    We ship all US domestic orders within 5-10 business days!
                  </p>
                </div>
                <div className="d-flex flex-row align-items-center py-2">
                  <h3 className="product-heading">
                    <AiOutlineCopy className="fs-4 me-3" />
                  </h3>
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(
                        "https://www.saintlad.com/wp-content/uploads/2020/09/airpods-max-saint-7.jpg"
                      );
                    }}
                  >
                    Copy product link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4 className="text-dark mb-3">Description</h4>
            <div className="bg-white p-3 border rounded shadow-sm">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                nobis, vitae itaque libero nihil incidunt ut quasi assumenda.
                Alias ab aspernatur quia animi quae laudantium repellat veniam
                explicabo, similique dicta earum molestiae dolore assumenda
                laboriosam cum officiis magni neque in blanditiis autem est
                repudiandae quos architecto. Eligendi placeat nulla eos?
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper py-5 home-wrapper-2" id="review">
        <div className="row">
          <div className="col-12">
            <h4 className="mb-3">Customer Reviews</h4>
            <div className="review-inner-wrapper border rounded shadow-sm">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <div className="d-flex gap-10 justify-content-between align-items-center">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>

                {orderedProduct && (
                  <div>
                    <a
                      href=""
                      className="text-decoration-underline review-head-a"
                    >
                      Write a review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Write a review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="10"
                      placeholder="Type your message...."
                    ></textarea>
                  </div>
                  <div className="text-end">
                    <button className="btn button">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex align-items-center gap-10">
                    <h6 className="mb-0">Customer Name</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus, numquam.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
    </>
  );
};

export default SingleProduct;
