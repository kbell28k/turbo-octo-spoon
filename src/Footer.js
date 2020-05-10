import React, { Component } from "react";
import "./App.css";
import "./Responsive.css";
import behance from "./img/behance-logo.png";
import linkedin from "./img/linkedin-logo.png";
import medium from "./img/medium-logo.png";
import email from "./img/email-logo.png";

class Footer extends Component {
  state = {
    behance: behance,
    linkedin: linkedin,
    medium: medium,
    email: email,
  };

  render() {
    return (
      <div className="footer">
        <div className="footer-statement">Connect with me!</div>
        <div className="social-links">
          <div className="social">
            <a
              href="https://www.linkedin.com/in/kaylalbell-/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="linkedin"
                src={this.state.linkedin}
                alt="Linkedin Logo"
              />
            </a>
          </div>
          <div className="social-last">
            <a
              href="mailto:kbell28k@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="email" src={this.state.email} alt="Email Logo" />
            </a>
          </div>
        </div>
        <div className="footer-copyright">© 2020, Kayla Bell</div>
      </div>
    );
  }
}

export default Footer;
