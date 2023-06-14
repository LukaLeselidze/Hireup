import React from "react";
import "./FirstSection.css";
import SearchLogo from "../img/SearchLog.svg";
import Building from "../img/building.webp";
import FirstLogo from "../img/FirstLogo.svg";
import SecondLogo from "../img/SecondLogo.svg";
import Logo3 from "../img/Logo3.svg";
import Logo4 from "../img/Logo4.svg";
import Logo5 from "../img/Logo5.svg";
import Logo6 from "../img/Logo6.svg";
import { Link } from "react-router-dom";

function FirstSection() {
  return (
    <div className="first_section">
      <div className="first_section_container">
        <div className="section_flex">
          <div className="new_container">
            <div className="new">
              <div className="new_left">New</div>
              <div className="new_right">
                Stay connected to get upcoming jobs
              </div>
            </div>
            <div className="main_text">
              <h1>Find the most exciting jobs in tech</h1>
            </div>
          </div>
          <div className="p_text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi
              rhoncus, pharetra leo et. <Link to="/signin">Sign in</Link> or{" "}
              <Link to="/signup">Sign up</Link> to get started!
            </p>
          </div>
        </div>
        <div className="form">
          <form>
            <div className="form_div">
              <img src={SearchLogo} />
              <input className="first_input" placeholder="Search..." />
            </div>
            <input value="Search" type="submit" className="second_input" />
          </form>
          <div className="section_photo_mobile section_photo_container">
            <img src={Building} />
          </div>
        </div>
        <div className="grid_logos_container">
          <div className="grid_logos">
            <img src={FirstLogo} />
          </div>
          <div className="grid_logos">
            <img src={SecondLogo} />
          </div>
          <div className="grid_logos">
            <img src={Logo3} />
          </div>
          <div className="grid_logos">
            <img src={Logo4} />
          </div>
          <div className="grid_logos">
            <img src={Logo5} />
          </div>
          <div className="grid_logos">
            <img src={Logo6} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
