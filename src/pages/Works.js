import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../assets/styles/works.css"
import imgData from "../assets/images/portfolio/index.js"

const Portfolio = () => {
  const info = [...imgData]

  return (
    <>
      {info.map((portfolioData) => {
        return (
          <div className="portfolio">
            <div className="portfolio-image">
              <img src={portfolioData.img} alt="portfolio" />
            </div>
            <div className="portfolio-content">
              <h3>{portfolioData.title}</h3>
              <p>{portfolioData.description}</p>
              <button className="portfolio-btn">
                <a href={portfolioData.url}>Visit Site</a>
              </button>
            </div>
          </div>
        )
      })}
    </>
  )
}

function Works() {
  return (
    <>
      <Header />
      <section className="works_hero">
        <h2 className="section_title"> My Works</h2>

        <div className="portfolios">
          <Portfolio />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Works
