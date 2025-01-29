import React from "react";

function Card2({ imgSrc, title, text }) {
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img src={imgSrc} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card2;
