import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trusted from "../components/Trusted";
import About from "../components/About";
import Blogs from "../components/Blogs";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import Internships from "../components/Internships";
import Sections from "../components/Sections";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <About />
      <Internships />
      <Blogs />
      <Reviews />
      <Sections />
      <Footer />
    </>
  );
};

export default Home;
