import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { BiArrowBack } from "react-icons/bi";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Signup = () => {
  return (
    <>
      <Meta title={"Signup"} />
      <BreadCrumb title="Signup" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card bordered shadow-lg">
              <h3 className="text-center mb-4">Sign Up to Amazee</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                />
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                />
                <CustomInput
                  type="number"
                  name="number"
                  placeholder="Enter your Mobile number"
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <div>
                  <div className="mt-3 text-center">
                    <button className="button btn shadow" type="submit">
                      Create
                    </button>
                    <Link to="/login" className="text-center d-block mt-3">
                      <BiArrowBack className="fs-3" />
                      &nbsp;&nbsp;Go Back to Login
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
