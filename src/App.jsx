import React from "react";
import { Carousel } from "flowbite-react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./Pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import Course from "./Pages/Course/Course.jsx";
import AboutPage from "./Pages/About/AboutPage.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import CourseDetails from "./Pages/CourseDetails/CourseDetails.jsx";
import ScrollToTop from "./components/ScrollToTop.js";

const App = () => {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
