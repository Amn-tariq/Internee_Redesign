import React from "react";
import "../styles/trusted.css";
import moit from "../assets/logo/moit.webp";
import google from "../assets/logo/google.webp";
import ms from "../assets/logo/ms.PNG";
import ignite from "../assets/logo/ignite.webp";
import zindagi from "../assets/logo/zindig.PNG";
import smit from "../assets/logo/smit.PNG";
import pafla from "../assets/logo/PAFLA.PNG";

const TrustedSection = () => {
  return (
    <section className="trusted-section text-center">
      <h2>Trusted by Top Companies</h2>
      <div className="companies">
        <img src={moit} alt="See Pakistan" />
        <img src={google} alt="National Expansion Plan" />
        <img src={ms} alt="PITB" />
        <img src={ignite} alt="Google Cloud" />
        <img src={zindagi} alt="National Expansion Plan" />
        <img src={smit} alt="PITB" />
        <img src={pafla} alt="Google Cloud" />
      </div>
    </section>
  );
};

export default TrustedSection;
