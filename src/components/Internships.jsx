import React from "react";
import Card1 from "./Card1";
import "../styles/internship.css";
import bd from "../assets/internships/bd.JPEG";
import ad from "../assets/internships/ad.JPEG";
import cd from "../assets/internships/cd.JPEG";
import da from "../assets/internships/da.JPG";
import fd from "../assets/internships/fd.JPEG";
import gd from "../assets/internships/gd.JPG";
import ml from "../assets/internships/ml.JPEG";
import hack from "../assets/internships/hack.JPEG";
import cloud from "../assets/internships/cloud.JPG";

function Internships() {
  // Array of internship data
  const internships = [
    {
      id: 1,
      title: "Backend Development",
      description: "Build and maintain scalable applications.",
      imgSrc: bd,
      link: "#",
    },
    {
      id: 2,
      title: "App Development ",
      description: "Assist in digital marketing campaigns.",
      imgSrc: ad,
      link: "#",
    },
    {
      id: 3,
      title: "Graphic Design",
      description: "Create engaging designs for our brand.",
      imgSrc: gd,
      link: "#",
    },
    {
      id: 4,
      title: "Chatbot Development",
      description: "Create engaging chatapps for our brand.",
      imgSrc: cd,
      link: "#",
    },
    {
      id: 5,
      title: "Data Analysis",
      description: "Create engaging designs for our brand.",
      imgSrc: da,
      link: "#",
    },
    {
      id: 6,
      title: "Machine Learning",
      description: "Create engaging designs for our brand.",
      imgSrc: ml,
      link: "#",
    },
    {
      id: 7,
      title: "Frontend Development",
      description: "Create engaging designs for our brand.",
      imgSrc: fd,
      link: "#",
    },
    {
      id: 8,
      title: "hacking",
      description: "Create engaging designs for our brand.",
      imgSrc: hack,
      link: "#",
    },
    {
      id: 9,
      title: "Cloud",
      description: "Create engaging designs for our brand.",
      imgSrc: cloud,
      link: "#",
    },
  ];

  return (
    <div className="internships-container">
      <div className="internships-grid">
        {internships.map((internship) => (
          <Card1
            key={internship.id}
            title={internship.title}
            description={internship.description}
            imgSrc={internship.imgSrc}
            link={internship.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Internships;
