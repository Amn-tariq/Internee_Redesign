import React from "react";

function Card3({ t1, t2, t3, img, p1, p2, p3, p4, isReversed }) {
  return (
    <div
      className={`container-fluid d-flex mb-5 ${
        isReversed ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="w-50 p-3">
        <h4>{t1}</h4>
        <h1>{t2}</h1>
        <h6>{t3}</h6>
        <div className="row">
          <div className="col">{p1}</div>
          <div className="col">{p2}</div>
        </div>
        <div className="row">
          <div className="col">{p3}</div>
          <div className="col">{p4}</div>
        </div>
      </div>
      <div className="w-50">
        <img src={img} className="w-100 h-100 p-3" alt="Section Illustration" />
      </div>
    </div>
  );
}

export default Card3;
