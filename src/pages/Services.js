import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../assets/styles/services.css"

function Services() {
  return (
    <>
      <Header />
      <section className="services_hero">
        <h2 className="section_title">What I do</h2>
        <div className="services">
          <div className="service">
            <h3>Frontend Design</h3>
            <p>
              I specialize in creating visually pleasing and functional websites
              using HTML, CSS and Javascript. My goal is to ensure that my
              designs can be accessed and used seamlessly on any device that has
              internet access. If you have a project that requires my expertise
              in front-end web development, I would be happy to hear from you
              and discuss how I can help.
            </p>
          </div>

          <div className="service">
            <h3>Digital Marketing</h3>
            <p>
              Do you want to increase your business online visibility and drive
              more sales? I specialize in creating and implementing digital
              marketing campaigns for businesses. I have a deep understanding of
              various digital marketing channels, such as search engine
              optimization (SEO), social media marketing, email marketing, and
              pay-per-click (PPC) advertising.
            </p>
          </div>

          <div className="service">
            <h3>Wordpress Development</h3>
            <p>
              I am skilled in designing websites using WordPress and I strive to
              create designs that are visually attractive and easy to use on any
              device that has internet access. In addition to my proficiency in
              HTML, CSS and JavaScript, I have experience using WordPress to
              create effective and efficient websites. If you have a project
              that requires my wordpress skills in WordPress design, please
              don't hesitate to contact me.
            </p>
          </div>
        </div>
        <div className="services-btn">
          <button className="services-button">My Works</button>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Services
