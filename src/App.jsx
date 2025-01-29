import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GraduatePrograms from "./pages/GraduatePrograms";
import CompanyCollab from "./pages/CompanyCollab";
import Contact from "./pages/Contact";
import JobPortal from "./pages/JobPortal";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/GraduateProgram" element={<GraduatePrograms />} />
          <Route path="/CompanyCollab" element={<CompanyCollab />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/JobPortal" element={<JobPortal />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
