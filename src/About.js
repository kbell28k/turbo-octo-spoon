import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./Responsive.css";
import profile from "./img/profile.png";
import resume from "./Resume_Kayla Bell.pdf";
import link from "./img/link-icon.svg";

class About extends Component {
  state = {
    hamburgerState: "off",
    link: link,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  toggleMenu = () => {
    let hamburger = document.querySelector(".hamburger");
    let overlay = document.querySelector(".overlay");
    if (this.state.hamburgerState === "off") {
      hamburger.classList.add("is-active");
      overlay.classList.remove("hide");
      overlay.classList.add("show");
      this.setState({ hamburgerState: "on" });
    } else {
      hamburger.classList.remove("is-active");
      overlay.classList.remove("show");
      overlay.classList.add("hide");
      this.setState({ hamburgerState: "off" });
    }
  };

  render() {
    return (
      <div className="body">
        <section className="header">
          <div className="navigation">
            <div className="anne">
              <Link to="/" className="active">
                Kayla Bell
              </Link>
            </div>
            <button
              className="hamburger hamburger--spin mobile"
              type="button"
              onClick={this.toggleMenu}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <div className="overlay mobile">
              <div className="submenus">
                <div className="work-mobile">
                  <Link to="/">Projects</Link>
                </div>
                <div className="about-mobile">
                  <Link to="/about" className="active">
                    About
                  </Link>
                </div>
              </div>
            </div>
            <div className="navigation-sub">
              <div className="work">
                <Link to="/">Projects</Link>
              </div>
              <div className="about">
                <Link to="/about" className="active">
                  About
                </Link>
              </div>
            </div>
          </div>
          <div className="designer">Analyst & Developer</div>
          <div className="speciality">Front-End / Back-End Development</div>
        </section>
        <section className="about">
          <img src={profile} alt="Profile" className="about-image" />
          {window.innerWidth <= 1009 ? (
            <div className="about-content">
              <div>
                Welcome! My name is Kayla.
                <br />
                <br />
                I'm a senior analyst and developer happy to dive in on
                problem-solving and lead with analytical insights. If something
                isn't working I strive to find out the "why?". Unafraid of
                innovation, I lead with thorough research and data to hit the
                ground running with a variety of technical implementation
                skills.
                <br />
                <br />
                <br />
              </div>
              <div data-aos="fade-up">
                <span className="about-title">
                  Experience and Passion Projects
                </span>
                <br />
                <br />
                I've found a passion in virtual building. From dashboarding and
                predictive algorithms with data science, to MERN and React apps
                in development - virtual puzzles for a consumer-driven platform
                is right up my alley.
                <br />
                <br />
                Feel free to contact me for any inquiries about my portfolio and
                work opportunities!
              </div>
            </div>
          ) : (
            <div className="about-content">
              <div>
                Welcome! My name is Kayla.
                <br />
                <br />
                I'm a senior analyst and developer happy to dive in on
                problem-solving and lead with analytical insights. If something
                isn't working I strive to find out the "why?". Unafraid of
                innovation, I lead with thorough research and data to hit the
                ground running with a variety of technical implementation
                skills.
                <br />
                <br />
                <br />
              </div>
              <div data-aos="fade-up">
                <span className="about-title">
                  Experience and Passion Projects
                </span>
                <br />
                <br />
                I've found a passion in virtual building. From dashboarding and
                predictive algorithms with data science, to MERN and React apps
                in development - virtual puzzles for a consumer-driven platform
                is right up my alley.
                <br />
                <br />
                Please reach out for further discussion on any portfolio items
                or professional opportunities!
              </div>
            </div>
          )}
        </section>
        <div className="about-resume">
          <a href={resume} download className="about-download-button">
            DOWNLOAD CV
          </a>
        </div>
      </div>
    );
  }
}

export default About;
