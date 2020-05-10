import React, { Component } from "react";
import ProjectNav from "./ProjectNav.js";
import "../App.css";
import "../Responsive.css";
import "../Hamburgers.css";
import img00 from "../img/vibestreetlogo.png";
import img01 from "../img/vibestreet-laptop.png";

class PrismLayout extends Component {
  state = {
    logoImage: img00,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  toggleConcepts = (index) => {
    let conceptTitles = document.querySelectorAll(".concept-title");
    let conceptA = document.querySelectorAll(".concept-a");
    let conceptB = document.querySelectorAll(".concept-b");
    let conceptC = document.querySelectorAll(".concept-c");

    for (let title of conceptTitles) {
      title.classList.remove("inactive");
      title.classList.remove("active");
      title.classList.add("inactive");
    }

    conceptTitles[index].classList.add("active");

    if (index === 0) {
      for (let concept of conceptA) {
        concept.classList.add("display");
      }
      for (let concept of conceptB) {
        concept.classList.remove("display");
      }
      for (let concept of conceptC) {
        concept.classList.remove("display");
      }
    } else if (index === 1) {
      for (let concept of conceptA) {
        concept.classList.remove("display");
      }
      for (let concept of conceptB) {
        concept.classList.add("display");
      }
      for (let concept of conceptC) {
        concept.classList.remove("display");
      }
    } else {
      for (let concept of conceptA) {
        concept.classList.remove("display");
      }
      for (let concept of conceptB) {
        concept.classList.remove("display");
      }
      for (let concept of conceptC) {
        concept.classList.add("display");
      }
    }
  };

  toggleSolutions = (index) => {
    let solutionTitles = document.querySelectorAll(".solution-title");
    let solutionA = document.querySelector(".tobe");
    let solutionB = document.querySelector(".asis");

    for (let title of solutionTitles) {
      title.classList.remove("inactive");
      title.classList.remove("active");
    }

    solutionTitles[index].classList.add("active");

    if (index === 0) {
      solutionA.classList.add("display");
      solutionB.classList.remove("display");
    } else {
      solutionA.classList.remove("display");
      solutionB.classList.add("display");
    }
  };

  render() {
    return (
      <section className="project-content prismlayout">
        <div className="cover">
          <ProjectNav
            logoColor="#E0E0E0"
            menuColor="#E0E0E0"
            logo={this.state.logoImage}
            title={["VibeStreet", <br />, "Geo-location App"]}
            domain="PC / Mobile Application"
            roles="Front-End: Kayla Bell, Milena Mihneva"
            rolesTwo="Back-End: Kayla Bell, Eric Licht"
          />
          <img src={img01} alt="Cover" className="cover-image" />
        </div>
        <div className="background">
          <div className="stage-title stage-gray">ABOUT</div>
          <div className="content-title-second">
            VIBESTREET,
            <br />
            The geo app used to find your next vibe.
          </div>
          <div className="content end">
            Find your vibe! Use VibeStreet.com as a guide to your next best
            destination! With so many options to choose from, you may often find
            yourself wondering about the best place to go. No matter the genre
            or venue, search for live music and entertainment near you.
          </div>
        </div>
        <div className="thanks">
          <div className="thanks-text">Navigate to VibeStreet below!</div>
          <form
            action="https://kbell28k.github.io/Project-One//events"
            method="get"
            target="_blank"
            className="download"
          >
            <button type="submit" className="download-button">
              VIBESTREET
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default PrismLayout;
