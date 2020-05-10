import React, { Component } from "react";
import ProjectNav from "./ProjectNav.js";
import "../App.css";
import "../Responsive.css";
import "../Hamburgers.css";
import img00 from "../img/framer-img00.png";
import img01 from "../img/neighbuddy-code.png";

class Framer extends Component {
  state = {
    logoImage: img00,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="project-content framer">
        <div className="cover">
          <ProjectNav
            logoColor="#c7fdef"
            menuColor="#c7fdef"
            logo={this.state.logoImage}
            title="COVID-19 Community App"
            domain="Geo-location based mobile application"
            roles="Front-End: Eric Licht, Milena Mihneva"
            rolesTwo="Back-End: Kayla Bell, Ilana Schaffer"
            date="2018.10 - 2018.11"
            firm="Personal Project"
          />
          <img src={img01} alt="Cover" className="cover-image" />
        </div>
        <div className="summary">
          <div className="content-title">Project Summary</div>
          <div className="content featured">
            This project was developed for the University of Denver.
          </div>
          <div className="content end">
            This COVID-19 development app came about as a way to safely exchange
            and communicate during quarantine. Connecting you to others in your
            neighborhood using geo-location, this app allows users to view local
            goods. If an item of interests peak the user's interest, they can
            add the item to their cart for a fee or chat with the seller to
            bargain for a trade.
          </div>
        </div>
        <div className="thanks">
          <div className="thanks-text">
            Checkout our Neighborhood App below!
          </div>
          <form
            action="https://young-sands-32420.herokuapp.com/"
            method="get"
            target="_blank"
            className="download"
          >
            <button type="submit" className="download-button">
              VIEW FULL PROJECT
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Framer;
