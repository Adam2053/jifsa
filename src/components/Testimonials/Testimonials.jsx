import React from "react";
import "./Testimonials.css";
// import pfp1 from  '../../assets/Profiles/pfp1.png'
// import pfp2 from  '../../assets/Profiles/pfp2.png'
// import pfp3 from  '../../assets/Profiles/pfp3.png'
// import pfp4 from  '../../assets/Profiles/pfp4.png'
// import pfp5 from  '../../assets/Profiles/pfp5.png'
// import pfp6 from  '../../assets/Profiles/pfp6.png'
import star from "../../assets/Profiles/star.png";
import data from "../../assets/testimonials.json";
const Testimonials = () => {
  return (
    <section className="testi-container">
      <h1>Our Testimonials</h1>
      <div className="testi-cards-container">
        {data.map((c, i) => (
          <div className="testi-card">
            <img src={c.pfp} alt="" />

            <h3>{c.name}</h3>
            <img className="star" src={star} alt="" />
            <p>{c.testi}</p>
          </div>
        ))}

        {/* <div className="testi-card">
                <img src={pfp1} alt="" />
                <h3>Name</h3>
                <img className='star' src={star} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus possimus repellendus a vel dolor sapiente explicabo tempora. In, sunt voluptas?</p>
            </div>
            <div className="testi-card">
                <img src={pfp1} alt="" />
                <h3>Name</h3>
                <img className='star' src={star} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus possimus repellendus a vel dolor sapiente explicabo tempora. In, sunt voluptas?</p>
            </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
