import React from "react";
import "../styles/trusted.css";
import hat from "../assets/logo/logo1.jpg";
const About = () => {
  return (
    <section className="about-section text-center ">
      <div className="container">
        <img src={hat} alt="" />

        <h2>What is Internee.pk?</h2>
        <p>
          The ultimate platform designed to turbocharge the IT sector in
          Pakistan! We recognize the immense potential of talented individuals
          in the country and aim to bridge the gap between them and the thriving
          IT industry. Internee.pk offers a comprehensive range of virtual
          internship opportunities exclusively in the IT field.
        </p>
      </div>
    </section>
  );
};

export default About;
