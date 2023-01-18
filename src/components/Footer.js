import React from "react"
import "../assets/styles/footer.css"
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
            <a
              href="https://www.linkedin.com/in/samuelortil/"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillLinkedin className="social-icons" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Zeddic_SMO"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillTwitterSquare className="social-icons" />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+2348133478014"
              target="_blank"
              rel="noreferrer"
            >
              <BsWhatsapp className="social-icons" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/samuel93ortil"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook className="social-icons" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Sam-uel-01"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="social-icons" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
