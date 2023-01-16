import React from "react"
import Header from "../components/Header"
import Footer from "./../components/Footer"
import "../assets/styles/home.css"
import mine from "../assets/images/mine.jpeg"

function Home() {
  return (
    <>
      <Header />
      <section className="hero">
        <h1 className="section_title-home">
          Hi, I am <strong>Samuel M. Ortil</strong>
        </h1>
        <p className="section_subtitle">Frontend Engineer</p>
        <img src={mine} alt="Samuel M. Ortil" className="home-img" />
      </section>
      <br />

      <Footer />
    </>
  )
}

export default Home
