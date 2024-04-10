import React from "react";
import "./About.css";
import img2 from "../../assets/bgImages/bg3.png";
import img3 from "../../assets/bgImages/herobg.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className="about-container">
      <div className="left-abt">
        <h1>About Us</h1>
        <img width={370} height={500} style={{opacity:"0.9", borderRadius:"1.3rem"}} src={img3} alt="image" />
      </div>
      <div className="right-abt">
        <h1>
          Ji<span>FSA</span>
        </h1>
        <h3>
          <span>ST.</span> JOSEPH'S INTERNATIONAL FIRE AND SAFETY ACADEMY
        </h3>
        <p>
          Recognizing the hidden talent and innate ability of our students and
          then facilitating their knowledge acquisition in our modern class
          rooms quipped with state-of-art gadgets and teaching aids.
        </p>

        <p style={{ marginTop: "1rem" }}>
          This is one place wherre the students come first. The least that they
          expect from us is to be treated like dignified, adult friends.
        </p>
        <Link to="/about">
          <div className="abt-btn">
            <button>Read More</button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default About;
