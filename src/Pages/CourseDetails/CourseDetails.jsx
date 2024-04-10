import React, { useEffect, useRef, useState } from "react";
import "./CourseDetails.css";
import { Link, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import Details from "../../components/Details/Details";
const CourseDetails = () => {
  const courseId = useParams();
  const { id } = courseId;
  const [course, setCourse] = useState([]);
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const getData = () => [
    fetch("/allCourse.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (myJson) {
        setCourse(myJson);
      }),
  ];

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fga1n1a",
        "template_0847mgq",
        form.current,
        "m5Fw5f6xcj6hQvmRN"
      )
      .then(
        (result) => {
          toast.success("Email Sent Successfully");
          console.log("this ran");
          //   console.log(result.text);
          setLoading(false);
          return;
        },
        (error) => {
          // console.log(error.text);
          setLoading(false);
          toast.error("Email Not Sent");
          return;
        }
      );
  };

  const handleChange = () => {};

  useEffect(() => {
    getData();
  }, []);
  const courseData = course.find((e) => e.id === parseInt(id));
  console.log(courseData);

  // name, fathername, dob, highestqualification, coursename, contactnumber, 2nd contact emailid

  return (
    <>
      <section className="details-container">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="details-left">
          <h3>ST. JOSEPH'S INTERNATIONAL FIRE AND SAFETY ACADEMY</h3>
          <h1>Book Your Slot</h1>
          <div className="course-card">
            <div className="course details-card">
              <div
                className={
                  courseData?.duration === "1 Year" ? "strip" : "hidden"
                }
              >
                100% Guaranteed Placement Assistance
              </div>
              <h3 className="mt-3">Course Code</h3>
              <h2>Course Name: {courseData?.course} </h2>
              <h3>Duration: {courseData?.duration}</h3>
              <h3 style={{ marginBottom: "2rem" }}>
                Eligibility:{courseData?.eligibility}
              </h3>
            </div>
          </div>
          <p>Enroll in this course by filling up the form</p>
        </div>
        <div className="details-right">
          <h1>Register Now</h1>
          <form id="form" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Father Name"
              name="father"
              required
              onChange={handleChange}
            />
            {courseData ? (
              <input
                type="text"
                value={courseData?.course}
                name="course"
                readOnly
              />
            ) : (
              <div></div>
            )}
            <input
              type="number"
              placeholder="Contact No."
              name="contact"
              required
              onChange={handleChange}
            />

            <input
              type="email"
              placeholder="email id"
              name="email"
              required
              onChange={handleChange}
            />
          </form>
          <div className="details-btn">
            {loading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            ) : (
              <button form="form" onClick={sendEmail} type="submit">
                Register
              </button>
            )}
          </div>
        </div>
      </section>
      {courseData?.details && (
        <div className="details-course-container m-auto">
          <Details name={courseData?.course} details={courseData?.details} />
        </div>
      )}
        
    </>
  );
};

export default CourseDetails;
