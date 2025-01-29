import React from "react";
import "../styles/hero.css";
import Button from "./Button";
import lms from "../assets/LMS video.gif";
import cloud from "../assets/logo/cloud.PNG";
import see from "../assets/logo/see.PNG";
import nics from "../assets/logo/nics.PNG";
import pitb from "../assets/logo/pitb.PNG";
function Hero() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Looking for dream internship?</h1>
          <h2>Gain Hands On Experience</h2>
          <p>
            Internee.pk kickstarts students' tech careers with first
            internships, providing industry exposure, practical skills, and
            networking opportunities, paving the way for their success in the
            tech industry.
          </p>
          <div className="partners">
            <img src={see} alt="See Pakistan" />
            <img src={nics} alt="National Expansion Plan" />
            <img src={pitb} alt="PITB" />
            <img src={cloud} alt="Google Cloud" />
          </div>
          <div className="hero-buttons cta-buttons">
            <Button
              text="Job Portal"
              styleClass="butn btn-job-portal"
              onClick={() => console.log("Job Portal clicked")}
            />
            <Button
              text="Our LMS"
              styleClass="butn btn-login"
              onClick={() => console.log("LMS clicked")}
            />
          </div>
        </div>
        <div className="hero-image">
          <img src={lms} alt="Award Ceremony" />
        </div>
      </section>
    </>
  );
}

export default Hero;
