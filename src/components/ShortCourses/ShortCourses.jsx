import React, { useEffect, useState } from "react";
import "./ShortCourses.css";
import { Link } from "react-router-dom";

const ShortCourses = () => {
  const [newData, setNewData] = useState([]);

  const getNewData = () => {
    fetch("/courseDetails2.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (myjson) {
        setNewData(myjson);
      });
  };

  useEffect(() => {
    getNewData();
  }, []);
  return (
    <section className="course-container">
      <h1>Short-Term Courses</h1>
      <div className="courses">
        {newData?.map((c, i) => (
          <Link to={`/course/${c.id}`}>
            <div className="course course-all" key={i}>
              <h3>Course Code</h3>
              <h2>Course Name: {c.course}</h2>
              <h3>Duration {c.duration}</h3>
              <h3 style={{ marginBottom: "2rem" }}>
                Eligibility {c.eligibility}
              </h3>
              <div className="course-btn">
                <Link to={`/course/${c.id}`}>
                  <button>Register Now</button>
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ShortCourses;
