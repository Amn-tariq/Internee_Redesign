import React from "react";

function Card1({ imgSrc, title, text, link }) {
  return (
    <div className="card" style={{ width: "30rem" }}>
      <img src={imgSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-primary">
          Learn More
        </a>
      </div>
    </div>
  );
}
export default Card1;
