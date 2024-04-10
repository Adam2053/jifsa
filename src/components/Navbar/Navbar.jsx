import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";
import logo1 from "../../assets/partner/logo1.png";
import logo2 from "../../assets/partner/logo2.jpg";
import logo3 from "../../assets/partner/logo3.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [open, setOpen] = useState("hidden");
  const [close, setClose] = useState("hidden");
  const windowWidth = window.innerWidth;
  console.log(windowWidth);
  const handleClose = () => {
    if(close==='hidden') {
      setClose('block');
    }else{
      setClose('hidden');
    }
  };
  useEffect(() => {
    if (window.innerWidth > 768) {
      setOpen("block");
    } else {
      setOpen("hidden");
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        setOpen("block");
      } else {
        setOpen("hidden");
      }
    });
  });
  console.log(open);
  return (
    <>
      <div className="w-full flex items-center justify-between nav-container">
        <Link to="/">
          <img style={{ height: "40px" }} src={logo} alt="logo" />
        </Link>
        <img className="partners-img" src={logo1} alt="" />
        <img className="partners-img" src={logo2} alt="" />
        <img className="partners-img" src={logo3} alt="" />
        <div
          style={{
            width: "50vw",
            height: "100vh",
            background: "white",
          }}
          className={`absolute ham top-0 right-0 ${close}`}
        >
          <ul className="flex flex-col p-5">
            <li>
              <Link onClick={handleClose} to="/">Home</Link>
            </li>
            <li>
              <Link onClick={handleClose} to="/course">Courses</Link>
            </li>
            <li>
              {/* <div class="dropdown"> */}
                <Link onClick={handleClose} to="/about" class="dropbtn">
                  About
                </Link>
                {/* <div class="dropdown-content">
                  <Link onClick={handleClose} to="/gallery" href="#">
                    Gallery
                  </Link>
                  <Link onClick={handleClose} to="/about" href="#">
                    About Jifsa
                  </Link>
                </div> */}
              {/* </div> */}
            </li>
            <li>
              <Link onClick={handleClose} to="/contact">Contact</Link>
            </li>
            <h3 className="font-semibold absolute bottom-0">JIFSA All rights reserved</h3>
            <IoMdClose
              size={50}
              onClick={handleClose}
              className="absolute top-30 right-0"
            />
          </ul>
        </div>
        {open === "hidden" ? (
          <GiHamburgerMenu onClick={handleClose} size={30} className="hamburger" />
        ) : (
          <div className="flex items-center nav-list-content">
            <ul className={`flex `}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/course">Courses</Link>
              </li>
              <li>
                {/* <div class="dropdown"> */}
                  <Link to="/about" >
                    About
                  </Link>
                  {/* <div class="dropdown-content">
                    <Link to="/gallery" href="#">
                      Gallery
                    </Link>
                    <Link to="/about" href="#">
                      About Jifsa
                    </Link>
                  </div> */}
                {/* </div> */}
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <button className="nav-btn">
              {" "}
              <Link to="/contact">REGISTER</Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
