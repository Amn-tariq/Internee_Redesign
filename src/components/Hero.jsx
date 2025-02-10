import React, { useState, useEffect } from "react";
import "../styles/hero.css";
import Button from "./Button";
import lms from "../assets/LMS video.gif";
import cloud from "../assets/logo/cloud.PNG";
import see from "../assets/logo/see.PNG";
import nics from "../assets/logo/nics.PNG";
import pitb from "../assets/logo/pitb.PNG";
function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = [
    "Hands On Experience",
    "Real-World Projects",
    "Expert Mentorship",
  ];
  const typingSpeed = 100; // Speed for typing letters (ms)
  const deletingSpeed = 50; // Speed for deleting letters (ms)
  const pauseTime = 1000; // Pause before starting to delete (ms)

  useEffect(() => {
    let timeout;
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words]);
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h3>Looking for dream internship?</h3>
          <h1>
            Gain <span className="typewriter-text">{displayText}</span>
          </h1>
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
