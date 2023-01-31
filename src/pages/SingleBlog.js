import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import blog01 from "../images/blog-1.jpg";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={" Dynamic Blog Name"} />
      <BreadCrumb title=" Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blog" className="mb-5 align-items-center d-flex">
                <BiArrowBack className="fs-3" />
                &nbsp;Go back to Blogs
              </Link>
              <h3 className="blog-title">A Beautiful sunday morning</h3>
              <img
                src={blog01}
                alt="blog-img"
                className="img-fluid w-100 py-4"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                sapiente delectus voluptas consequuntur minus ipsam voluptates
                beatae commodi eligendi corrupti quidem, nostrum alias nisi
                reprehenderit explicabo deserunt repudiandae, accusantium
                corporis iusto facilis doloremque officiis? Rerum eveniet
                officiis asperiores odio illo? Autem iusto architecto quae
                beatae aliquam magni optio voluptatibus saepe!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
