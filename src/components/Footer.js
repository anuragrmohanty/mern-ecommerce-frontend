import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsYoutube, BsGithub, BsInstagram } from "react-icons/bs";
import appstore from "../images/appstore.png";
import playstore from "../images/playstore.png";
import newsletter from "../images/newsletter.png";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter icon" />
                <h3 className="mb-0 text-white">Subscribe our Newsletter</h3>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4 middle-footer">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="footer-links">
                <address className="text-white fs-6">
                  Demo Store <br />
                  Hno. 15/B Akshar Residency <br />
                  Karannagar road, Kadi <br />
                  PinCode: 382715
                </address>
                <a
                  href="tel: +91 6355267769"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +91 63552 67769
                </a>
                <a
                  href="mailto:anuragrmohanty@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  info@amazee.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a to="#">
                    <BsFacebook className="text-white fs-4" />
                  </a>
                  <a to="#">
                    <BsInstagram className="text-white fs-4" />
                  </a>
                  <a to="#">
                    <BsGithub className="text-white fs-4" />
                  </a>
                  <a to="#">
                    <BsYoutube className="text-white fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column align-items-start">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/terms-condition" className="text-white py-2 mb-1">
                  Terms & Conditions
                </Link>
                <Link to="/blog" className="text-white py-2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column align-items-start">
                <Link to="" className="text-white py-2 mb-1">
                  Search
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  About Us
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Faqs
                </Link>
                <Link to="/contact" className="text-white py-2 mb-1">
                  Contact
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Size Chart
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column align-items-start">
                <Link to="" className="text-white py-2 mb-1">
                  Accessories
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Laptops
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Headphones
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Smart Watches
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Tablets
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white">Our app</h4>
              <p className="text-white">
                Download Our App from PlayStore or AppStore and get 15% discount
                on your first order!
              </p>
              <div className="storeimg d-flex align-items-center justify-content-between gap-10">
                <img src={appstore} alt="appstore" />
                <img src={playstore} alt="playstore" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white mb-0">
                &copy; {new Date().getFullYear()}&nbsp;Made with 💖 by Amazee
                Team
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
