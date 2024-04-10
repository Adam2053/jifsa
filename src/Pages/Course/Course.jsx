import React, { useEffect, useState } from "react";
import "./Course.css";
import { Link } from "react-router-dom";
import CourseHero from "../../components/CourseHero/CourseHero";
import AboutCourse from "../../components/AboutCourse/AboutCourse";
import PlacementCourses from "../../components/PlacementCourses/PlacementCourses";
import Job from "../../components/Job/Job";

const Course = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);

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
    getData();
    getNewData();
  }, []);

  return (
    <section className="course-container">
      <CourseHero />
      <Job />
      <AboutCourse />
      <PlacementCourses />
      <h3 style={{ marginTop: "4rem" }}>
        ST. JOSEPH'S INTERNATIONAL FIRE AND SAFETY ACADEMY
      </h3>
      <h1>Our Courses</h1>
      <p>Courses may update in future</p>
      <div className="courses">
        {data?.map((c, i) =>
          c.duration === "1 Year" ? (
            <div className="hidden"></div>
          ) : (
            <Link to={`/course/${c.id}`}>
              <div className="course course-all" key={i}>
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
          )
        )}
      </div>
      <h3 style={{ marginTop: "4rem" }}>
        ST. JOSEPH'S INTERNATIONAL FIRE AND SAFETY ACADEMY
      </h3>
      <h1>DGMS First Aid Course</h1>
      <p>Courses may update in future</p>
      <div className="courses">
        {data?.map((c, i) =>
          c.course === "DGMS-FIRST AID PROGRAMME" ? (
            <Link to={`/course/${c.id}`}>
              <div className="course course-all" key={i}>
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
            <div className="hidden"></div>
          )
        )}
      </div>
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

export default Course;
