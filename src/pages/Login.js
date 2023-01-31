import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card bordered shadow-lg">
              <h3 className="text-center mb-4">Login to Amazee</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <div>
                  <Link to="/forgot-password" className="ps-1 pt-2">
                    <strong>Forgot Password ?</strong>
                  </Link>
                  <div className="d-flex justify-content-center align-items-center gap-15 mt-5">
                    <button className="button btn shadow" type="submit">
                      Login
                    </button>
                    <Link to="/signup" className="button signup shadow">
                      Signup
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

export default Login;
