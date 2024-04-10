import React from "react";
import "./Section.css";
import img from "../../assets/bgImages/img1.png";
import { Link } from "react-router-dom";
const Section = () => {
  return (
    <section className="section-1">
      <div className="sec-1-content">
        <h3>
          <span>ST. </span>JOSEPH'S INTERNATIONAL FIRE AND SAFETY ACADEMY
        </h3>
        <div className="bot">
          <div className="sec-1-left">
            <img src={img} alt="" />
          </div>
          <div 
          className="sec-1-right">
            <h1>
              Welcome To JIFSA Education & Technical Services Private Limited
            </h1>
            <p>
              JIFSA provides occupational health and safety training and
              qualification, industrial safety training, industrial safety
              course, safety officer courses, Industrial safert courses, fire
              safety course, safety engineering courses from govt. recognised
              certification authorities, our syllabuses are match with world's
              reconised institutions in Occupational health and safety and
              industrial safety etc. syllabus , our training centre has not just
              3000+ equipments but modern and latest industrial use equipments
              available to learn and practical, 10 Acres practical training
              ground to do all huge practicals real time experiences, digital
              learning material online virtual classes make your qualification
              to easy access. fire safety college Education is not like filling
              a bucket, it is to kindle a fire within. Each one of us has got
              enormous potential waiting to be picked and polished. And that is
              all that we do at JIFSA- recognizing the hidden talent and innate
              ability of our students and then facilitating their knowledge
              acquisition in our modern class rooms equipped with state-of-art
              gadgets and teaching aids.
            </p>
            <Link to='/about'><div
            style={{marginTop:"2rem"}} className="btn-container">
              <button>Read More</button>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
