import React, { useState } from "react";
import "./Success.css";
import Card from "../Card/Card";
import img1 from "../../assets/bgImages/bg2.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import logo from '../../assets/logo.png';

const Success = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      
        <section className="success-container">
          <h1 style={{display:"flex", marginBottom:"1.5rem"}}>
            <img className="logo-img" src={logo} style={{minHeight:"2rem", width:"10rem", marginRight:"1rem"}} alt="" />
            <span className="span-success" style={{ color: "white", fontSize:"4rem" }}>Count Of Success</span>
          </h1>
          <h3>
            <span>ST. </span>JOSHEPH'S INTERNATIONAL FIRE AND SAFETY ACADEMY
          </h3>
          <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(false)}>

          <div className="cards">
            <div className="card">
              <h1>J</h1>
              <span>ifsa</span>
              <span> Chandrapur</span>
              <span className="subheading">is Recognised</span>
              <h3>{'+'}{counterOn && <CountUp style={{color:"var(--text-color-2)"}} start={0} end={2000} duration={2} delay={0}/>}</h3>
              <p>National & International Companies</p>
            </div>
            <div className="card">
              <h1>J</h1>
              <span>ifsa</span>
              <span> Chandrapur</span>
              <span className="subheading">students over</span>
              <h3>{'+'}{counterOn && <CountUp style={{color:"var(--text-color-2)"}} start={0} end={12000} duration={2} delay={0}/>}</h3>
              <p>Are placed in Reputed Companies</p>
            </div>
            <div className="card">
              <h1>J</h1>
              <span>ifsa</span>
              <span> Chandrapur</span>
              <span className="subheading">has Collection of</span>
              <h3>{'+'}{counterOn && <CountUp style={{color:"var(--text-color-2)"}} start={0} end={3500} duration={2} delay={0}/>}</h3>
              <p>Equipments in Academic Space</p>
            </div>
          </div>
          </ScrollTrigger>
        </section>
      {/* <img style={{ width: "100%", height: "200px" }} src={img1} alt="" /> */}
    </>
  );
};

export default Success;
