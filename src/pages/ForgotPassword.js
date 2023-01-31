import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const ForgotPassword = () => {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title="Forgot Password" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card bordered shadow-lg">
              <h3 className="text-center mb-2">Reset Your Password</h3>
              <p className="text-center mb-4">
                We'll send you mail to reset your password
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                />

                <div>
                  <div className="d-flex flex-column justify-content-center align-items-center gap-15 mt-3">
                    <button className="button btn shadow" type="submit">
                      Reset
                    </button>
                    <Link to="/login" className="text-center mt-2 text-dark">
                      Cancel
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

export default ForgotPassword;
