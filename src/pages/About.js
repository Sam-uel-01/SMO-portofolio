import React from "react"
import Header from "../components/Header"
// import Footer from "../components/Footer"
import mine from "../assets/images/mine.jpeg"

function About() {
  return (
    <>
      <Header />
      <section className="about_hero">
        <h2 className="section_title section_title-about">Who I am</h2>
        <p className="section_subtile">Lorem ipsum dolor sit amet.</p>

        <div className="about__body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, unde.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            magni!
          </p>
          <img src={mine} alt="Samuel M. Ortil" />
        </div>
      </section>
      {/* <Footer /> */}
    </>
  )
}

export default About
