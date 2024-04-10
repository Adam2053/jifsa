import React from "react";
import "./AboutPage.css";
import img1 from "../../assets/bgImages/abt2.jpg";
import img2 from "../../assets/bgImages/miss.jpg";
import img3 from "../../assets/bgImages/profile1.jpg";
import img4 from "../../assets/bgImages/ach1.jpg";
import img5 from "../../assets/bgImages/ach2.jpg";

import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <section className="cont-1">
      <div style={{ marginBottom: "5rem" }} className="cont-cont">
        <h1 className="text-5xl mb-5 text-center font-bold">Our Brochure</h1>
        <div className="wow flex gap-3">
          <div style={{ width: "90vw" }} className="abt-1">
            <div className="flex flex-col w-max items-center justify-center">
              <h1 className="text-4xl font-semibold">
                FUTURE PROSPECTS & SCOPE FOR GROWTH AFTER ACQUIRING A
                PROFESSIONAL QUALIFICATION IN FIRE & SAFETY
              </h1>
              <PiDotsThreeOutlineFill size={50} />
            </div>

            <p>
              There is no limit of career opportunities for Fire & Safety
              Professionals in Process Industries, Construction Projects, and
              Service Sector both in Government as well as Private
              Organisations. This advantage is not only going to persist as it
              is, looks like it is slated for an upswing making this field even
              more lucrative in the days to come.
            </p>
            <br />
            <p>
              An accident spells doom for the unfortunate victims and a peril no
              less for the organization. No matter whether it is caused by a
              human error of judgment or lack of precaution or a mechanical
              failure (which could in turn have arisen either due to faulty
              design or poor material or faulty workmanship/maintenance), or
              careless handling of heavy materials, or owing to leakage of
              certain gases or radiations - an accident is an accident, and it's
              the business of the management team to see that it is avoided. The
              onus legally lies on the Unit Head/Occupier and functionally on
              the Safety Manager- the ceaseless concern of both these being to
              safeguard against such accidents.
            </p>
            <br />
            <p>
              Accidents are likely to happen in welding, cutting, or demolishing
              operations at insecure locales as well as in working at heights,
              on scaffolds, on fragile roofs and in trench making etc. These
              situations could present themselves in any of the large number of
              Industrial or Construction Work Sites. Ironically, stacked behind
              each of these workplaces are the career opportunities for Fire &
              Safety men. And if we can see the writing on the wall it's not
              hard to figure out that these are abundant!
            </p>
            <br />
            <h1 className="text-4xl font-semibold">Download Our Brochure</h1>
            <div className="flex">
              <div style={{ marginTop: "1rem" }} className="btn-container">
                <Link to="/course">
                  <button>Download Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div
            style={{ width: "100%" }}
            className="abt-2 flex items-center justify-center"
          >
            <img style={{ width: "100%" }} src={img5} alt="" />
          </div>
        </div>
      </div>
      <div className="cont-cont">
        <h1 className="text-5xl mb-5 text-center font-bold">About</h1>
        <div className=" wow flex gap-3">
          <div className="abt-1">
            <div className="flex flex-col w-max items-center justify-center">
              <h1 className="text-4xl font-semibold">VISION</h1>
              <PiDotsThreeOutlineFill size={50} />
            </div>
            <ul>
              <li>
                <FaCheck className="mt-1" size={20} />
                <p className="text-lg">
                  Our vision is to frame up a National and International level
                  of training centre in the field of Fire and Safety.
                </p>
              </li>
              <li>
                <FaCheck className="mt-1" size={20} />
                <p className="text-lg">
                  To have a world class setup for fire and safety training,
                  where our new research and development, can make the world a
                  better place to be in.
                </p>
              </li>
              <li>
                <FaCheck className="mt-1" size={20} />
                <p className="text-lg">
                  To provide a platform for the students to learn and practice
                  their skills in the field of drilling.
                </p>
              </li>
              <li>
                <FaCheck className="mt-1" size={20} />
                <p className="text-lg">
                  JIFSA Chandrapur to set up a bench mark for its high standard of training
                  in global scenario: so people may observe and identify the
                  difference : because of its quality and uniqueness .
                </p>
              </li>
              <li>
                <FaCheck className="mt-1" size={20} />
                <p className="text-lg">
                  JIFSA Chandrapur will lead higher education in preparing students for
                  innovative, creative, and successful careers in a global
                  society.
                </p>
              </li>
              <li>
                <FaCheck className="mt-1" size={20} />
                <p className="text-lg">
                  The college of education will be a world leader in the
                  integration of : - Preparing and learning. - Augmentation of
                  the knowledge base through practical training and scholarship.
                  - Leadership in service and outreach. - Preparing and learning
                  Afore, it will be a world leader in preparing professionals.
                  Who provide leadership and exemplary scholastic and related
                  services to improve the lives of individuals; in this changing
                  and complex global society
                </p>
              </li>
            </ul>
          </div>
          <div className="abt-2 flex items-center justify-center">
            <img style={{ width: "100%" }} src={img1} alt="" />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "5rem" }} className="cont-cont">
        <h1 className="text-5xl mb-5 text-center font-bold">Our Mission</h1>
        <div className=" wow flex gap-3">
          <div style={{ width: "90vw" }} className="abt-1">
            <div className="flex flex-col w-max items-center justify-center">
              <h1 className="text-4xl font-semibold">Mission</h1>
              <PiDotsThreeOutlineFill size={50} />
            </div>
            <ul>
              <li>
                <FaCheck className="mt-1 mr-1" size={20} />
                <p className="text-lg">
                  JIFSA Chandrapur's mission is to provide a range of career-oriented
                  programs with the goal of producing creative professionals who
                  are well prepared for career in a global network.
                </p>
              </li>
              <li>
                <FaCheck className="mt-1 mr-1" size={20} />
                <p className="text-lg">
                  We strive to provide quality education training, which is
                  affordable and has 100% job availability.
                </p>
              </li>
              <li>
                <FaCheck className="mt-1 mr-1" size={20} />
                <p className="text-lg">
                  JIFSA Chandrapur is committed to mutually enriching relationships with
                  government, business, our old student and world community.
                </p>
              </li>
              <li>
                <FaCheck className="mt-1 mr-1" size={20} />
                <p className="text-lg">
                  JIFSA Chandrapur endeavour would be for the all-round development of the
                  students.
                </p>
              </li>
              <li>
                <FaCheck className="mt-1 mr-1" size={20} />
                <p className="text-lg">
                  JIFSA Chandrapur has aimed to open 100 centers all over the India by the
                  year 2022.
                </p>
              </li>
              <li>
                <FaCheck className="mt-1 mr-1" size={30} />
                <p className="text-lg">
                  JIFSA Chandrapur is committed to set up the best an ultra-modern Fire &
                  Safety Practical ground of India having its own distinct
                  recognition - equipped with latest apparatus, modern, hi-tech
                  and handy facilities by the year 2021.
                </p>
              </li>
            </ul>
          </div>
          <div
            style={{ width: "100%" }}
            className="abt-2 flex items-center justify-center"
          >
            <img style={{ width: "100%" }} src={img2} alt="" />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "5rem" }} className="cont-cont">
        <h1 className="text-5xl mb-5 text-center font-bold">Profile</h1>
        <div className="wow flex gap-3">
          <div style={{ width: "90vw" }} className="abt-1">
            <div className="flex flex-col w-max items-center justify-center">
              <h1 className="text-4xl font-semibold">
                Fire Safety & Security Training Solutions – World Class
                standards in training
              </h1>
              <PiDotsThreeOutlineFill size={50} />
            </div>
            <p>
              Education is not like filling a bucket, it is to kindle a fire
              within. Each one of us has got enormous potential waiting to be
              picked and polished. And that is all that we do at JIFSA Chandrapur-
              recognizing the hidden talent and innate ability of our students
              and then facilitating their knowledge acquisition in our modern
              class rooms equipped with state-of-art gadgets and teaching aids.
              Our team of experienced industry professionals turned instructors
              leave nothing to chance. These are the persons who have earlier
              indulged themselves in the practical field. They now dedicate
              their experience and toil hard, sweating with each and every
              student, until the inputs have been fully understood and
              internalized. Use of Personal Protective Equipment, Total
              Protection Equipment, Breathing Apparatus etc. becomes a second
              nature to them. They get accustomed to practice safety in
              excavation, trench forming and confined space entry etc. They are
              given drills in the use of Fire Hydrants, Sprinklers, Foam Making
              Equipment and responding to Fire Alarms etc. Add to it the
              valuable practical exposure during the Industrial Visits, and the
              priceless hands-on training that they acquire during the
              internship/attachments at the industrial units and you have the
              formidable Fire and Safety man for all seasons!
            </p>
            <br />
            <p>
              Industries assign a high priority to the functional departments
              whose discretion, speed and timeliness of action has a significant
              bearing on the organisation's ability to deliver on time and
              without loss of life or property. It is in this sense that the
              Fire and Safety people gain centre stage. The responsibility is
              onerous. But so are the rewards. Only you must be the thorough
              professional everybody is looking for and you can be a chooser! It
              is these heart warming ingredients of a successful Fire and Safety
              man that lie at the heart of our institutional approach to
              grooming the students for sure shot deliverance. We pride in our
              ace tie-ups, we are grateful to the industry partners, and we
              equally adore our committed faculty because it is the synergy of
              these three that keeps us ahead of the competition!
            </p>
            <br />
            <p>
              This is one place where the students come first. The least that
              they expect from us is to be treated like dignified, adult
              friends. Yes, that's precisely how our faculty looks at them.
              Giving each one of them the personal and individual attention so
              necessary to ensure that they learn at their own pace in their own
              unique manner. Apart from the course coverage in terms of the
              prescribed syllabus, we take time out to help them rediscover
              themselves and know their strengths and weaknesses to be able to
              bring about the required attitudinal moderations for the life
              ahead. Their personality development is equally our concern. We
              see to it that they improve upon their public speaking and become
              articulate so that they find no difficulty in striking a winning
              conversation during the interviews. They must pass out from our
              institute as competent professionals and confident individuals
              ready to catch the bull of competition by its horns!
            </p>
            <br />
            <h1 className="text-2xl font-bold">JIFSA Chandrapur ADVANTAGES</h1>
            <ul>
              <li>
                A team of hands dedicated trainers who will provide mentoring
                for all selected courses.
              </li>
              <li>
                Asia's finest and most established training provider, delivering
                to a wide spectrum of inshore construction and service
                industries and to offshore Oil & Gas and Marine industries.
              </li>
              <li>
                JIFSA Chandrapur is having vast practical ground with multiple apparatus
                where student can sharp up their practical knowledge with live
                experiment.
              </li>
              <li>
                JIFSA Chandrapur organizes training session for 10-15 days in which the
                participation of students from all over India
              </li>
              <li>
                JIFSA Chandrapur arranges industrial visit in mega project to enhance on
                their knowledge and view with expert and guest lecture from
                renowned and experienced personality.
              </li>
            </ul>
          </div>
          <div
            style={{ width: "100%" }}
            className="abt-2 flex items-center justify-center"
          >
            <img style={{ width: "100%" }} src={img3} alt="" />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "5rem" }} className="cont-cont">
        <h1 className="text-5xl mb-5 text-center font-bold">
          Our Placement Cell
        </h1>
        <div className="wow flex gap-3">
          <div style={{ width: "90vw" }} className="abt-1">
            <div className="flex flex-col w-max items-center justify-center">
              <h1 className="text-4xl font-semibold">About The Cell</h1>
              <PiDotsThreeOutlineFill size={50} />
            </div>
            <h1 className="text-2xl font-bold">
              JIFSA Chandrapur gives a platform to every student and provides them job
              assistance. Not only this we prepare the students from the root
              level and provide them:
            </h1>
            <ul>
              <li>Interview Preparation Classes</li>
              <li>Arrange Mock Sessions</li>
              <li>Interview Questions and Answers</li>
              <li>Personality Development Classes</li>
              <li>Guest Lecture.</li>
              <li>English Speaking Classes.</li>
              <li>Other Miscellaneous.</li>
            </ul>
            <p>
              The department has a cell looking after placement activities and
              management of placement schedules. The placement cell maintains a
              record of potential employers and contacts them on a regular
              basis. Past students of the department also provide referrals.
              Every year campus interviews are arranged by the placement cell.
            </p>
            <br />
            <p>
              With all above given guidelines students set their goals and
              become more confident for their interviews and get a good
              opportunity everywhere above their expectations. JIFSA Chandrapur first and
              last goal is to set the career of students and for this our
              placement cell strives a lot and gives the best opportunity to
              every student.
            </p>
            <br />
            <p>
              Students of JIFSA Chandrapur have to undergo full-time regular classes,
              compulsory different industrial exposure and mandatory part of 15
              days practical training program in our training ground itself in
              Korba ( C.G) which is associated in 10 acres of land with all fire
              & safety equipments, fire engine vehicle, advance techniques and
              equipments, trained by experienced industrial employees where
              students of every centre get trained for each and every Fire &
              Safety measures of different Industries , Constructions sites ,
              Airports, Hospitals, Malls etc. which develop the each students
              skills and knowledge about the particular fields.
            </p>
            <br />
            <p>
              After completing the courses, one can work as a plant safety
              manager, safety coordinator, fire protection manager in countries
              like UAE, Oman, Afghanistan, UK, Russia with companies like TFl
              international, British Petroleum, Shell Ormco Corporation,
              Petrofac, Technip, Omni Oil etc both National and International.
            </p>
            <br />
          </div>
          <div
            style={{ width: "100%" }}
            className="abt-2 flex items-center justify-center"
          >
            <img style={{ width: "100%" }} src={img4} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
