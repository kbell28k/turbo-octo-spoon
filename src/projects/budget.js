import React, { Component } from "react";

import ProjectNav from "./ProjectNav.js";
import "../App.css";
import "../Responsive.css";
import "../Hamburgers.css";
import img00 from "../img/budget-logo.png";

class Schole extends Component {
  state = {
    logoImage: img00,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="project-content schole">
        <div className="cover">
          <ProjectNav
            logoColor="#BFC1C4"
            menuColor="#BFC1C4"
            logo={this.state.logoImage}
            title={[
              "Progressive Budget Web App",
              <br />,
              "Online / Offline Application",
            ]}
            domain="PC / Mobile Web"
            roles="Developer: Kayla Bell"
          />
        </div>

        <div className="thanks">
          <div className="thanks-text">
            Checkout the Progressive Budget App below!
          </div>
          <form
            action="https://boiling-beyond-56736.herokuapp.com/"
            method="get"
            target="_blank"
            className="download"
          >
            <button type="submit" className="download-button">
              BUDGET APP
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Schole;
