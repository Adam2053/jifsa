import React from "react";
import "./Hero.css";
import img1 from "../../assets/banner1.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <section className="hero-container">
        <div className="hero-text">
          {/* <h3>
            <span>ST. </span> JOSEPH'S INTERNATIONAL FIRE AND SAFETY ACADEMY
          </h3> */}
          <h1>
            WELCOME TO
          </h1>
          <div className="side">
            <p>
              No.1 National & International Brand In Fire, Safety, OHS & HSE
              Practical Training
            </p>
            <h1 >
              JiFSA <br /> CHANDRAPUR
            </h1>
            
          </div>
        </div>
        <div className="btn-container">
          <Link to='/course' ><button>Explore Now</button></Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
