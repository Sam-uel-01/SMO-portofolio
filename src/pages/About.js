import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../assets/styles/about.css"
import mine from "../assets/images/mine.jpeg"

function About() {
  return (
    <>
      <Header />
      <section className="about_hero">
        <h2 className="section_title-about">Who I am</h2>
        <p className="section_subtitle-about">
          Frontend Engineer - ReactJs & NodeJS
        </p>

        <div className="about__body">
          <p>
            I am experienced in both developing websites using React JS and
            NodeJS and designing them using WordPress. My goal is to create
            websites that are not only visually appealing but also function
            seamlessly across all devices. I have the ability to work with
            WordPress and ReactJS, NodeJS to create high-performance and
            efficient websites. If you have a project that requires my skills in
            both front-end web design and development, please feel free to reach
            out to me.
          </p>
          <h3 className="skills-title">
            Skills - <br />
            <small>Technologies/Frameworks/ Libraries</small>
          </h3>
          <p>
            <ul>
              <li>HTML5 | CSS | JavaScript</li>
              <li>WordPress</li>
              <li>Tailwind | ReactJS | Redux</li>
              <li>NodeJS | ExpressJS | MongoDB</li>
            </ul>
          </p>
        </div>
        <div className="image">
          <img src={mine} alt="Samuel M. Ortil" className="about-me_img" />
          <h3 className="skills-title">Soft Skills</h3>
          <p>
            <ul>
              <li>Excellent Collaboration/Teamwork</li>
              <li>Emotional Intelligence</li>
              <li>Fast Learner</li>
              <li>Excellent Communication Skills</li>
              <li>Time Management</li>
              <li>Accountability</li>
            </ul>
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About
