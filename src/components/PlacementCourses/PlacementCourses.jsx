import React, { useEffect, useState } from "react";
import "./PlacementCourses.css";
import { Link } from "react-router-dom";

const PlacementCourses = () => {
  const [data, setData] = useState([]);
  const getData = () => [
    fetch("/courseDetails.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      }),
  ];
  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{background:"#f5f4f4"}} className="course-container">
      <h3 style={{ marginTop: "4rem" }}>
        100% Guaranteed Placement Assistance Courses
      </h3>
      <h1>Our Courses</h1>
      <p>Long-term Courses</p>
      <div className="courses">
        {data?.map((c, i) =>
          c.duration === "1 Year" ? (
            <Link to={`/course/${c.id}`}>
            <div className="course course-all" key={i}>
              <div className={c.duration === "1 Year" ? "strip" : "hidden"}>
                100% Guaranteed Placement Assistance
              </div>
              <h3>Course Code</h3>
              <h2>Course Name: {c.course}</h2>
              <h3>Duration: {c.duration}</h3>
              <h3 style={{ marginBottom: "2rem" }}>
                Eligibility: {c.eligibility}
              </h3>
              <div className="course-btn">
                <Link to={`/course/${c.id}`}>
                  <button>Register Now</button>
                </Link>
              </div>
            </div>
            </Link>
          ) : (
            <div></div>
          )
        )}
      </div>
    </div>
  );
};

export default PlacementCourses;
