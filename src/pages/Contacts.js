import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import styled from "styled-components"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../assets/styles/contacts.css"

function Contacts() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_cnooxwn",
        "template_jpo4jke",
        form.current,
        "_KNwQjmYQooTlJzmE"
      )
      .then(
        (result) => {
          console.log(result.text)
          alert("Message Sent Successfully")
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <Header />
      <section className="contact_hero">
        <h2 className="section_title">Get-in-Touch</h2>
        <div className="contact-form">
          <StyledContactForm>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </StyledContactForm>
          <div className="contact-details">
            <div>
              <h3>Email:</h3>
              <p>
                <ul>
                  <li>
                    <a
                      href="mailto:samuel93ortil@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      samuel93ortil@gmail.com
                    </a>
                  </li>
                </ul>
              </p>
            </div>
            <div>
              <h3>Phone:</h3>
              <p>
                <ul>
                  <li>
                    <a href="tel:+2348133478014">(+234) 8133 478 014</a>
                  </li>
                </ul>
              </p>
            </div>
            <div>
              <h3>Address:</h3>
              <p>
                <ul>
                  <li>Lagos, Nigeria</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contacts

// Styles
const StyledContactForm = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 1.25em;

    input {
      width: 100%;
      height: 45px;
      padding: 10px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin: 2rem 0;
      cursor: pointer;
      background: rgba(0, 206, 158, 1);
      color: white;
      border: none;
      font-size: 1.2em;
    }
  }
`
