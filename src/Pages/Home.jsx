import React from 'react'
import Section from '../components/Section/Section'
import Success from '../components/Success/Success'
import About from '../components/About/About'
import Hero from '../components/Hero/Hero'
import Testimonials from '../components/Testimonials/Testimonials'
import AboutCourse from '../components/AboutCourse/AboutCourse'
import PlacementCourses from '../components/PlacementCourses/PlacementCourses'
import AboutCareer from '../components/AboutCareer/AboutCareer'
import ShortCourses from '../components/ShortCourses/ShortCourses'
import Faq from '../components/Faq/Faq'

const Home = () => {
  return (
    <>
        <Hero />
        <AboutCourse />
        {/* <Section /> */}
        <PlacementCourses />
        <Success />
        <AboutCareer />
        <hr />
        <ShortCourses />
        <About />
        <Testimonials />
        <Faq />
    </>
  )
}

export default Home