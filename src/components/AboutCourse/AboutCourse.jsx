import React from "react";
import "./AboutCourse.css";
import img from "../../assets/bgImages/eng.jpg";
import img4 from "../../assets/bgImages/wow2.jpg";
import img6 from "../../assets/bgImages/wow3.jpg";
import img5 from "../../assets/bgImages/women.jpg";
import img2 from "../../assets/bgImages/strip.jpg";
import img3 from "../../assets/bgImages/eng2.jpg";
const AboutCourse = () => {
  return (
    <section>
      <div className=" text-center about-course-container">
        <h1 className="mt-3 text-5xl text-red-500 font-bold">
          Who can learn and get trained from us?
        </h1>
        <div className=" flex flex-wrap items-center justify-center gap-5 w-full my-4 img-container">
          <div className="image z-1 relative">
            <img height={600} className="z-1" width={500} src={img4} alt="" />
            <div
              style={{ zIndex: "3" }}
              className="flex-col items-center justify-center absolute-info z-3 text-right absolute pr-3 bottom-0 right-0 w-full h-20"
            >
              <h1 style={{ color: "white", fontWeight:"bold" }} className="text-2xl font-bold">
                10th & 12th pass out
              </h1>
              <p className="text-white font-semibold">
                Courses are available for new students who passed in class 10th
                and 12th can get started in this field.
              </p>
            </div>
          </div>

          <div className="image z-1 relative">
            <img height={600} className="z-1" width={500} src={img5} alt="" />
            <div
              style={{ zIndex: "3" }}
              className=" flex-col items-center justify-center absolute-info mb-2 z-3 text-right absolute pr-3 bottom-0 right-0 w-full h-20"
            >
              <h1 style={{ color: "white", fontWeight:"bold" }} className="text-2xl font-bold">
                Graduates
              </h1>
              <p className="text-white font-semibold">
                Courses are available for students who graduated from a
                University can get started in this field.
              </p>
            </div>
          </div>
          <div className="image z-1 relative">
            <img height={600} className="z-1" width={500} src={img6} alt="" />
            <div
              style={{ zIndex: "3" }}
              className=" flex-col items-center justify-center  absolute-info z-3 text-right absolute pr-3 bottom-0 right-0 w-full h-20"
            >
              <h1 style={{ color: "white", fontWeight:"bold" }} className="text-2xl font-bold">
                Working Professionals
              </h1>
              <p className="text-white font-semibold">
                Courses are available for all the working professionals who have
                some experience in this field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
