import React from "react";
import { Link } from "react-router-dom";
import blog01 from "../images/blog-1.jpg";

const BlogCard = () => {
  return (
      <div className="blog-card bordered rounded shadow p-0">
        <div className="card-image">
          <img src={blog01} alt="blog" className="img-fluid w-100" />
        </div>
        <div className="blog-content">
          <p className="date">1 Desc, 2022</p>
          <h5 className="title">A Beautiful sunday morning renaissance</h5>
          <p className="desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            mollitia vero vitae optio ex qui labore aut ipsa nemo magnam?
          </p>
          <Link to="/blog/:id" className="button">
            READ MORE
          </Link>
        </div>
      </div>
  );
};

export default BlogCard;
