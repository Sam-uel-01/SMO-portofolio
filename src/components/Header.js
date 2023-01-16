import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import "../assets/styles/header.css"
import { CgMenuLeft } from "react-icons/cg"
import { TbArrowsCross } from "react-icons/tb"

function Header() {
  const [mobile, setMobile] = useState(false)
  return (
    <div className="container">
      <nav className="navBar">
        <h2 className="logo">Samuel M.O</h2>

        <ul
          className={mobile ? "mobile-nav-lists" : "nav_lists"}
          onClick={() => {
            setMobile(false)
          }}
        >
          <li>
            <NavLink to="/">
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/services">
              <span>Services</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/works">
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts">
              <span>Contacts</span>
            </NavLink>
          </li>
        </ul>

        <button
          className="mobile-icon"
          onClick={() => {
            setMobile(!mobile)
          }}
        >
          {mobile ? <TbArrowsCross /> : <CgMenuLeft />}
        </button>
      </nav>
    </div>
  )
}

export default Header
