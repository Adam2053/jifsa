import React from "react";
import "./AboutCareer.css";
import img from "../../assets/bgImages/mission.jpg";
import img3 from "../../assets/bgImages/eng.jpg";
import img6 from "../../assets/bgImages/eng2.jpg";
import img4 from "../../assets/bgImages/safe.jpg";
import img5 from "../../assets/bgImages/safe2.jpg";
import img1 from "../../assets/bgImages/man1.jpg";
import img2 from "../../assets/bgImages/man2.jpg";
import { Link } from "react-router-dom";

const AboutCareer = () => {
  return (
    <section style={{display:"flex", flexDirection:"column"}} className="p-5 justify-center items-center">
      <h1 className=" text-center mb-6 md:text-5xl font-bold text-red-500">
        How can we help build your career?
      </h1>
      <div className="help-container w-full flex flex-wrap items-center justify-center gap-5 ">
        <div className="card-help max-w-[500px]">
          <img height={500} width={500} src={img3} alt="" />
          <h1 className="text-3xl font-semibold">Safety Officer</h1>
          <p className="text-lg md:text-sm">
            We Provide Specialise courses for safety officers
          </p>
        </div>
        <div className="card-help max-w-[500px]">
          <img height={500} width={500} src={img4} alt="" />
          <h1 className="text-3xl font-semibold">Safety Inspector</h1>
          <p className="text-lg">
            Full safety courses available by JIFSA Chandrapur
          </p>
        </div>
        <div className="card-help max-w-[500px]">
          <img height={500} width={500} src={img6} alt="" />
          <h1 className="text-3xl font-semibold">Safety Supervisor</h1>
          <p className="text-lg">
            Jumpstart your Safety career with us
          </p>
        </div>
        <div className="card-help max-w-[500px]">
          <img height={500} width={500} src={img} alt="" />
          <h1 className="text-3xl font-semibold">Fire Man</h1>
          <p className="text-lg">
            Jumpstart your fire man career with us
          </p>
        </div>
      </div>
      <Link to="/course">
        <div style={{ marginTop: "2rem" }} className="btn-container">
          <button>Get Started</button>
        </div>
      </Link>
    </section>
  );
};

export default AboutCareer;
