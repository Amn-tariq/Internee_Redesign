import React from "react";
import "../styles/trusted.css";
function Card2({ imgSrc, title, text }) {
  return (
    <>
      <div className="col">
        <div className="card h-100 gap-3">
          <img src={imgSrc} className="card-img-top p-2" alt={title} />
          <div className="card-body p-2">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card2;
