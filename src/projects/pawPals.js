import React, { Component } from "react";

import ProjectNav from "./ProjectNav.js";
import "../App.css";
import "../Responsive.css";
import "../Hamburgers.css";
import img01 from "../img/pawpals-background.png";
import img00 from "../img/projectonebackground.png";

class PrismVideo extends Component {
  state = {
    logoImage: img00,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="project-content prismvideo">
        <div className="cover">
          <ProjectNav
            logoColor="#E0E0E0"
            menuColor="#E0E0E0"
            logo={this.state.logoImage}
            title={["PawPals", <br />, "Pet Service Reservations"]}
            domain="Mobile Application"
            roles="Developer: Kayla Bell"
            rolesTwo="Graphic Design: Benjamin Tribble"
          />
          <img src={img01} alt="Cover" className="cover-image" />
        </div>
        <div className="background">
          <div className="stage-title stage-gray">ABOUT</div>
          <div className="content-title-second">
            PawPals,
            <br />
            All your furry friend resources in one place.
          </div>
          <div className="content end">
            Scheduled a facial at 10AM on a Friday? Why not drop your pupper off
            for a nail trim and bath right before that? PawPals allows you to
            access all pet service locations in your area and schedule any kind
            of service for your pet on-demand. Have a favorite spot? Let them
            know by rating the service afterwards. Quickly access past
            appointments and locations easily by navigating to your profile.
            PawPals in the one-stop park for all of your favorite critters!
          </div>
        </div>
        <div className="thanks">
          <div className="thanks-text">Checkout PawPals below!</div>
          <form
            action="https://pawpalz.herokuapp.com/"
            method="get"
            target="_blank"
            className="download"
          >
            <button type="submit" className="download-button">
              PAWPALS APP
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default PrismVideo;
