import React from 'react'
import { FaLinkedinIn, FaGithub, FaAngellist, FaTwitter, FaRegEnvelope } from 'react-icons/fa'
import profile22 from '../images/profile22.png'

const MyDetails = () => {
  return (
    <div className="mydetails">
      <header className="details-cont">
        <div className="det-headings">
          <img src={profile22} alt="profile" className="profile-img" />
          <h1>
            FULL STACK DEVELOPER.
            <br />
            PROBLEM SOLVER.
            <br />
            THINKER.
            <br />
            &amp; A GAMER.
          </h1>
        </div>
        <p className="mydetails-p">
          I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don&apos;t hestiate to contact me.
        </p>
        <ul className="social-list">
          <li className="list-item">
            <a href="https://www.linkedin.com/in/oluwafemi-awoyemi/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </li>
          <li className="list-item">
            <a href="https://angel.co/u/oluwafemi-awoyemi/" target="_blank" rel="noopener noreferrer">
              <FaAngellist />
            </a>
          </li>
          <li className="list-item">
            <a href="https://github.com/phelian23" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
          <li className="list-item">
            <a href="https://twitter.com/femikola23" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </li>
          <li className="list-item">
            <a href="mailto:femikola23@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaRegEnvelope /> 
            </a>
          </li>
        </ul>
        <a href="https://drive.google.com/uc?export=download&id=1itquUtl9gN6mcIaIEG7LiHB-JZX0r6S5" download className="download-btn">Get my resume</a>
      </header>
    </div>
  )
}

export default MyDetails