import React from "react";
import Button from "./Button";
function Card1({ imgSrc, title, text, link }) {
  return (
    <div className="card" style={{ width: "25rem" }}>
      <img src={imgSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <hr />
        <p className="card-text">{text}</p>
        <Button
          text="Learn More"
          styleClass="butn btn-job-portal"
          onClick={() => console.log("Job Portal clicked")}
        />
      </div>
    </div>
  );
}
export default Card1;
