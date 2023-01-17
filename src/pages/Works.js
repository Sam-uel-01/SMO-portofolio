import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../assets/styles/works.css"
import mine from "../assets/images/mine.jpeg"

function Works() {
  return (
    <>
      <Header />
      <section className="works_hero">
        <h2 className="section_title"> My Portfolio</h2>

        <div className="portfolio">
          <a href="www.google.com" className="portfolio_item">
            <img src={mine} alt="portfolio" />
          </a>
          <h3>School Website</h3>
        </div>

        <div className="portfolio">
          <a href="www.google.com" className="portfolio_item">
            <img src={mine} alt="portfolio" />
          </a>
          <h3>School Website</h3>
        </div>

        <div className="portfolio">
          <a href="www.google.com" className="portfolio_item">
            <img src={mine} alt="portfolio" />
          </a>
          <h3>School Website</h3>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Works
