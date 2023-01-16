import React from "react"
import Header from "../components/Header"

function Services() {
  return (
    <>
      <Header />
      <section className="services_hero">
        <h2 className="section_title">What I do</h2>
        <div className="services">
          <div className="service">
            <h3>Design + Development</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              possimus dolorem totam commodi libero voluptatem quaerat saepe,
              mollitia magnam repellat.
            </p>
          </div>
          <div className="service">
            <h3>Digital Marketing</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              possimus dolorem totam commodi libero voluptatem quaerat saepe,
              mollitia magnam repellat.
            </p>
          </div>
          <div className="service">
            <h3>Wordpress Development</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              possimus dolorem totam commodi libero voluptatem quaerat saepe,
              mollitia magnam repellat.
            </p>
          </div>
        </div>
        <button>My Works</button>
      </section>
    </>
  )
}

export default Services
