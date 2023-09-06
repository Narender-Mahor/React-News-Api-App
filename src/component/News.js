import React from "react";

const News = (props) => {
    const {Image, title, description, url} = props;
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={Image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>

    </>
  );
};

export default News;
