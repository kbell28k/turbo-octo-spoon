import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./Responsive.css";
import "./Hamburgers.css";
import Project from "./Project.js";
import projectone from "./img/pawpals.png";
import projecttwo from "./img/vibestreet.png";
import projectthree from "./img/budget.png";
import projectfour from "./img/neighbuddy.png";

class Main extends Component {
  state = {
    projectOneImage: projectone,
    projectTwoImage: projecttwo,
    projectThreeImage: projectthree,
    projectFourImage: projectfour,
    hamburgerState: "off",
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
                  <Link to="/" className="active">
                    Projects
                  </Link>
                </div>
                <div className="about-mobile">
                  <Link to="/about">About</Link>
                </div>
              </div>
            </div>
            <div className="navigation-sub">
              <div className="work">
                <Link to="/" className="active">
                  Projects
                </Link>
              </div>
              <div className="about">
                <Link to="/about">About</Link>
              </div>
            </div>
          </div>
          <div className="designer">Analyst & Developer</div>
          <div className="speciality">Front-End / Back-End Development</div>
        </section>
        <section className="projects">
          {window.innerWidth <= 1009 ? (
            <div className="left">
              <p className="projects-intro">
                Featuring practical applications
                <br />
                in which{" "}
                <span className="bold">everyday problems are solved.</span>.
                <br />
                Designed around <span className="bold">product visions</span>,
                <br />
                that inspire the <span className="bold">"why not"</span> in
                billions of users.
              </p>
              <Project
                aos=""
                image={this.state.projectOneImage}
                link="/prismvideo"
                hmwClass="hmw"
                class="project-default"
                hmw={[
                  "All of your favorite",
                  <br />,
                  "furry friend spots",
                  <br />,
                  "at the tip of your paws.",
                ]}
                color="rgba(11, 156, 150, 0.95)"
                title="PawPals Pet Service Reservations"
                category="Scheduling Application"
                index="0"
              />
              <Project
                aos="fade-up"
                image={this.state.projectThreeImage}
                link="/schole"
                hmwClass="hmw hmw-exception"
                class="project-last"
                hmw={[
                  "How can we create",
                  <br />,
                  "an offline application",
                  <br />,
                  "accessible 24/7?",
                ]}
                color="rgba(233, 111, 94, 0.95)"
                title="Progressive Budget Application"
                category="PC / Mobile Application"
                index="1"
              />
            </div>
          ) : (
            <div className="left">
              <p className="projects-intro">
                Featuring practical applications
                <br />
                in which{" "}
                <span className="bold">everyday problems are solved.</span>.
                <br />
                Designed around <span className="bold">product visions</span>,
                <br />
                that inspire the <span className="bold">"why not"</span> in our
                users.
              </p>
              <Project
                aos=""
                image={this.state.projectOneImage}
                link="/prismvideo"
                hmwClass="hmw"
                class="project-default"
                hmw={[
                  "All of your favorite",
                  <br />,
                  "furry friend spots",
                  <br />,
                  "at the tip of your paws.",
                ]}
                color="rgba(11, 156, 150, 0.95)"
                title="PawPals Pet Service Reservations"
                category="Scheduling Application"
                index="0"
              />
              <Project
                aos=""
                image={this.state.projectThreeImage}
                link="/schole"
                hmwClass="hmw"
                class="project-last"
                hmw={[
                  "How can we create",
                  <br />,
                  "an offline application",
                  <br />,
                  "accessible 24/7?",
                ]}
                color="rgba(233, 111, 94, 0.95)"
                title="Progressive Budget Application"
                category="PC / Mobile Application"
                index="1"
              />
            </div>
          )}
          {window.innerWidth <= 1009 ? (
            <div className="right">
              <Project
                aos="fade-up"
                image={this.state.projectTwoImage}
                link="/prismlayout"
                hmwClass="hmw hmw-exception"
                class="project-default"
                hmw={[
                  "Creating community",
                  <br />,
                  "through interactive marketing",
                  <br />,
                  "and an intuitive user experience.",
                ]}
                color="rgba(251, 192, 96, 0.95)"
                title="VibeStreet Marketing and Events"
                category="Mobile Application"
                index="2"
              />
              <Project
                aos="fade-up"
                image={this.state.projectFourImage}
                link="/framer30"
                hmwClass="hmw hmw-exception"
                class="project-default"
                hmw={[
                  "How can we connect",
                  <br />,
                  "communities in need",
                  <br />,
                  "with Node applications?",
                ]}
                color="rgba(114, 164, 238, 0.95)"
                title="COVID-19 Neighborhood Experience"
                category="E-Commerce Application"
                index="3"
              />
            </div>
          ) : (
            <div className="right">
              <Project
                aos=""
                image={this.state.projectTwoImage}
                link="/prismlayout"
                hmwClass="hmw"
                class="project-default"
                hmw={[
                  "Creating community",
                  <br />,
                  "through interactive marketing",
                  <br />,
                  "and an intuitive user experience.",
                ]}
                color="rgba(251, 192, 96, 0.95)"
                title="VibeStreet Marketing and Events"
                category="Mobile Application"
                index="2"
              />
              <Project
                aos=""
                image={this.state.projectFourImage}
                link="/framer30"
                hmwClass="hmw"
                class="project-default"
                hmw={[
                  "How can we connect",
                  <br />,
                  "communities in need",
                  <br />,
                  "with Node applications?",
                ]}
                color="rgba(114, 164, 238, 0.95)"
                title="COVID-19 Neighborhood Experience"
                category="E-Commerce Application"
                index="3"
              />
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default Main;
