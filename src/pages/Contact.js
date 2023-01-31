import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.559466156916!2d72.34270146393729!3d23.29545167048598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c22bc76941105%3A0x19d6fd5d9412382!2sPanjra%20Pole%2C%20Kundal%2C%20Kadi%2C%20Gujarat%20382715!5e0!3m2!1sen!2sin!4v1675083494616!5m2!1sen!2sin"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <CustomInput
                    type="text"
                    className="form-control"
                    placeholder="Enter your Name"
                  />
                  <CustomInput
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <CustomInput
                    type="number"
                    name="number"
                    placeholder="Enter your contact number"
                  />
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
                  <div>
                    <button className="btn button">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get In Touch With Us!</h3>
                <ul className="ps-0">
                  <li className="mb-3 d-flex align-items-center gap-30">
                    <AiOutlineHome className="fs-4" />
                    <address>
                      Hno. 15/B Akshar Residency, <br />
                      Nr. Karannagar Road kadi, Gujarat, <br />
                      PinCode: 382715
                    </address>
                  </li>
                  <li className="mb-3 d-flex align-items-center gap-30">
                    <BiPhoneCall className="fs-4" />
                    <a href="tel:+91 6355267769" className="text-dark">
                      +91 62552 67769
                    </a>
                  </li>
                  <li className="mb-3 d-flex align-items-center gap-30">
                    <AiOutlineMail className="fs-4" />
                    <a
                      href="mailto:anuragrmohanty@gmail.com"
                      className="text-dark"
                    >
                      info@amazee.com
                    </a>
                  </li>
                  <li className="mb-3 d-flex align-items-center gap-30">
                    <AiOutlineInfoCircle className="fs-4" />
                    <p className="mb-0">Monday - Friday : 10 AM - 8 PM</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
