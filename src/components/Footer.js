import React from "react"
import "../assets/styles/footer.css"
import { NavLink } from "react-router-dom"
import { BsWhatsapp } from "react-icons/bs"
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai"

function Footer() {
  return (
    <footer>
      <div className="footer-element">
        <ul className="footer-socials">
          <li>
            <NavLink>
              <AiFillLinkedin className="social-icons" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <AiFillTwitterSquare className="social-icons" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <BsWhatsapp className="social-icons" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <AiFillFacebook className="social-icons" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <AiFillGithub className="social-icons" />
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
