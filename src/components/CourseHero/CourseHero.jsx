import React from "react";
import "./CourseHero.css";
import img1 from "../../assets/bgImages/wewe.jpeg";
import { Link } from "react-router-dom";

const CourseHero = () => {
  return (
    <section style={{ paddingTop: "2rem" }} className="p-6">
      <h1 className="md:text-5xl text-red-600 font-bold text-center">
        JIFSA's COURSES
      </h1>
      <div
        style={{
          paddingInline: "15rem",
          paddingBlock: "2rem",
          justifyContent: "space-around",
        }}
        className="course-hero-content flex flex-wrap items-center"
      >
        <div className="course-hero-content-left">
          <img style={{ borderRadius: "10px" }} src={img1} alt="" />
        </div>
        <div
          style={{ width: "30%", lineHeight: "2rem" }}
          className="course-hero-content-right"
        >
          <h1
            style={{ color: "black" }}
            className=" text-3xl mb-3 font-semibold"
          >
            Course Highlights
          </h1>
          <p style={{ color: "black" }} className="mb-3 text-lg">
            JIFSA, located in Chandrapur, Maharashtra, offers comprehensive fire
            and safety courses designed to equip individuals with vital skills
            for preventing, managing, and extinguishing fires. With expert
            instructors and state-of-the-art facilities, students receive
            hands-on training in fire safety protocols, hazard identification,
            and emergency response techniques, ensuring a safer workplace and
            community.
          </p>
          <div className="flex">
            <div style={{ marginTop: "1rem" }} className="btn-container">
              <Link to="/contact">
                <button>Register</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
